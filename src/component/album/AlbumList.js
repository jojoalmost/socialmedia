import React, {useEffect, useState} from 'react';
import api from "../../utils/api";
import AlbumCard from "./AlbumCard";
import styles from "./AlbumList.module.css"

const AlbumList = ({userId}) => {
    const [albums, setAlbums] = useState([]);
    useEffect(() => {
        api.get(`users/${userId}/albums`).then(res => {
            const {data} = res;
            setAlbums(data);
        })
    }, [userId])
    return (
        <>
            <h3>Albums</h3>
            <div className={styles.container}>
                {albums.map(album => (
                    <AlbumCard {...album}/>
                ))}
            </div>
        </>
    )
}
export default AlbumList
