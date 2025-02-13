import React from "react";

function FormInput({ name, type, placeholder, inputName, defaultValue }) {
  return (
    <div className="mb-4">
      <label className="label font-semibold">{inputName}</label>
      <input
        type={type}
        id={name}
        name={name}
        className="select-field buttons w-full"
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
    </div>
  );
}

export default FormInput;
