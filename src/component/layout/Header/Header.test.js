import {render, screen} from '@testing-library/react';
import Header from "./Header";
import {BrowserRouter as Router,} from "react-router-dom";

test('render header', () => {
    render(
        <Router>
            <Header/>
        </Router>);
});

