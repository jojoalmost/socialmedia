import React from 'react';
import PostList from "../post/PostList";
import AlbumList from "../album/AlbumList";
import {useRouteMatch} from "react-router";

const UserDetailTabs = ({userId}) => {
    const match = useRouteMatch("/user/:userId");
    if (match.isExact) {
        return <PostList userId={userId}/>
    }
    return <AlbumList userId={userId}/>
}
export default UserDetailTabs
