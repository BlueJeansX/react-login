import React, { useState } from "react";
import LoginForm from "./components/LoginForm";


function App() {

  //harkodirani admin user podaci, u realnom svijetu ovo je u bazi:
  const adminUser = {
    email: "test@test.hr",
    password: "password"
  }


  //ovdje spremi usera:
  const [user, setUser] = useState({ name: "", email: "" });
  //ako su krivi login podaci pripremi funkciju za ispis greške:
  const [error, setError] = useState("");

  //login funkcija koja se poziva kod login pokušaja:
  const Login = details => {

    console.log(details);
    if (details.email === adminUser.email && details.password === adminUser.password) {
      console.log("Uspješno si logiran!");
      setUser({
        name: details.name,
        email: details.email
      });
    } else {
      console.log("Nisi upisao ispravne login podatke!");
      setError("Nisi upisao ispravne login podatke!");
    }
  }

  const Logout = () => {
    console.log("Logout");
    setUser({ name: "", email: "" });
  }

  //ako se koriste ispravni login podaci ispiši poruku sa unesenim imenom:
  return (
    <div className="App">
      {(user.email !== "") ? (
        <div class="welcome">
          <h2>Uspješno si logiran, <span>{user.name}</span></h2>
          <button onClick={Logout}>LOGOUT</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
