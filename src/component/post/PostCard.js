import React, {useState} from 'react';
import styles from './PostCard.module.css'
import stylesButton from './PostForm.module.css'
import {useHistory} from "react-router";
import PostForm from "./PostForm";
import api from "../../utils/api";

const PostCard = ({id, body, title, userId}) => {
    const [isEdit, setIsEdit] = useState(false);

    const history = useHistory();

    const handleClickCard = () => {
        history.push(`/post/${id}`)
    }

    const handleClickEdit = (e) => {
        e.stopPropagation ();
        if (isEdit) {
            if (!window.confirm("Do you really want update this post?")) return;
            const payload = {
                id: 1,
                title: 'foo',
                body: 'bar',
                userId,
            };
            api.put(`posts/${id}`, payload).then(res => {
                console.log(res);
            });
        }
        setIsEdit(!isEdit);
    }

    const handleClickDelete = (e) => {
        e.stopPropagation ();
        if (!window.confirm("Do you really want delete this post?")) return;
        api.delete(`posts/${id}`).then(res => {
            console.log(res);
        });
    }

    const form = {body, title};

    return (
        <div className={styles.card} onClick={handleClickCard}>
            {isEdit ? (
                <div className={styles.containerFormEdit}>
                    <PostForm form={form} userId={userId} isEdit={isEdit}>

                    </PostForm>
                </div>
            ) : (
                <div>
                    <h4>{title}</h4>
                    <div className={styles.content}>
                        <p>{body}</p>
                    </div>
                </div>
            )}

            <div className={styles.ActionButtonContainer}>
                <button className={stylesButton.buttonSubmit} type="button" onClick={handleClickEdit}>
                    {isEdit ? 'Save' : 'Edit'}
                </button>
                <button className={stylesButton.buttonDelete} type="button" onClick={handleClickDelete}>Delete</button>
            </div>
        </div>
    );
}
export default PostCard;
