import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export const SearchBar = () => {
    const [input, setInput] = useState("");
  return (
    <>
        <form>
            <input 
                className="search-bar" 
                placeholder="¿Qué estás buscando?"
                value={input}
                onChange={(e)=>{setInput(e.target.value)}}/>
        </form>
    </>
  )
}

export default SearchBar;
