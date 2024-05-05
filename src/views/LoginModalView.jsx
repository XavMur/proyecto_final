import React, { useContext, useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { LoginContext } from "../context/LoginContext";
import Form from "react-bootstrap/Form";
import ButtonComponent from "../components/ButtonComponent";

const LoginModalView = () => {
  const { login, setLogin } = useContext(LoginContext);
  const [register, setRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registered, setRegistered] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const handleClose = () => {
    setLogin(false);
    setRegister(false);
  };
  const handleAccess = () => {
    if (email == "registered@gmail.com") {
      setRegister(true);
    }
  };

  const handleRegister = () => {
    setDisabled(true);
    setRegistered(true);
  };

  useEffect(() => {}, [register, registered]);

  const renderLogin = () => {
    return (
      <Modal show={login} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Inicie sesion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Control
                type="email"
                placeholder="email@email.com"
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <div className="modal-button">
              <ButtonComponent
                buttonBody={"Continuar"}
                width="100%"
                height="10%"
                variant="danger"
                onClick={handleAccess}
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

  const renderRegister = () => {
    return (
      <Modal show={login} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Registrese</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label> Email </Form.Label>
              <Form.Control
                disabled={disabled}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setRegistered(false);
                }}
              ></Form.Control>
              <Form.Label> Password </Form.Label>
              <Form.Control
                type="password"
                disabled={disabled}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setRegistered(false);
                }}
              ></Form.Control>
              <div className="modal-button">
                <ButtonComponent
                  buttonBody={"Continuar"}
                  width="100%"
                  height="10%"
                  variant="danger"
                  onClick={handleRegister}
                />
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
        {registered ? (
          <Modal.Footer style={{ justifyContent: "center", color: "red" }}>
            <p>Correo de verificacion enviado</p>
          </Modal.Footer>
        ) : null}
      </Modal>
    );
  };

  return !register ? renderLogin() : renderRegister();
};

export default LoginModalView;
