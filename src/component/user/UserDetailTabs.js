import React from 'react';
import PostList from "../post/PostList";
import AlbumList from "../album/AlbumList";
import {NavLink} from "react-router-dom";
import {useRouteMatch} from "react-router";

const UserDetailTabs = ({userId}) => {
    const match = useRouteMatch("/user/:userId");
    return (
        <>
            <div>
                <ul>
                    <li>
                        <NavLink to={`/user/${userId}`}>Post</NavLink>
                    </li>
                    <li>
                        <NavLink to={`/user/${userId}/albums`}>Albums</NavLink>
                    </li>
                </ul>
            </div>

            <div>
                {match.isExact ? (
                    <PostList userId={userId}/>
                ) : (
                    <AlbumList userId={userId}/>
                )}
            </div>
        </>
    )
}
export default UserDetailTabs
