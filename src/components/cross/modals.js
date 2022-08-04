import React from 'react';
import {Modal,  ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

export const Modals = ({setModal, modal, title, btons}) => {

    return (
        <Modal isOpen={modal} toggle={() => setModal(!modal)} zIndex="1500" >
            <ModalHeader toggle={() => setModal(!modal)} >
                {title}
            </ModalHeader>
            <ModalFooter>
            <Button color="primary" onClick={() => btons.callBackErase()}>{btons.label}</Button>{' '}
            <Button color="secondary" onClick={() => setModal(!modal)}>Cancelar</Button>
            </ModalFooter>
        </Modal>
    )
}