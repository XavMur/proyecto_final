import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

const ButtonComponent = ({ buttonName }) => {
  const [buttonText, setButtonText] = useState("");
  useEffect(() => {
    setButtonText(buttonName);
  }, [buttonName]);
  return <Button variant="outline-info">{buttonText}</Button>;
};

export default ButtonComponent;
