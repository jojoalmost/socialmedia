import {render, screen} from '@testing-library/react';
import UserDetailTabContent from "./UserDetailTabContent";
import {BrowserRouter as Router,} from "react-router-dom";

test('render user detail tab content', () => {
    render(
        <Router>
            <UserDetailTabContent/>
        </Router>
    );
});
