import { useContext } from "react";
import ButtonComponent from "./ButtonComponent";
import SearchBar from "./SearchBar";
import { FaCartPlus } from "react-icons/fa";
import { LoginContext } from "../context/LoginContext";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const { login, setLogin } = useContext(LoginContext);
  const navigate = useNavigate()
  const handleLogin = () => {
    setLogin(true);
  };

  return (
    <div className="nav-bar">
      <ButtonComponent buttonBody={"LOGO"} onClick={()=>navigate("/")}/>
      <SearchBar widthValue={40} />
      <div className="button-nav">
        <ButtonComponent buttonBody="log in" onClick={handleLogin} />
        <ButtonComponent buttonBody={<FaCartPlus />} onClick={()=>navigate("/cart")}/>
      </div>
    </div>
  );
};

export default Navbar;
