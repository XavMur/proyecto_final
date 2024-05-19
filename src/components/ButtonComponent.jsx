import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

const ButtonComponent = ({
  buttonBody,
  path = "",
  width = "auto",
  height = "auto",
  variant = "outline-info",
  disabled = false,
  style = { marginRight: "10px", width: width, height: height },
  onClick = () => {},
}) => {
  const [buttonValue, setButtonValue] = useState("");

  useEffect(() => {
    setButtonValue(buttonBody);
  }, [buttonBody]);

  return (
    <Button
      style={style}
      variant={variant}
      onClick={() => onClick()}
      disabled={disabled}
    >
      {buttonValue}
    </Button>
  );
};

export default ButtonComponent;
