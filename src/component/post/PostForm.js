import React, {useEffect, useState} from 'react';
import api from "../../utils/api";
import styles from "./PostForm.module.css";
import stylesButton from "./PostForm.module.css";

const PostForm = ({postId, userId, callback, form, children}) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [isEdit, setIsEdit] = useState(false);

    useEffect(() => {
        if (isEdit) {
            setTitle(form.title);
            setBody(form.body);
        }
    }, [isEdit]);

    const handleClickPost = () => {
        if (title.trim() === '' || body.trim() === '') return false;

        const payload = {
            title,
            body,
            userId,
        };

        return api.post('posts', payload).then(res => {
            const {data} = res;
            callback(data);
            setTitle('');
            setBody('');
        });
    }

    const handleClickEdit = (e) => {
        e.stopPropagation();
        if (isEdit) {
            if (!window.confirm("Do you really want update this post?")) return false;
            if (title.trim() === '' || body.trim() === '') return false;
            const payload = {
                id: postId,
                title,
                body,
                userId,
            };
            api.put(`posts/${postId}`, payload).then(res => {
                console.log(res);
            });
        }
        setIsEdit(!isEdit);
    }

    const handleClickDelete = (e) => {
        e.stopPropagation();
        if (!window.confirm("Do you really want delete this post?")) return;
        api.delete(`posts/${postId}`).then(res => {
            console.log(res);
        });
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
