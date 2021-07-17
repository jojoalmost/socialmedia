import React, {useEffect, useState} from 'react';
import api from "../../../utils/api";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

const CommentList = ({postId}) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        api.get(`posts/${postId}/comments`).then(res => {
            const {data} = res;
            setComments(data);
        })
    }, [postId]);

    const handleCallbackSubmitted = (data) => {
        setComments([...comments, data]);
    }

    return (
        <div>
            <CommentForm callback={handleCallbackSubmitted}/>
            {comments.map((comment) => <Comment {...comment}/>)}
        </div>
    )
}
export default CommentList;
