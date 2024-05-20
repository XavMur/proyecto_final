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
      <div className="d-flex ml-2">
        <img
          src="https://i.ibb.co/thq2nbk/logo.png"
          alt="logo"
          width={"10%"}
          className="navbar-img"
          onClick={() => navigate("/")}
        />
        <img
          src="https://i.ibb.co/TmGF3J2/logo2.png"
          alt="logo"
          width={"25%"}
        />
      </div>
      {/* <SearchBar widthValue={40} /> */}
      <div className="button-nav">
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
              height="80%"
              variant="danger"
              onClick={handleLogOut}
            />
          </div>
        ) : (
          <ButtonComponent
            buttonBody="log in"
            height="80%"
            onClick={handleLogin}
          />
        )}
        <ButtonComponent
          buttonBody={<FaCartPlus />}
          onClick={() => navigate("/cart")}
          height="80%"
        />
      </div>
    </div>
  );
};

export default Navbar;
