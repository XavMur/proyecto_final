import Form from "react-bootstrap/Form";
import UploadPhotoComponent from "../components/UploadPhotoComponent";
import SelectComponent from "../components/SelectComponent";

export const ProfileView = () => {
  return (
    <div style={{minHeight:"85vh"}}>
        <div className="container profile-container">
            <h1 style={{textAlign:"center"}}>DATOS DE USUARIO</h1>
            <div className="form">
                <Form>
                    <Form.Group>
                        <Form.Label>Actualice su Perfil</Form.Label>
                        <Form.Control placeholder="Nombre Completo"/>
                        <Form.Label>Pais</Form.Label>
                        <SelectComponent />
                        <Form.Label>Numero de telefono</Form.Label>
                        <Form.Control placeholder="+591 XXXXXXXX" />
                        <Form.Label>Ciudad</Form.Label>
                        <Form.Control placeholder="La Paz" />
                        <Form.Label>Direccion</Form.Label>
                        <Form.Control placeholder="Direccion de casa/Oficina/etc " />
                        <br/>
                        <Form.Label style={{marginRight:"5px"}}>Fecha de nacimiento </Form.Label>
                        <input type="date" className="form-control" />
                        <br />
                        <Form.Label>Foto de perfil</Form.Label>
                        <UploadPhotoComponent />
                    </Form.Group>
                </Form>
            </div>
        </div>
    </div>
  )
}

export default ProfileView;