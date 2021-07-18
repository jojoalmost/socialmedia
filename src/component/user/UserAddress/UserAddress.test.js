import {render, screen} from '@testing-library/react';
import UserAddress from "./UserAddress";

test('render user address', () => {
    render(
        <UserAddress
            city='Gwenborough'
            geo={{lat: '-37.3159', lng: '81.1496'}}
            street='Kulas Light'
            suite='Apt. 556'
            zipcode='92998-3874'
        />
    );
    const linkElement = screen.getByText(/Gwenborough/i);
    expect(linkElement).toBeInTheDocument();
});
