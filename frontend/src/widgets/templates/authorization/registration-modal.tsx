
import * as React from "react";
import { Modal, Button } from 'react-bootstrap';
import Styles from './authorization.module.css'

export type RegistrationWindowProps = {
    username: string,
    email: string,
    password: string,

    // onRegisterClick(): void, 
    onCloseClick(): void, 
    // onChanged(fieldId: string, value: string): void
}

export const FIELD_IDS = {
    name: "name", 
    email: "email", 
    password: "password"
}

const RegistrationWindow = (props: RegistrationWindowProps) => {
    return (
        <Modal show={true} onHide={props.onCloseClick}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header className={Styles.ModalHeader}>
                <Modal.Title>Форма регистрации</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <input type='text' placeholder='Your name'>{props.username}</input>
                <input type='text' placeholder='Your email'>{props.email} </input>
                <input type='text' placeholder='Your password'>{props.password}</input>
            </Modal.Body>

            <Modal.Footer>
                <Button className={Styles.ButtonRegister} onClick={() => {}}>
                    Регистрация
                </Button>
                <Button className={Styles.ButtonClose} onClick={props.onCloseClick}>
                    Закрыть
                </Button>
            </Modal.Footer>

        </Modal>

    )
}

export default RegistrationWindow
