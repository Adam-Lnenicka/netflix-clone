import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {
  addMovieActionCreator,
  resetMovieActionCreator,
} from "../../store/actionCreators";
import { Link } from "react-router-dom";
import FormikField from "./FormikField";
import { fieldArray } from "./fieldArray";
import { useAppDispatch } from "../../store/selectors";

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

const FormikAddMovie: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useAppDispatch();

  const handleSubmit = (values) => {
    setSubmitted(true);
    values.genres = [values.genres];
    values.id = Math.random().toString();
    console.log(values);

    dispatch(addMovieActionCreator(values));
  };

  const handleReset = (values) => {
    values.genres = [values.genres];
    values.title = "";
  };

  interface AddMovieInterface {
    title: string;
    release_date: string;
    poster_path: string;
    genres: string[];
    overview: string;
    runtime: string;
  }

  const initialValues: AddMovieInterface = {
    title: "",
    release_date: "",
    poster_path: "",
    genres: [],
    overview: "",
    runtime: "",
  };

  return (
    <div className="form">
      <div className="exit">
        <Link to="/">
          <button className="exit-button">X</button>
        </Link>
      </div>
      <h1>Add Movie</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={MovieSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="form__content">
            <div className="form__contact-field-box">
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
              <button className="button-secondary" type="submit">
                reset
              </button>{" "}
              <button className="button-main" type="submit">
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <p>
        {submitted ? (
          <div className="form__submit-message">Movie will be added</div>
        ) : null}
      </p>
    </div>
  );
};

export default FormikAddMovie;
