import React, { useState } from "react";
import "./form.css";
import "bootstrap/dist/css/bootstrap.min.css";
const SignUpForm = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const nameInputChangeHandler = (event) => {
    setName(event.target.value);
  };
  const ageInputChangeHandler = (event) => {
    setAge(event.target.value);
  };
  const emailInputChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const doesEmailExistInList = () => {
    let doesEmailExist = false;
    for (let index = 0; index < props.list.length; index++) {
      if (props.list[index]["email"] === email) {
        doesEmailExist = true;
      }
    }
    return doesEmailExist;
  };
  let error;
  let formIsValid = false;

  if (name.trim() !== "") {
    // formIsValid = true;
    if (age !== "") {
      // formIsValid = true;
      if (email !== "") {
        formIsValid = true;
        if (!doesEmailExistInList()) {
          formIsValid = true;
        } else {
          error = "Email in Use";
        }
      } else {
        error = "Email is Required";
      }
    } else {
      error = "Age is Required";
    }
  } else {
    error = "Name is Required";
  }

  const formSubmission = (event) => {
    event.preventDefault();

    const payload = {
      id: props.list.length + 1,
      name: name,
      age: age,
      email: email,
    };
    props.onAddData(payload);
    setName("");
    setAge("");
    setEmail("");
  };

  return (
    <>
      <div className="container-fluid ">
        <form onSubmit={formSubmission}>
          <div className="row justify-content-center">
            <div className="col-3">
              {/* <label htmlFor="name">NAME</label> */}
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                onChange={nameInputChangeHandler}
                required
                placeholder="Name"
                value={name}
              />
            </div>
            <div className="col-3">
              {/* <label htmlFor="age">Age</label> */}
              <input
                type="number"
                className="form-control"
                id="age"
                name="age"
                onChange={ageInputChangeHandler}
                required
                placeholder="Age"
                value={age}
              />
            </div>
            <div className="col-3">
              {/* <label htmlFor="email">Email</label> */}
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                onChange={emailInputChangeHandler}
                required
                placeholder="Email "
                value={email}
              />
            </div>
            <div className="error">
              {!formIsValid && <h4 style={{ color: "red" }}>{error}</h4>}
            </div>
            <div className="btnn">
              <button className="btn btn-primary" disabled={!formIsValid}>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default SignUpForm;
