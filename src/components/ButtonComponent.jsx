import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

const ButtonComponent = ({ buttonBody }) => {
  const [buttonText, setButtonText] = useState("");
  useEffect(() => {
    setButtonText(buttonBody);
  }, [buttonBody]);
  return <Button variant="outline-info">{buttonBody}</Button>;
};

export default ButtonComponent;
