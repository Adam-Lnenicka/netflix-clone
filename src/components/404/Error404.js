import React from "react";
import { Link } from "react-router-dom";
import { ButtonSecondary } from "../../styles/global/Buttons";
import { Error404Container, Sign404 } from "./styles/Error404styles";

const Error404 = () => {
  return (
    <Error404Container>
      <p>Page Not Found</p>
      <Sign404>404</Sign404>

      <Link to="/">
        <ButtonSecondary>back to home</ButtonSecondary>
      </Link>
    </Error404Container>
  );
};

export default Error404;
