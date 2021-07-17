import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route,
} from "react-router-dom";
import Users from "./pages/Users";
import NoMatch from "./pages/NoMatch";
import UserDetail from "./pages/UserDetail";
import PostDetail from "./pages/PostDetail";

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/users">
                    <Users/>
                </Route>
                <Route path="/user/:id">
                    <UserDetail/>
                </Route>
                <Route path="/post/:id">
                    <PostDetail/>
                </Route>
                <Route path="/">
                    <Redirect to="/users"/>
                </Route>
                <Route path="*">
                    <NoMatch/>
                </Route>
            </Switch>
        </Router>
    )
}
export default Routes
