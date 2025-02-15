function FormInput({ name, type, placeholder, inputName, defaultValue }) {
  return (
    <div className="mb-4">
      <label className="label font-semibold">{inputName}</label>
      <input
        id={name}
        type={type}
        className="select-field buttons w-full"
        placeholder={placeholder}
        defaultValue={defaultValue}
        name={name}
      />
    </div>
  );
}

export default FormInput;
