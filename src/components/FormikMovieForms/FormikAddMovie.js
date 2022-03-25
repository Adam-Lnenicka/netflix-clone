import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import {
  addMovieActionCreator,
  resetMovieActionCreator,
} from "../../store/actionCreators";
import { Link } from "react-router-dom";
import FormikField from "./FormikField";
import { fieldArray } from "./fieldArray";
import { FormikForm } from "./styles/FormsStyles";
import {
  ButtonExit,
  ButtonMain,
  ButtonSecondary,
} from "../../styles/global/Buttons";

const MovieSchema = Yup.object().shape({
  title: Yup.string()
    .max(50, "The entry seems to be too long")
    .required("This field is required"),

  poster_path: Yup.string().required("This field is required"),

  overview: Yup.string()
    .min(20, "The overview needs to have at least 20 characters")
    .required("This field is required"),

  release_date: Yup.string().required("This field is required"),
  genres: Yup.string().required("This field is required"),
  runtime: Yup.number().required("This field is required"),
});

const FormikAddMovie = () => {
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    setSubmitted(true);
    values.genres = [values.genres];
    values.id = Math.random().toString();
    console.log(values);

    dispatch(addMovieActionCreator(values));
  };

  return (
    <FormikForm>
      <div className="exit">
        <Link to="/">
          <ButtonExit> X</ButtonExit>
        </Link>
      </div>
      <h1>Add Movie</h1>

      <Formik
        initialValues={{
          title: "",
          release_date: "",
          poster_path: "",
          genres: [],
          overview: "",
          runtime: "",
        }}
        validationSchema={MovieSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              {fieldArray.map((array) => {
                return (
                  <FormikField
                    key={array.title}
                    title={array.title}
                    path={array.path}
                    id={array.path}
                    myErrors={errors}
                    myTouched={touched}
                  />
                );
              })}
              <ButtonSecondary type="submit">reset</ButtonSecondary>{" "}
              <ButtonMain type="submit">Submit</ButtonMain>
            </div>
          </Form>
        )}
      </Formik>
      <p>{submitted ? <div>Movie will be added</div> : null}</p>
    </FormikForm>
  );
};

export default FormikAddMovie;
