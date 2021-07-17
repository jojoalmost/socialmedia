import React, {useEffect, useState} from 'react';
import api from "../../utils/api";
import {useParams} from "react-router";
import PhotoList from "./photo/PhotoList";

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
        <div>
            {photos.map(photo => <PhotoList {...photo} />)}
        </div>
    )
}
export default AlbumDetail;
