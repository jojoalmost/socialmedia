import React, {useEffect, useState} from 'react';
import api from "../../utils/api";
import {useParams} from "react-router";
import PhotoCard from "./photo/PhotoCard";
import styles from "./AlbumDetail.module.css"
import ModalPhoto from "../ModalPhoto";
import {useDispatch} from "react-redux";
import {setModalPhoto} from "../../stores/photos/actions";

const AlbumDetail = () => {
    const [photos, setPhotos] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const {albumId} = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        api.get(`albums/${albumId}/photos`).then(res => {
            const {data} = res;
            setPhotos(data);
        })
    }, [albumId]);

    const handleShowPhoto = (photoId) => {
        const findPhoto = photos.find(({id}) => id === photoId);
        dispatch(setModalPhoto(findPhoto));
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
                onClose={() => setShowModal(!showModal)}
            />

        </div>
    )
}
export default AlbumDetail;
