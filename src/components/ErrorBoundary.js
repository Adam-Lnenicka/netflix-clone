import React from "react";

function ErrorBoundary(props) {
  const ErrorMessage = () => {
    return (
      <div>
        <p>Sorry, cannot display content at the moment.</p>
      </div>
    );
  };

  return <>{props.children ? props.children : <ErrorMessage />}</>;
}
export default ErrorBoundary;
