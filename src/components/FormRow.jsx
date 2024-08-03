import React from "react";

const FormRow = ({
  label,
  name,
  type,
  value,
  handleChange,
  placeholder,
  formGroupClass,
  labelClass,
  inputClass,
}) => {
  return (
    <div className={formGroupClass}>
      <label htmlFor={name} className={labelClass}>
        {label ? label : name.charAt(0).toUpperCase() + name.slice(1)}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={inputClass}
        required
      />
    </div>
  );
};

export default FormRow;
