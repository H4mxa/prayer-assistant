import React from "react";

const withAuthorization = (Component) => {
  class WithAuthorization extends React.Component {
    state = {
      secretData: "Hello world Screte!!!!",
      secretNumber: 912083,
    };

    someSuperFuntionality() {
      alert("I am Super");
    }

    render() {
      return (
        <Component
          {...this.state}
          someSuperFuntionality={this.someSuperFuntionality}
        />
      );
    }
  }

  return WithAuthorization;
};

export default withAuthorization;
