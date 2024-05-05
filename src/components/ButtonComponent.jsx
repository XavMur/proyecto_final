import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

const ButtonComponent = ({ buttonBody }) => {
  const [buttonValue, setButtonValue] = useState("");
  useEffect(() => {
    setButtonValue(buttonBody);
  }, [buttonBody]);
  return (
    <Button style={{ marginRight: "10px" }} variant="outline-info">
      {buttonValue}
    </Button>
  );
};

export default ButtonComponent;
