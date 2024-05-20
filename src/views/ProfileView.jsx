import Form from "react-bootstrap/Form";
import UploadPhotoComponent from "../components/UploadPhotoComponent";
import SelectComponent from "../components/SelectComponent";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../context/LoginContext";
import InputComponent from "../components/InputComponent";
import getUserData from "../utilities/getUserData";

export const ProfileView = () => {
  const { user } = useContext(LoginContext);

  const [userData, setUserData] = useState({});

  const formatDate = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const getData = async (email) => {
    const data = await getUserData(email);
    setUserData(data[0]);
    setFormData(data[0]);
  };
  useEffect(() => {
    getData(user.email);
  }, []);
  console.log(userData);
  const [formData, setFormData] = useState({
    usuario: userData.usuario,
    email: userData.email,
    pais: userData.pais,
    telefono: user.telefono,
    ciudad: user.ciudad,
    direccion: user.direccion,
    nacimiento: formatDate(user.nacimiento),
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const jsonData = JSON.stringify(formData);

    try {
      const baseUrl = "http://localhost:3000/profileUpdate";
      const response = await fetch(baseUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: jsonData,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log("Success:", result);
      // Handle the response data as needed
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div style={{ minHeight: "85vh" }}>
      <div className="container profile-container">
        <h1 style={{ textAlign: "center" }}>DATOS DE USUARIO</h1>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div>
              <label>Actualice su Perfil</label>
              <input
                className="form-control"
                type="text"
                name="usuario"
                placeholder={user.usuario}
                value={formData.usuario}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Correo</label>
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder={user.email}
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Pais</label>
              <select
                className="form-control"
                name="pais"
                value={formData.pais}
                onChange={handleInputChange}
              >
                <option value="">Select Country</option>
                <option value="bolivia">Bolivia</option>
                <option value="brasil">Brasil</option>
              </select>
            </div>
            <div>
              <label>Numero de telefono</label>
              <input
                className="form-control"
                type="text"
                name="telefono"
                placeholder="+591 XXXXXXXX"
                value={formData.telefono}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Ciudad</label>
              <input
                className="form-control"
                type="text"
                name="ciudad"
                placeholder="La Paz"
                value={formData.ciudad}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Direccion</label>
              <input
                className="form-control"
                type="text"
                name="direccion"
                placeholder="Direccion de casa/Oficina/etc"
                value={formData.direccion}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label style={{ marginRight: "5px" }}>Fecha de nacimiento</label>
              <input
                type="date"
                name="nacimiento"
                className="form-control"
                value={formData.nacimiento}
                onChange={handleInputChange}
              />
            </div>
            <br />
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
