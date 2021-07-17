import React from 'react';

const Comment = ({id, postId, name, email, body}) => {
    return (
        <div>
            <h5>{name} {email}</h5>
            <p>{body}</p>
        </div>
    )
}
export default Comment;
