import React from "react";
import withAuthorization from "Components/hoc/withAuthorization";

const Faq = () => {
  return <h1>I am Faq page</h1>;
};

export default withAuthorization(Faq);
