import React from 'react';
import Modal from "./Modal";
import {useSelector} from "react-redux";
import {getModalData} from "../stores/photos/selectors";

const ModalPhoto = ({show, onClose}) => {
    const {url, title} = useSelector(getModalData)
    return (
        <Modal show={show} title={title} onClose={onClose}>
            <img src={url} alt={title}/>
        </Modal>
    )
}
export default ModalPhoto;
