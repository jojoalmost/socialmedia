import React, {useState} from 'react';
import api from "../../utils/api";

const PostForm = ({callback}) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = () => {
        const payload = {
            title,
            body,
            userId: 1,
        };
        api.post('posts', payload).then(res => {
            const {data} = res;
            callback(data);
        })
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
        <div>
            <div>
                <input type="text" placeholder="Write a post title here..." onChange={handleOnChangeTitle}
                       value={title}/>
            </div>
            <div>
                <textarea placeholder="Write a post here..." onChange={handleOnChangeBody} value={body}/>
            </div>
            <button type="button" onClick={handleSubmit}>Post</button>
        </div>
    )
}
export default PostForm;
