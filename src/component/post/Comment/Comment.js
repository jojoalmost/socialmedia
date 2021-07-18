import React from 'react';
import CommentForm from "./CommentForm/CommentForm";
import styles from "./Comment.module.css"

const Comment = ({id, postId, name, email, body, ...rest}) => {
    return (
        <div className={styles.card}>
            <CommentForm
                commentId={id}
                comment={body}
                {...rest}
            >
                <div>
                    <div className={styles.nameContainer}>
                        <h4 className={styles.name}>{name}</h4>
                        <h5 className={styles.email}>{email}</h5>
                    </div>
                    <p>{body}</p>
                </div>
            </CommentForm>
        </div>

    )
}
export default Comment;
