import React from "react";

function TextInput({ title, ...attribute }) {
  return (
    <div>
      <label className="sr-only">{title}</label>
      <input
        id={title}
        type="text"
        required
        className="login-input rounded-t-md"
        placeholder={title}
        {...attribute}
      />
    </div>
  );
}

export default TextInput;
