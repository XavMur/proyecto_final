import ButtonComponent from "./ButtonComponent";
import { FaCartPlus } from "react-icons/fa";
export const Navbar = () => {
  return (
    <div>
      <ButtonComponent buttonBody="log in" />
      <ButtonComponent buttonBody={<FaCartPlus />} />
    </div>
  );
};

export default Navbar;
