import React, {useEffect, useState} from 'react';
import api from "../../utils/api";
import {useParams} from "react-router";
import PhotoCard from "./photo/PhotoCard";
import styles from "./AlbumDetail.module.css"

const AlbumDetail = () => {
    const [photos, setPhotos] = useState([]);

    const {albumId} = useParams();

    useEffect(() => {
        api.get(`albums/${albumId}/photos`).then(res => {
            const {data} = res;
            setPhotos(data);
        })
    }, [albumId])

    return (
        <div className={styles.container}>
            <h3>Photos</h3>
            <div className={styles.photosContainer}>
                {photos.map(photo => <PhotoCard key={photo.id} {...photo} />)}
            </div>
        </div>
    )
}
export default AlbumDetail;
