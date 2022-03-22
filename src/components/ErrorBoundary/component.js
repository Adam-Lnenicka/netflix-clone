import React from "react";
import { ErrorBoundaryContainer } from "./styles/ErrorBoundaryStyles";

const ErrorBoundaryComponent = ({ errorName, componentStack }) => {
  return (
    <ErrorBoundaryContainer>
      <h2>Sorry, something went wrong!</h2>
      <h3>Here is some info:</h3>
      <div>
        <p>Error Type:</p>
        <span>{errorName}</span>
      </div>
      <article>
        <p>Stacktrace:</p>

        {(componentStack + "")
          .trim()
          .split("\n")
          .map((element, i) => (
            <p key={i}>
              <span>{element}</span>
            </p>
          ))}
      </article>
    </ErrorBoundaryContainer>
  );
};

export default ErrorBoundaryComponent;
