import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import ButtonComponent from "./ButtonComponent";
import InputComponent from "./InputComponent";

export const SearchBar = ({ widthValue }) => {
  return (
    <>
      <div className="search-container">
        <InputComponent widthValue={widthValue} />
        <ButtonComponent buttonBody={<FaSearch />} />
      </div>
    </>
  );
};

export default SearchBar;
