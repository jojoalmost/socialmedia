import {render, screen, waitFor} from '@testing-library/react';
import PostCard from "./PostCard";

test('render post card', async () => {
    render(
        <PostCard
            id={2}
            userId={1}
            title="qui est esse"
            body="est rerum tempore vitae"
        />);
    await waitFor(() => screen.getByText(/qui est esse/i))
    expect(screen.getByText(/qui est esse/i)).toBeInTheDocument();
});
