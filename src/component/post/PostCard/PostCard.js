import React from 'react';
import styles from './PostCard.module.css'
import {useHistory} from "react-router";
import PostForm from "../PostForm/PostForm";

const PostCard = ({id: postId, body, title, userId, ...rest}) => {
    const history = useHistory();

    const handleClickCard = () => {
        history.push(`/post/${postId}`)
    }

    const form = {body, title};

    return (
        <div className={styles.card}>
            <div className={styles.containerFormEdit}>
                <PostForm
                    form={form}
                    userId={userId}
                    postId={postId}
                    {...rest}
                >
                    <div role="button" onClick={handleClickCard}>
                        <h4>{title}</h4>
                        <div className={styles.content}>
                            <p>{body}</p>
                        </div>
                    </div>
                </PostForm>
            </div>
        </div>
    );
}
export default PostCard;
