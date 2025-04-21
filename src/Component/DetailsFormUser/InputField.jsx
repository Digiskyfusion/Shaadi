// components/InputField.jsx
import React from "react";

const InputField = ({ label, name, value, onChange, type = "text" }) => (
  <div className="mb-4">
    <label className="block mb-1 text-sm font-medium">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full border rounded px-3 py-2"
    />
  </div>
);

export default InputField;
