import { render, screen } from '@testing-library/react';
import NoMatch from "./NoMatch";

test('render nomatch 404', () => {
    render(<NoMatch />);
    const linkElement = screen.getByText(/Oops! 404 Not found/i);
    expect(linkElement).toBeInTheDocument();
});
