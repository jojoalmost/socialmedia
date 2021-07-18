import {render, screen, waitFor} from '@testing-library/react';
import Comment from "./Comment";

test('render comment', async () => {
    render(<Comment body='this is a comment' id={1} postId={1} name='jojo' email='jojo.almostover@gmail.com'/>);
    await waitFor(() => screen.getByText(/this is a comment/i))
    expect(screen.getByText(/this is a comment/i)).toBeInTheDocument();
});
