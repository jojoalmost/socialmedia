import {render, screen, waitFor} from '@testing-library/react';
import AlbumCard from "./AlbumCard";

test('render album card', async () => {
    render(<AlbumCard id={1} title="quidem molestiae enim"/>);
    await waitFor(() => screen.getByText(/quidem molestiae enim/i))
    expect(screen.getByText(/quidem molestiae enim/i)).toBeInTheDocument();
});
