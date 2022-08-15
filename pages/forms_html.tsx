import React, { useState } from "react";

export default function Forms_Html() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState("");
  const [emailError, setEmailError] = useState("");

  const onUsernameChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setUsername(value);
  };
  const onEamilChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    //setEmailError("");
    setEmail(value);
  };
  const onPasswordChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setPassword(value);
  };
  const onSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    //console.log(username, email, password);

    // validation 코드 이후 작성해야함.
    // error msg 코드 작성해야하고.
    if(username === "" || email === "" || password === ""){
        setFormErrors("All field are required");
    }
    if(!email.includes("@")){
        setEmailError("email is required");
    }
  };
  console.log(username);
  console.log(email);
  console.log(password);

  return (
    <form onSubmit={onSubmit}>
      <input
        value={username}
        type="text"
        placeholder="Username"
        onChange={onUsernameChange}
        // required
        // minLength={5}
      />
      <input
        value={email}
        type="email"
        placeholder="Email"
        onChange={onEamilChange}
        // required
        // minLength={5}
      />
      {emailError}
      <input
        value={password}
        type="password"
        placeholder="Password"
        onChange={onPasswordChange}
        // required
        // minLength={5}
      />
      <input type="submit" value="Create Account" />
    </form>
  );
}
