import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const ButtonComponent = ({
  buttonBody,
  path = "",
  width = "auto",
  height = "auto",
  variant = "outline-info",
}) => {
  const [buttonValue, setButtonValue] = useState("");
  const navigate = useNavigate();
  const changeRoute = (path) => {
    navigate(path);
  };

  useEffect(() => {
    setButtonValue(buttonBody);
  }, [buttonBody]);

  return (
    <Button
      style={{ marginRight: "10px", width: { width }, height: { height } }}
      variant={variant}
      onClick={() => changeRoute(path)}
    >
      {buttonValue}
    </Button>
  );
};

export default ButtonComponent;
