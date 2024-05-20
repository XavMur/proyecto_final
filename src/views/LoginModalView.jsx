import React, { useContext, useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { LoginContext } from "../context/LoginContext";
import Cookies from "js-cookie";
import { useGoogleLogin } from "@react-oauth/google";
import Form from "react-bootstrap/Form";
import ButtonComponent from "../components/ButtonComponent";
import handleUser from "../utilities/handleUser";
import userLoginWithoutGoogle from "../utilities/userLoginwithoutGoogle";

const LoginModalView = () => {
  const { login, setLogin, user, setUser } = useContext(LoginContext);
  const [userToken, setUserToken] = useState("");
  const [register, setRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registered, setRegistered] = useState(false);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    const token = Cookies.get("auth_token");
    if (token) {
      setUserToken(token);
    }
  }, []);

  const handleClose = () => {
    setLogin(false);
    setRegister(false);
    setRegistered(false);
  };
  const handleAccess = async () => {
    const userExistance = await userLoginWithoutGoogle(email, password);
    if (userExistance.verificacion == "No existe") {
      setRegister(true);
      setDisabled(false);
      setRegistered(false);
    } else if (userExistance.verificacion == "Correo no valido") {
      alert("Usuario o password incorrectos");
    } else {
      setUser(userExistance.verificacion[0]);
      Cookies.set("auth_token", userExistance.token, { expires: 1 });
      handleClose();
    }
  };

  const handleRegister = () => {
    setDisabled(true);
    setRegistered(true);
  };

  const fetchUserProfile = async (token) => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${token}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error(`Failed to fetch user profile: ${response.statusText}`);
      }
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.log("Error fetching user profile:", error);
    }
  };

  const handleLogin = useGoogleLogin({
    onSuccess: (response) => {
      setUserToken(response.access_token);
      Cookies.set("auth_token", response.access_token, { expires: 1 });
      handleClose();
    },
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    fetchUserProfile(userToken);
  }, [userToken]);

  useEffect(() => {
    if (user != 0) {
      handleUser(user);
    }
  }, [user]);
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
              <Form.Control
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                style={{ marginTop: "10px" }}
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
          <p>O</p>
          <div className="d-flex justify-content-center">
            <ButtonComponent
              buttonBody={
                <>
                  Ingrese con Google
                  <img
                    src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                    width={"15%"}
                  />
                </>
              }
              variant="light"
              width="50%"
              onClick={() => handleLogin()}
            />
          </div>
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
                  disabled={disabled}
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
