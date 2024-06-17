import React from "react";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <>
      {" "}
      <label htmlFor="">{label}</label>
      <input {...otherProps} />
    </>
  );
};

export default FormInput;
