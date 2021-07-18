import React from 'react';
import Modal from "./Modal";
import {useSelector} from "react-redux";

const ModalPhoto = ({show, onClose}) => {
    const {url, title} = useSelector((state) => state.photos.modal)
    return (
        <Modal show={show} title={title} onClose={onClose}>
            <img src={url}/>
        </Modal>
    )
}
export default ModalPhoto;
