import React from 'react';
import Modal from "./Modal";

const ModalPhoto = ({title = '', show, imageUrl = '', onClose}) => {
    return (
        <Modal show={show} title={title} onClose={onClose}>
            <img src={imageUrl}/>
        </Modal>
    )
}
export default ModalPhoto;
