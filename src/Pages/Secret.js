import React from "react";
import withAuthorization from "Components/hoc/withAuthorization";

const Secret = (props) => {
  return <h1>I am SECRET page, Only Auth USER can see me!</h1>;
};

export default withAuthorization(Secret);
