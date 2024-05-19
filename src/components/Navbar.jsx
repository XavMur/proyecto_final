import { useContext } from "react";
import ButtonComponent from "./ButtonComponent";
import SearchBar from "./SearchBar";
import { FaCartPlus } from "react-icons/fa";
import { LoginContext } from "../context/LoginContext";
import { useNavigate } from "react-router-dom";
import { googleLogout } from "@react-oauth/google";

export const Navbar = () => {
  const { login, setLogin, user, setUser } = useContext(LoginContext);
  const navigate = useNavigate();
  const handleLogin = () => {
    setLogin(true);
  };
  const handleLogOut = () => {
    googleLogout();
    setUser(0);
    document.cookie = `${"auth_token"}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    navigate("/");
  };

  return (
    <div className="nav-bar">
      <ButtonComponent buttonBody={"LOGO"} onClick={() => navigate("/")} />
      <SearchBar widthValue={40} />
      <div className="button-nav">
        {user != 0 ? (
          <div className="d-flex justify-content-evenly">
            <ButtonComponent
              buttonBody={
                <img
                  src={user.picture}
                  alt={user.name}
                  width={"110%"}
                  style={{ borderRadius: "100%" }}
                />
              }
              width="50%"
              variant={"link"}
              onClick={() => navigate("/profile")}
              style={{
                padding: "0",
                marginRight: "10px",
                width: "20%",
                height: "auto",
                borderRadius: "100%",
              }}
            />
            <ButtonComponent
              buttonBody="log out"
              variant="danger"
              onClick={handleLogOut}
            />
          </div>
        ) : (
          <ButtonComponent buttonBody="log in" onClick={handleLogin} />
        )}
        <ButtonComponent
          buttonBody={<FaCartPlus />}
          onClick={() => navigate("/cart")}
        />
      </div>
    </div>
  );
};

export default Navbar;
