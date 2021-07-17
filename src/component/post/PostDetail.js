import React, {useEffect, useState} from 'react';
import api from "../../utils/api";
import {useParams} from "react-router";
import CommentList from "./comment/CommentList";

const PostDetail = () => {
    const [post, setPost] = useState({});
    const {postId} = useParams();

    useEffect(() => {
        api.get(`posts/${postId}`).then(res => {
            const {data} = res;
            setPost(data);
        })
    }, [postId])

    const {title, body} = post;
    return (
        <div>
            <div>
                <h3>{title}</h3>
                <p>{body}</p>
            </div>

            <CommentList postId={postId}/>
        </div>
    )
}
export default PostDetail;
