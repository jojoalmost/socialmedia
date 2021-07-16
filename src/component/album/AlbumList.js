import React, {useEffect, useState} from 'react';
import api from "../../utils/api";
import AlbumCard from "./AlbumCard";

const AlbumList = ({userId}) => {
    const [albums, setAlbums] = useState([]);
    useEffect(() => {
        api.get(`users/${userId}/albums`).then(res => {
            const {data} = res;
            setAlbums(data);
        })
    }, [userId])
    return (
        <div>
            {albums.map(album => (
                <AlbumCard {...album}/>
            ))}
        </div>
    )
}
export default AlbumList
