import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SignUpForm from "./FORM/form";
import TableLists from "./FORM/text";

function App() {
  const [personalData, setPersonalData] = useState([]);

  const addDataHandler = (data) => {
    console.log("DATA", data);
    setPersonalData((prevData) => {
      return [...prevData, data];
      // console.log("hellasdasdq",prevData)
    });
  };

  console.log("HELLLLO", personalData);

  return (
    <>
      <div className="main">
        <h1>SIGNUP FORM</h1>
      </div>
      <div>
        <SignUpForm onAddData={addDataHandler} list={personalData}></SignUpForm>
      </div>
      <div className="container d-flex justify-content-center">
        <table className="table table-dark table-striped ">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {personalData.map((data) => (
              <TableLists
                key={data.id}
                id={data.id}
                name={data.name}
                age={data.age}
                email={data.email}
              ></TableLists>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
// function App() {
//   const [count, setCount] = useState(0);
//   const IncNum = () => {
//     setCount(count + 1);
//   };
//   return (
//     <div>
//       <h2>{count}</h2>
//       <button onClick={IncNum}>CLICK</button>
//     </div>
//   );
// }

export default App;
