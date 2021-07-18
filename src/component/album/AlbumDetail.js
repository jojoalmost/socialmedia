import React, {useEffect, useState} from 'react';
import api from "../../utils/api";
import {useParams} from "react-router";
import PhotoCard from "./photo/PhotoCard";
import styles from "./AlbumDetail.module.css"
import Modal from "../Modal";
import ModalPhoto from "../ModalPhoto";

const AlbumDetail = () => {
    const [photos, setPhotos] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const [selectedPhoto, setSelectedPhoto] = useState({});
    const {albumId} = useParams();

    useEffect(() => {
        api.get(`albums/${albumId}/photos`).then(res => {
            const {data} = res;
            setPhotos(data);
        })
    }, [albumId]);

    const handleShowPhoto = (photoId) => {
        const findPhoto = photos.find(({id}) => id === photoId);
        setSelectedPhoto(findPhoto);
        setShowModal(true);
    }

    return (
        <div className={styles.container}>
            <h3>Photos</h3>
            <div className={styles.photosContainer}>
                {photos.map(photo =>
                    <PhotoCard key={photo.id}
                               {...photo}
                               onShowPhoto={handleShowPhoto}
                    />
                )}
            </div>
            <ModalPhoto
                show={showModal}
                title={selectedPhoto.title}
                imageUrl={selectedPhoto.url}
                onClose={() => setShowModal(!showModal)}
            />
        </div>
    )
}
export default AlbumDetail;
