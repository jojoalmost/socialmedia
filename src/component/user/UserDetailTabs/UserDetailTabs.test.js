import {render, screen} from '@testing-library/react';
import UserDetailTabs from "./UserDetailTabs";
import {BrowserRouter as Router,} from "react-router-dom";

test('render user detail tab', () => {
    render(
        <Router>
            <UserDetailTabs userId={1}>
                <div></div>
            </UserDetailTabs>
        </Router>
    );
    const linkElement = screen.getByText(/Album/i);
    expect(linkElement).toBeInTheDocument();
});
