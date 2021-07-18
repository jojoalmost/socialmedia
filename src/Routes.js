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
import AlbumDetail from "./pages/AlbumDetail";
import Header from "./component/layout/Header/Header";
import MainContent from "./component/layout/MainContent/MainContent";

const Routes = () => {
    return (
        <Router>
            <Header/>
            <MainContent>
                <Switch>
                    <Route exact path="/users">
                        <Users/>
                    </Route>
                    <Route path="/user/:userId">
                        <UserDetail/>
                    </Route>
                    <Route exact path="/album/:albumId">
                        <AlbumDetail/>
                    </Route>
                    <Route exact path="/post/:postId">
                        <PostDetail/>
                    </Route>
                    <Route exact path="/">
                        <Redirect to="/users"/>
                    </Route>
                    <Route path="*">
                        <NoMatch/>
                    </Route>
                </Switch>
            </MainContent>
        </Router>
    )
}
export default Routes
