
export const SelectComponent = () => {
  return (
    <select className="custom-select"  defaultValue={0}>
        <option value={0} disabled>Selecciona una opción</option>
        {/* Mapear para los demas campos del select XD */}
    </select>
  )
}

export default SelectComponent;