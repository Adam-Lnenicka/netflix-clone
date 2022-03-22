import React from "react";
import { Link } from "react-router-dom";
import { Error404Container, Sign404 } from "./styles/Error404styles";

const Error404 = () => {
  return (
    <Error404Container>
      <p>Page Not Found</p>
      <Sign404>404</Sign404>

      <Link to="/">
        <button className="button-secondary">back to home</button>
      </Link>
    </Error404Container>
  );
};

export default Error404;
