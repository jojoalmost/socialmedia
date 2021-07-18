import {render, screen} from '@testing-library/react';
import React from "react";
import CommentForm from "./CommentForm";

const comment = 'this is a comment';
test('render post form', () => {
    render(
        <CommentForm
            postId={1}
            userId={1}
            callbackOnUpdate={jest.fn()}
            callbackOnCreate={jest.fn()}
            callbackOnDelete={jest.fn()}
            comment={comment}
            commentId={1}
        >
            <div>
                <p>{comment}</p>
            </div>
        </CommentForm>
    );
    const linkElement = screen.getByText(/this is a comment/i);
    expect(linkElement).toBeInTheDocument();
});
