import Form from "react-bootstrap/Form";
import UploadPhotoComponent from "../components/UploadPhotoComponent";
import SelectComponent from "../components/SelectComponent";
import { useContext, useState } from "react";
import { LoginContext } from "../context/LoginContext";
import InputComponent from "../components/InputComponent";

export const ProfileView = () => {
  const { user } = useContext(LoginContext);
  const [formData, setFormData] = useState({
    name: user.name || '',
    email: user.email || '',
    country: '',
    phone: '',
    city: '',
    address: '',
    birthDate: '',
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
      const response = await fetch('YOUR_API_ENDPOINT_URL', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: jsonData,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Success:', result);
      // Handle the response data as needed
    } catch (error) {
      console.error('Error:', error);
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
              name="name"
              placeholder={user.name}
              value={formData.name}
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
              name="country"
              value={formData.country}
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
              name="phone"
              placeholder="+591 XXXXXXXX"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Ciudad</label>
            <input
              className="form-control"
              type="text"
              name="city"
              placeholder="La Paz"
              value={formData.city}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Direccion</label>
            <input
              className="form-control"
              type="text"
              name="address"
              placeholder="Direccion de casa/Oficina/etc"
              value={formData.address}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label style={{ marginRight: '5px' }}>
              Fecha de nacimiento
            </label>
            <input
              type="date"
              name="birthDate"
              className="form-control"
              value={formData.birthDate}
              onChange={handleInputChange}
            />
          </div>
          <br />
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
