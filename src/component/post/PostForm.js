import React, {useEffect, useState} from 'react';
import api from "../../utils/api";
import styles from "./PostForm.module.css";
import stylesButton from "./PostForm.module.css";

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
    }, [isEdit]);

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
                    request = await api.put(`posts/${postId}`, payload)
                    break;
                case "create":
                default:
                    const updatePayload = {id: postId, ...payload};
                    request = await api.post('posts', updatePayload);
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

    const handleClickEdit = async (e) => {
        try {
            if (isEdit) {
                if (!window.confirm("Do you really want update this post?")) return false;
                const request = await onSubmittedForm('edit');
                callbackOnUpdate(request);
                setTitle('');
                setBody('');
            }
            setIsEdit(!isEdit);
        } catch (e) {
            console.error(e)
        }
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

    const handleOnChangeTitle = (event) => {
        event.preventDefault();
        const {target: {value}} = event;
        setTitle(value);
    }

    const handleOnChangeBody = (event) => {
        event.preventDefault();
        const {target: {value}} = event;
        setBody(value);
    }

    return (
        <div className={styles.container}>
            {children ? (
                <>
                    {isEdit ? (
                        <>
                            <div className={styles.formGroup}>
                                <input type="text" placeholder="Write a post title here..."
                                       onChange={handleOnChangeTitle}
                                       value={title}/>
                            </div>
                            <div className={styles.formGroup}>
                                <textarea placeholder="Write a post here..." onChange={handleOnChangeBody}
                                          value={body}/>
                            </div>
                        </>
                    ) : (
                        <>{children}</>
                    )}
                </>

            ) : (
                <>
                    <div className={styles.formGroup}>
                        <input type="text" placeholder="Write a post title here..." onChange={handleOnChangeTitle}
                               value={title}/>
                    </div>
                    <div className={styles.formGroup}>
                        <textarea placeholder="Write a post here..." onChange={handleOnChangeBody} value={body}/>
                    </div>
                </>
            )}

            {!children ? (
                <button className={styles.buttonSubmit} type="button" onClick={handleClickPost}>Post</button>
            ) : (
                <div>
                    <button className={stylesButton.buttonSubmit} type="button" onClick={handleClickEdit}>
                        {isEdit ? 'Save' : 'Edit'}
                    </button>
                    <button className={stylesButton.buttonDelete} type="button" onClick={handleClickDelete}>Delete
                    </button>
                </div>
            )}
        </div>
    )
}
export default PostForm;
