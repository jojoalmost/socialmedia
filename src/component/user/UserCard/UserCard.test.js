import { render, screen } from '@testing-library/react';
import UserCard from "./UserCard";

test('render user card', () => {
    render(<UserCard id={1} name='Leanne Graham' username='Bret' />);
    const linkElement = screen.getByText(/Leanne Graham/i);
    expect(linkElement).toBeInTheDocument();
});
