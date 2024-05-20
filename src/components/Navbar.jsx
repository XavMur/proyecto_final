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

  const getInitial = (name) => {
    return name ? name.charAt(0).toUpperCase() : "";
  };
  return (
    <div className="nav-bar">
      <div className="d-flex">
        <img
          className="navbar-img"
          src="src/img/logo.png"
          alt="logo"
          width={"10%"}
          onClick={() => navigate("/")}
          style={{ marginLeft: "3%" }}
        />
        <img src="src/img/logo2.png" alt="logo2" width={"20%"} />
      </div>
      {/* <SearchBar widthValue={40} /> */}
      <div className="button-nav d-flex align-items-center">
        {user != 0 ? (
          <div className="d-flex justify-content-evenly">
            {user.picture ? (
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
            ) : (
              <button
                className="fallback"
                onClick={() => navigate("/profile")}
                style={{ marginRight: "10px" }}
              >
                {getInitial(user.usuario)}
              </button>
            )}
            <ButtonComponent
              buttonBody="log out"
              variant="danger"
              onClick={handleLogOut}
              height={"50%"}
            />
          </div>
        ) : (
          <ButtonComponent
            height={"50%"}
            buttonBody="log in"
            onClick={handleLogin}
          />
        )}
        <ButtonComponent
          height={"50%"}
          buttonBody={<FaCartPlus />}
          onClick={() => navigate("/cart")}
        />
      </div>
    </div>
  );
};

export default Navbar;
