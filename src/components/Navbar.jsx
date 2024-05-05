import ButtonComponent from "./ButtonComponent";
import SearchBar from "./SearchBar";
import { FaCartPlus } from "react-icons/fa";
export const Navbar = () => {
  return (
    <div className="nav-bar">
      <SearchBar widthValue={40} />
      <div className="button-nav">
        <ButtonComponent buttonBody="log in" />
        <ButtonComponent buttonBody={<FaCartPlus />} />
      </div>
    </div>
  );
};

export default Navbar;
