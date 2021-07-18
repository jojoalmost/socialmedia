import React, {useEffect, useState} from 'react';
import api from "../../../utils/api";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import styles from "./CommentList.module.css"

const CommentList = ({postId, userId}) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        api.get(`posts/${postId}/comments`).then(res => {
            const {data} = res;
            setComments(data);
        })
    }, [postId]);

    const handleCallbackOnCreate = (res) => {
        setComments([res, ...comments]);
    }

    const handleCallbackOnUpdate = (res) => {
        const replaced = comments.map(item => {
            if (item.id === res.id) {
                return res;
            }
            return item
        });
        setComments(replaced);
    }

    const handleCallbackOnDelete = (postId) => {
        const filtered = comments.filter(({id}) => id !== postId);
        setComments(filtered);
    }


    return (
        <div className={styles.container}>
            <h4>Comments ({comments.length})</h4>
            <CommentForm
                callbackOnCreate={handleCallbackOnCreate}
                userId={userId}
                postId={postId}
            />
            {comments.map((comment) => <Comment
                key={comment.id}
                {...comment}
                callbackOnUpdate={handleCallbackOnUpdate}
                callbackOnDelete={handleCallbackOnDelete}
                userId={userId}
                postId={postId}
            />)}
        </div>
    )
}
export default CommentList;
