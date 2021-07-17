import React, {useEffect, useState} from 'react';
import api from "../../utils/api";
import PostCard from "./PostCard";
import styles from "./PostList.module.css"
import PostForm from "./PostForm";

const PostList = ({userId}) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        api.get("posts", {params: {userId: userId}}).then(res => {
            const {data} = res;
            setPosts(data);
        })
    }, [userId]);

    const handleCallbackSubmitted = (data) => {
        setPosts([data, ...posts]);
    }

    return (
        <div className={styles.container}>
            <h3>Posts</h3>
            <div>
                <PostForm userId={userId} callback={handleCallbackSubmitted}/>
                {posts.map(post => (
                    <PostCard key={post.id} {...post}/>
                ))}
            </div>
        </div>
    )
}
export default PostList
