import React from 'react';
import Modal from "./Modal";
import {useSelector} from "react-redux";
import {geModalData} from "../stores/photos/selectors";

const ModalPhoto = ({show, onClose}) => {
    const {url, title} = useSelector(geModalData)
    return (
        <Modal show={show} title={title} onClose={onClose}>
            <img src={url}/>
        </Modal>
    )
}
export default ModalPhoto;
