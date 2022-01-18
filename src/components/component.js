import React from "react";

const ErrorBoundaryComponent = ({ errorName, componentStack }) => {
  return (
    <div>
      <h1>Sorry, something went wrong!</h1>
      <h3>Here is some info:</h3>
      <div>
        <span>
          Error:
          {errorName}
        </span>
      </div>
      <article>
        <p>Stacktrace:</p>
        {(componentStack + "")
          .trim()
          .split("\n")
          .map((element, i) => (
            <p key={i}>{element}</p>
          ))}
      </article>
    </div>
  );
};

export default ErrorBoundaryComponent;
