import { useEffect, useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";

const ButtonComponent = ({
  buttonBody,
  path = "",
  width = "auto",
  height = "auto",
  variant = "outline-info",
}) => {
  const [buttonValue, setButtonValue] = useState("");
  const { login, setLogin } = useContext(LoginContext);
  const navigate = useNavigate();
  const changeRoute = (path) => {
    navigate(path);
  };
  const handleLogin = () => {
    setLogin(true);
  };

  useEffect(() => {
    setButtonValue(buttonBody);
  }, [buttonBody]);

  return (
    <Button
      style={{ marginRight: "10px", width: width, height: height }}
      variant={variant}
      onClick={() =>
        buttonBody == "log in" ? handleLogin() : changeRoute(path)
      }
    >
      {buttonValue}
    </Button>
  );
};

export default ButtonComponent;
