
import * as React from "react";
import { Modal, Button, Form, InputGroup, Image } from 'react-bootstrap';
import Styles from './authorization.module.css'
import emailIcon from './email.svg'
import loginIcon from './login.svg'
import userIcon from './user.svg'

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
                <Form>
                    <Form.Group controlId="formGroupUsername">
                        <Form.Label>Имя пользователя</Form.Label>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>
                                    <Image src={userIcon}/>
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control type="text" placeholder="Имя пользователя" />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Электронный адрес</Form.Label>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>
                                    <Image src={emailIcon}/>
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control type="email" placeholder="Электронный адрес" />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Пароль</Form.Label>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>
                                    <Image src={loginIcon} />
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control type="password" placeholder="Пароль" />
                        </InputGroup>
                    </Form.Group>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button className={Styles.ButtonRegister} onClick={() => { }}>
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