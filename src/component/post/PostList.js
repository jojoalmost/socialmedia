import React, {useEffect, useState} from 'react';
import api from "../../utils/api";
import PostCard from "./PostCard";
import styles from "./PostList.module.css"

const PostList = ({userId}) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        api.get("posts", {params: {userId: userId}}).then(res => {
            const {data} = res;
            setPosts(data);
        })
    }, [userId])

    return (
        <div className={styles.container}>
            <h3>Posts</h3>
            <div>
                {posts.map(post => (
                    <PostCard {...post}/>
                ))}
            </div>
        </div>
    )
}
export default PostList
