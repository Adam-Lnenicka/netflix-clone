import { Field } from "formik";
import styled from "styled-components";

export const FormContainer = styled.section`
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0px;
  width: 100%;
  height: 100%;
`;

export const FormikForm = styled.div`
  background-color: #232323;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.8);
  max-width: 700px;
  margin: 4rem auto;
  padding: 4em;

  h1 {
    font-size: 3rem;
    margin-bottom: 2rem;
    text-transform: uppercase;
  }
`;

export const Label = styled.div`
  color: #f65261;
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 0.8px;
`;

export const FormInput = styled(Field)`
  width: 100%;
  background-color: #424242;
  border: none;
  color: white;
  border-radius: 4px;
  padding: 1em;
  margin-top: 0.4rem;
  margin-bottom: 1.3rem;

  &::placeholder {
    letter-spacing: 0.8px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2.5rem;

  button {
    margin-left: 1rem;
  }
`;
