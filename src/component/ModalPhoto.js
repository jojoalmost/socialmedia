import React from 'react';
import Modal from "./Modal";
import {useSelector} from "react-redux";

const ModalPhoto = ({show, onClose}) => {
    const title = '';
    const url = '';
    return (
        <Modal show={show} title={title} onClose={onClose}>
            <img src={url}/>
        </Modal>
    )
}
export default ModalPhoto;
