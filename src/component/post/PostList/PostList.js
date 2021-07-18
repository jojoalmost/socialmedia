import React, {useEffect, useState} from 'react';
import api from "../../../utils/api";
import PostCard from "../PostCard/PostCard";
import styles from "./PostList.module.css"
import PostForm from "../PostForm/PostForm";

const PostList = ({userId}) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        api.get("posts", {params: {userId: userId}}).then(res => {
            const {data} = res;
            setPosts(data);
        })
    }, [userId]);

    const handleCallbackOnCreate = (res) => {
        const {data} = res;
        setPosts([data, ...posts]);
    }

    const handleCallbackOnUpdate = (res) => {
        const {data} = res;
        const replaced = posts.map(item => {
            if (item.id === data.id) {
                return data;
            }
            return item
        });
        setPosts(replaced);
    }

    const handleCallbackOnDelete = (postId) => {
        const filtered = posts.filter(({id}) => id !== postId);
        setPosts(filtered);
    }

    return (
        <div className={styles.container}>
            <h3>Posts ({posts.length})</h3>
            <div>
                <PostForm
                    userId={userId}
                    callbackOnCreate={handleCallbackOnCreate}
                />
                {posts.map((post,index) => (
                    <PostCard
                        key={`${post.id}-${index}`}
                        {...post}
                        callbackOnUpdate={handleCallbackOnUpdate}
                        callbackOnDelete={handleCallbackOnDelete}
                    />
                ))}
            </div>
        </div>
    )
}
export default PostList
