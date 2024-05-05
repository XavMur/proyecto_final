import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

const ButtonComponent = ({
  buttonBody,
  path = "",
  width = "auto",
  height = "auto",
  variant = "outline-info",
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
    >
      {buttonValue}
    </Button>
  );
};

export default ButtonComponent;
