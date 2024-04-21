import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import ButtonComponent from "./ButtonComponent";
import InputComponent from "./InputComponent";

export const SearchBar = () => {
  return (
    <>
        <div className="search-container">
            <InputComponent widthValue = {20} />
            <ButtonComponent buttonBody={<FaSearch />} />
        </div>
    </>
  )
}

export default SearchBar;
