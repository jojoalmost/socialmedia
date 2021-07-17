import React, {useState} from 'react';
import api from "../../../utils/api";

const CommentForm = ({callback}) => {
    const [comment, setComment] = useState('');

    const handleSubmit = () => {
        const payload = {
            comment,
            userId: 1,
        };
        api.post('comments', payload).then(res => {
            const {data} = res;
            callback(data);
        })
    }

    const handleOnChangeComment = (event) => {
        const {target: {value}} = event;
        setComment(value);
    }

    return (
        <div>
            <input type="text" placeholder="Write a comment here..." onChange={handleOnChangeComment} value={comment}/>
            <button  type="button" onClick={handleSubmit}>Send</button>
        </div>
    )
}
export default CommentForm;
