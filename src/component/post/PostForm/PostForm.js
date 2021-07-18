import React, {useEffect, useState} from 'react';
import api from "../../../utils/api";
import styles from "./PostForm.module.css";
import Form from "./Form";

const PostForm = ({
                      postId,
                      userId,
                      callbackOnCreate,
                      callbackOnUpdate,
                      callbackOnDelete,
                      form,
                      children
                  }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [isEdit, setIsEdit] = useState(false);

    useEffect(() => {
        if (isEdit) {
            setTitle(form.title);
            setBody(form.body);
        }
    }, [isEdit, form]);

    const onSubmittedForm = async (type = 'create') => {
        try {
            if (title.trim() === '' || body.trim() === '') throw new Error('fill all input');
            const payload = {
                title,
                body,
                userId,
            };
            let request;
            switch (type) {
                case 'edit':
                    const updatePayload = {id: postId, ...payload};
                    request = await api.put(`posts/${postId}`, updatePayload)
                    break;
                case "create":
                default:
                    request = await api.post('posts', payload);
                    break
            }
            return request;
        } catch (e) {
            alert(e.message);
            throw e;
        }
    }

    const handleClickPost = async (e) => {
        try {
            const request = await onSubmittedForm();
            callbackOnCreate(request);
            setTitle('');
            setBody('');
        } catch (e) {
            console.error(e)
        }
    }

    const handleClickSave = async (e) => {
        try {
            if (!window.confirm("Do you really want update this post?")) return false;
            const request = await onSubmittedForm('edit');
            callbackOnUpdate(request);
            setTitle('');
            setBody('');
            setIsEdit(!isEdit);
        } catch (e) {
            console.error(e)
        }
    }

    const handleClickEdit = (e) => {
        setIsEdit(!isEdit);
    }

    const handleClickDelete = async (e) => {
        try {
            if (!window.confirm("Do you really want delete this post?")) return false;
            await api.delete(`posts/${postId}`);
            callbackOnDelete(postId);
        } catch (e) {
            console.error(e)
        }
    }

    const handleOnChange = (event, inputType) => {
        const {target: {value}} = event;
        switch (inputType) {
            case 'title':
                setTitle(value);
                break;
            case 'body':
                setBody(value);
                break;
            default:
                break;
        }
    }

    return (
        <div className={styles.container}>
            {children ? (
                <>
                    {isEdit ? (
                        <Form body={body} title={title} onChangeInput={handleOnChange}/>
                    ) : (
                        <>{children}</>
                    )}
                </>

            ) : (
                <Form body={body} title={title} onChangeInput={handleOnChange}/>
            )}

            {!children ? (
                <button className={styles.buttonSubmit} type="button" onClick={handleClickPost}>Post</button>
            ) : (
                <div>

                    {isEdit ? (
                        <>
                            <button className={styles.buttonSubmit} type="button" onClick={handleClickSave}>
                                Save
                            </button>
                            <button className={styles.buttonSubmit} type="button" onClick={() => setIsEdit(!isEdit)}>
                                Cancel
                            </button>
                        </>
                    ) : (
                        <button className={styles.buttonSubmit} type="button" onClick={handleClickEdit}>
                            Edit
                        </button>
                    )}
                    <button className={styles.buttonDelete} type="button" onClick={handleClickDelete}>Delete
                    </button>
                </div>
            )}
        </div>
    )
}
export default PostForm;
