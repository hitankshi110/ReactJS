import React, { useState } from "react";

const Forms3 = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className="forms3">
      <center>
        <h2>Personal Data Form</h2>
      </center>
      <form name="frm">
        <b> FirstName: </b>{" "}
        <input type="text" name="firstname" value={firstname} onChange={(e) => setFirstName(e.target.value)}/> <br />
        <b> LastName: </b>{" "}
        <input
          type="text"
          name="lastname"
          value={lastname}
          onChange={(e) => setLastName(e.target.value)}
        />
        <br />
        <b> Age: </b>{" "}
        <input
          type="text"
          name="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />{" "}
        <br />
        <hr />
        <b> Email: </b>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <br />
        <hr />
        <b> Password: </b>
        <input
          type="text"
          name="pwd"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />{" "}
        <br />
        <hr />
        <b>Phone: </b>
        <input
          type="text"
          name="phn"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />{" "}
        <br />
        <hr />
        <br /> <input type="submit" value="Save Data" />
      </form>
    </div>
  );
};

export default Forms3;
