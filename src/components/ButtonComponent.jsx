import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const ButtonComponent = ({ buttonBody, path = "" }) => {
  const [buttonValue, setButtonValue] = useState("");
  const [changePath, setChangePath] = useState(false);
  const navigate = useNavigate();
  const changeRoute = (path) => {
    navigate(path);
  };

  useEffect(() => {
    setButtonValue(buttonBody);
  }, [buttonBody]);

  useEffect(() => {
    changeRoute(path);
    setChangePath(false);
  }, [changePath]);

  return (
    <Button
      style={{ marginRight: "10px" }}
      variant="outline-info"
      onClick={() => setChangePath(true)}
    >
      {buttonValue}
    </Button>
  );
};

export default ButtonComponent;
