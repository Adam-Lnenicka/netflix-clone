import React from "react";
import { Field } from "formik";
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
        className="form__input"
      />

      {myErrors[path] && myTouched[path] ? <div>{myErrors[path]}</div> : null}
    </div>
  );
};

export default FormikField;
