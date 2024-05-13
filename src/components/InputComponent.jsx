import { useState } from "react";

export const InputComponent = ({widthValue,placeholder="¿Qué estás buscando?"}) => {
  const [input, setInput] = useState("");
  return (
    <input 
        className="form-control search-bar" 
        placeholder={placeholder}
        value={input}
        onChange={(e)=>{setInput(e.target.value)}}
        style={{ width: `${widthValue}%` }}
    />
  )
}

export default InputComponent;
