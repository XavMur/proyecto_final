import React, { useContext } from "react";
import Modal from "react-bootstrap/Modal";
import { LoginContext } from "../context/LoginContext";
import Form from "react-bootstrap/Form";
import ButtonComponent from "../components/ButtonComponent";

const LoginModalView = () => {
  const { login, setLogin } = useContext(LoginContext);
  const handleClose = () => setLogin(false);
  return (
    <Modal show={login} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Inicie sesion / Registrese</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Control
              type="email"
              placeholder="email@email.com"
            ></Form.Control>
          </Form.Group>
          <div className="modal-button">
            <ButtonComponent
              buttonBody={"inicio sesion"}
              width="100%"
              height="10%"
              variant="danger"
            />
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer style={{ justifyContent: "center" }}>
        <p>Inicio de sesion rapido</p>
      </Modal.Footer>
    </Modal>
  );
};

export default LoginModalView;
