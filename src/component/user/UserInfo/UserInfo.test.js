import {render, screen} from '@testing-library/react';
import UserInfo from "./UserInfo";

test('render user info', () => {
    render(
        <UserInfo
            address={{
                street: "Kulas Light",
                suite: "Apt. 556",
                city: "Gwenborough",
                zipcode: "92998-3874",
                geo: {
                    "lat": "-37.3159",
                    "lng": "81.1496"
                }
            }}
            company={{
                name: "Romaguera-Crona",
                catchPhrase: "Multi-layered client-server neural-net",
                bs: "harness real-time e-markets"
            }}
            email='Sincere@april.biz'
            phone='92998-3874'
            website='hildegard.org'
        />
    );
    const linkElement = screen.getByText(/Sincere@april.biz/i);
    expect(linkElement).toBeInTheDocument();
});
