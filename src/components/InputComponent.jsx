import { useState } from "react";

export const InputComponent = ({widthValue}) => {
  const [input, setInput] = useState("");
  return (
    <input 
        className="form-control search-bar" 
        placeholder="¿Qué estás buscando?"
        value={input}
        onChange={(e)=>{setInput(e.target.value)}}
        style={{ width: `${widthValue}%` }}
    />
  )
}

export default InputComponent;
