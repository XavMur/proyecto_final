import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import ButtonComponent from "./ButtonComponent";

export const SearchBar = () => {
    const [input, setInput] = useState("");
  return (
    <>
        <form className="form-group search-container">
            <input 
                className="form-control search-bar" 
                placeholder="¿Qué estás buscando?"
                value={input}
                onChange={(e)=>{setInput(e.target.value)}}
            />
            <ButtonComponent buttonBody={<FaSearch />} />
        </form>
    </>
  )
}

export default SearchBar;
