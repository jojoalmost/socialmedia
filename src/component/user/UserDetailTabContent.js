import React from 'react';
import PostList from "../post/PostList";
import AlbumList from "../album/AlbumList";
import {
    Switch, Route,
} from "react-router-dom";

const UserDetailTabs = ({userId}) => {
    return (
        <Switch>
            <Route exact path="/user/:userId">
                <PostList userId={userId}/>
            </Route>
            <Route exact path="/user/:userId/albums">
                <AlbumList userId={userId}/>
            </Route>
        </Switch>
    )
}
export default UserDetailTabs
