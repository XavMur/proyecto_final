import { useContext } from "react";
import ButtonComponent from "./ButtonComponent";
import SearchBar from "./SearchBar";
import { FaCartPlus } from "react-icons/fa";
import { LoginContext } from "../context/LoginContext";

export const Navbar = () => {
  const { login, setLogin } = useContext(LoginContext);
  const handleLogin = () => {
    setLogin(true);
  };

  return (
    <div className="nav-bar">
      <SearchBar widthValue={40} />
      <div className="button-nav">
        <ButtonComponent buttonBody="log in" onClick={handleLogin} />
        <ButtonComponent buttonBody={<FaCartPlus />} />
      </div>
    </div>
  );
};

export default Navbar;
