import React from 'react';

const Comment = ({id, postId, name, email, body}) => {
    return (
        <div>
            <h5>{name}</h5>
            <p>{body}</p>
            <div>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    )
}
export default Comment;
