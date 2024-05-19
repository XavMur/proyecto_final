import Form from "react-bootstrap/Form";
import UploadPhotoComponent from "../components/UploadPhotoComponent";
import SelectComponent from "../components/SelectComponent";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import InputComponent from "../components/InputComponent";

export const ProfileView = () => {
  const { user } = useContext(LoginContext);
  return (
    <div style={{ minHeight: "85vh" }}>
      <div className="container profile-container">
        <h1 style={{ textAlign: "center" }}>DATOS DE USUARIO</h1>
        <div className="form">
          <Form>
            <Form.Group>
              <Form.Label>Actualice su Perfil</Form.Label>
              <InputComponent placeholder={user.name} />
              <Form.Label>Correo</Form.Label>
              <InputComponent placeholder={user.email} />
              <Form.Label>Pais</Form.Label>
              <SelectComponent />
              <Form.Label>Numero de telefono</Form.Label>
              <InputComponent placeholder="+591 XXXXXXXX" />
              <Form.Label>Ciudad</Form.Label>
              <InputComponent placeholder="La Paz" />
              <Form.Label>Direccion</Form.Label>
              <InputComponent placeholder="Direccion de casa/Oficina/etc " />
              <br />
              <Form.Label style={{ marginRight: "5px" }}>
                Fecha de nacimiento{" "}
              </Form.Label>
              <input type="date" className="form-control" />
              <br />
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
