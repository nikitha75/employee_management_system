import React from "react";
import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log("error: ", error);

  return (
    <div>
      <h1>Page not found</h1>
      <p>Sorry, we couldn't find the page you're looking for.</p>
      <div>
        <Link to="/">Go back home</Link>
      </div>
    </div>
  );
};

export default Error;
