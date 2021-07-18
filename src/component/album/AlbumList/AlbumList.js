import React, {useEffect, useState} from 'react';
import api from "../../../utils/api";
import AlbumCard from "../AlbumCard/AlbumCard";
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
        <div className={styles.container}>
            <h3>Albums ({albums.length})</h3>
            <div className={styles.cardContainer}>
                {albums.map(album => (
                    <AlbumCard key={album.id} {...album}/>
                ))}
            </div>
        </div>
    )
}
export default AlbumList
