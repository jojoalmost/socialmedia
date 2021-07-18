import {render, screen} from '@testing-library/react';
import UserCompany from "./UserCompany";

test('render user company', () => {
    render(
        <UserCompany
            name='Romaguera-Crona'
            catchPhrase='Multi-layered client-server neural-net'
            bs="harness real-time e-markets"
        />
    );
    const linkElement = screen.getByText(/Romaguera-Crona/i);
    expect(linkElement).toBeInTheDocument();
});
