import {render, screen} from '@testing-library/react';
import PhotoCard from "./PhotoCard";

test('render photo card', () => {
    render(<PhotoCard id={1}
                      title='officia porro iure quia iusto qui ipsa ut modi'
                      thumbnailUrl='https://via.placeholder.com/150/24f355'
                      onShowPhoto={jest.fn()}
    />);
    const linkElement = screen.getByText(/officia porro iure quia iusto qui ipsa ut modi/i);
    expect(linkElement).toBeInTheDocument();
});
