import {render, screen} from '@testing-library/react';
import PostForm from "./PostForm";
import React from "react";

const form = {
    title: 'qui est esse',
    body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
}
test('render post form', () => {
    render(
        <PostForm
            form={form}
            userId={1}
            callbackOnDelete={jest.fn()}
            callbackOnCreate={jest.fn()}
            callbackOnUpdate={jest.fn()}
            postId={1}
        >
            <div>
                <h4>{form.title}</h4>
                <div>
                    <p>{form.body}</p>
                </div>
            </div>
        </PostForm>
    );
    const linkElement = screen.getByText(/qui est esse/i);
    expect(linkElement).toBeInTheDocument();
});
