import React, {useEffect, useState} from 'react';
import api from "../../../utils/api";
import styles from "../PostForm.module.css";

const CommentForm = ({
                         commentId,
                         comment: currentComment,
                         userId,
                         postId,
                         callbackOnCreate,
                         callbackOnUpdate,
                         callbackOnDelete,
                         children,
                     }) => {
    const [comment, setComment] = useState('');
    const [isEdit, setIsEdit] = useState(false);

    useEffect(() => {
        if (isEdit) {
            setComment(currentComment);
        }
    }, [isEdit]);

    const onSubmittedForm = async (type = 'create') => {
        try {
            if (comment.trim() === '') throw new Error('fill all input');
            const payload = {
                body: comment,
                commentId,
                userId,
            };
            let request;
            switch (type) {
                case 'edit':
                    const updatePayload = {id: commentId, ...payload};
                    request = await api.put(`comments/${commentId}`, updatePayload)
                    break;
                case "create":
                default:
                    request = await api.post('comments', payload);
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
            const {data: {userId, body, id}} = request;
            const getUser = await api.get(`users/${userId}`);
            const {data: {email, name}} = getUser;
            const formatted = {
                body, id, name, email, postId,
            }
            console.log(formatted);
            callbackOnCreate(formatted);
            setComment('');
        } catch (e) {
            console.error(e)
        }
    }

    const handleClickEdit = async (e) => {
        try {
            if (isEdit) {
                if (!window.confirm("Do you really want update this comment?")) return false;
                const request = await onSubmittedForm('edit');
                callbackOnUpdate(request);
                setComment('')
            }
            setIsEdit(!isEdit);
        } catch (e) {
            console.error(e)
        }
    }

    const handleClickDelete = async (e) => {
        try {
            if (!window.confirm("Do you really want delete this comment?")) return false;
            await api.delete(`comments/${commentId}`);
            callbackOnDelete(commentId);
        } catch (e) {
            console.error(e)
        }
    }


    const handleOnChangeComment = (event) => {
        const {target: {value}} = event;
        setComment(value);
    }

    return (
        <div className={styles.container}>
            {children ? (
                <>
                    {isEdit ? (
                        <div className={styles.formGroup}>
                            <input type="text" placeholder="Write a comment here..."
                                   onChange={handleOnChangeComment}
                                   value={comment}/>
                        </div>
                    ) : (
                        <>{children}</>
                    )}
                </>
            ) : (
                <div className={styles.formGroup}>
                    <input type="text" placeholder="Write a comment here..."
                           onChange={handleOnChangeComment}
                           value={comment}/>
                </div>
            )}

            {!children ? (
                <button className={styles.buttonSubmit} type="button" onClick={handleClickPost}>Send</button>
            ) : (
                <div>
                    <button className={styles.buttonSubmit} type="button" onClick={handleClickEdit}>
                        {isEdit ? 'Update' : 'Edit'}
                    </button>
                    <button className={styles.buttonDelete} type="button" onClick={handleClickDelete}>Delete
                    </button>
                </div>
            )}
        </div>
    )
}
export default CommentForm;
