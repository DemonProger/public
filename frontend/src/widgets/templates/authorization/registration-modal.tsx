
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
    serverMessage: string,
    onRegisterClick(): void, 
    // onRegisterClick(): void,
    onCloseClick(): void,
    onFieldChanged(value: string, fieldId: string): void
}


export const FIELD_IDS = {
    name: "name",
    email: "email",
    password: "password"
}

export type User = {
    username: string,
    email: string,
    password: string
}

const RegistrationWindow = (props: RegistrationWindowProps) => {

    const onRegisterMessage =async()=> {
           props.onRegisterClick();
           alert(props.serverMessage);
    }

    return (
        <Modal show={true} onHide={props.onCloseClick}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header className={Styles.ModalHeader}>
                <Modal.Title>Регистрация</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Form.Group controlId="formGroupUsername">
                        <Form.Label>Имя пользователя</Form.Label>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>
                                    <Image src={userIcon} />
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control defaultValue={props.username} onChange={(event: any) =>  props.onFieldChanged(event.target.value, FIELD_IDS.name)}
                                type="text" placeholder="Имя пользователя" />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Электронный адрес</Form.Label>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>
                                    <Image src={emailIcon} />
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control  defaultValue={props.email} onChange={(event: any) => props.onFieldChanged(event.target.value, FIELD_IDS.email)}
                                type="email" placeholder="Электронный адрес" />
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
                            <Form.Control defaultValue={props.password} onChange={(event: any) => props.onFieldChanged(event.target.value, FIELD_IDS.password)}
                                 type="password" placeholder="Пароль" />
                        </InputGroup>
                    </Form.Group>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="info" onClick={onRegisterMessage}>
                    Зарегистрироваться
                </Button>
                <Button variant="info" onClick={props.onCloseClick}>
                    Закрыть 
                </Button>
            </Modal.Footer>

        </Modal>

    )
}
export default RegistrationWindow