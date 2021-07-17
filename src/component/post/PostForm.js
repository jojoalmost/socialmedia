import React, {useState} from 'react';
import api from "../../utils/api";
import styles from "./PostForm.module.css"

const PostForm = ({userId, callback}) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = () => {
        if (title.trim() === '' || body.trim() === '') return false;

        const payload = {
            title,
            body,
            userId,
        };

        return api.post('posts', payload).then(res => {
            const {data} = res;
            callback(data);
            setTitle('');
            setBody('');
        });
    }

    const handleOnChangeTitle = (event) => {
        const {target: {value}} = event;
        setTitle(value);
    }

    const handleOnChangeBody = (event) => {
        const {target: {value}} = event;
        setBody(value);
    }

    return (
        <div className={styles.container}>
            <div className={styles.formGroup}>
                <input type="text" placeholder="Write a post title here..." onChange={handleOnChangeTitle}
                       value={title}/>
            </div>
            <div className={styles.formGroup}>
                <textarea placeholder="Write a post here..." onChange={handleOnChangeBody} value={body}/>
            </div>
            <button type="button" onClick={handleSubmit}>Post</button>
        </div>
    )
}
export default PostForm;
