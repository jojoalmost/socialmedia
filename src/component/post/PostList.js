import React, {useEffect, useState} from 'react';
import api from "../../utils/api";
import PostCard from "./PostCard";

const PostList = ({userId}) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        api.get("posts", {params: {userId: userId}}).then(res => {
            const {data} = res;
            setPosts(data);
        })
    }, [userId])

    return (
        <>
            <h3>Post</h3>
            <div>
                {posts.map(post => (
                    <PostCard {...post}/>
                ))}
            </div>
        </>
    )
}
export default PostList
