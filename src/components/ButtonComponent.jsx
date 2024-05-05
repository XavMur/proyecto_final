import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

const ButtonComponent = ({
  buttonBody,
  path = "",
  width = "auto",
  height = "auto",
  variant = "outline-info",
  disabled = false,
  onClick = () => {},
}) => {
  const [buttonValue, setButtonValue] = useState("");

  const handleClick = () => {
    if (buttonBody == "log in") {
      handleLogin();
    } else {
      changeRoute(path);
    }
  };

  useEffect(() => {
    setButtonValue(buttonBody);
  }, [buttonBody]);

  return (
    <Button
      style={{ marginRight: "10px", width: width, height: height }}
      variant={variant}
      onClick={() => onClick()}
      disabled={disabled}
    >
      {buttonValue}
    </Button>
  );
};

export default ButtonComponent;
