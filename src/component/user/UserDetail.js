import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import api from "../../utils/api";
import PostList from "../post/PostList";
import AlbumList from "../album/AlbumList";

const UserDetail = () => {
    const [user, setUser] = useState({});
    const {id: userId} = useParams();

    useEffect(() => {
        api.get(`users/${userId}`).then(res => {
            const {data} = res;
            setUser(data);
        })
    }, [userId])

    const {name, username, email, phone, website} = user;
    return (
        <>
            <div>
                <div>{name}</div>
                <div>{username}</div>
                <div>{email}</div>
                <div>{phone}</div>
                <div>{website}</div>
            </div>

            <PostList userId={userId}/>
            <AlbumList userId={userId}/>
        </>
    )
}
export default UserDetail
