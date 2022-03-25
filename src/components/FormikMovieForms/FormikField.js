import React from "react";
import { FormInput, Label } from "./styles/FormsStyles";

const FormikField = ({ title, path, myErrors, myTouched }) => {
  return (
    <div>
      <Label>{title}</Label>
      <FormInput
        placeholder={title}
        name={path}
        type="text"
        id={path}
      />

      {myErrors[path] && myTouched[path] ? <div>{myErrors[path]}</div> : null}
    </div>
  );
};

export default FormikField;
