import React, {useEffect, useState} from 'react';
import api from "../../../utils/api";
import Comment from "./Comment";

const CommentList = ({postId}) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        api.get(`posts/${postId}/comments`).then(res => {
            const {data} = res;
            setComments(data);
        })
    }, [postId])

    return (
        <div>
            {comments.map((comment) => <Comment {...comment}/>)}
        </div>
    )
}
export default CommentList;
