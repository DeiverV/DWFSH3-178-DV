/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { NextPage } from "next";
import { useRegisterForm } from "../hooks";
import { useEffect } from "react";

const Register: NextPage = () => {
  const defaultValues = {
    names: localStorage.getItem("names") ?? "",
    email: localStorage.getItem("email") ?? "",
    username: localStorage.getItem("username") ?? "",
    password: localStorage.getItem("password") ?? "",
  };

  const handleSubmit = (event?: React.FormEvent) => {
    event?.preventDefault();
    localStorage.setItem("names", namesBind.value);
    localStorage.setItem("email", emailBind.value);
    localStorage.setItem("username", usernameBind.value);
    localStorage.setItem("password", passwordBind.value);
  };

  const { clearForm, emailBind, namesBind, passwordBind, usernameBind } =
    useRegisterForm(defaultValues);

  useEffect(() => {
    handleSubmit();
  }, [passwordBind.value]);

  return (
    <div>
      <h2>Quien eres??</h2>
      <form onSubmit={handleSubmit}>
        <label>Nombre y apellidos:</label>
        <input type="text" {...namesBind} />
        <br />

        <label>Email:</label>
        <input type="email" {...emailBind} />
        <br />

        <label>Username:</label>
        <input type="text" {...usernameBind} />
        <br />

        <label>Password:</label>
        <input type="password" {...passwordBind} />
        <br />

        <div>
          <input type="submit" value="Guardar!" />
          <button onClick={clearForm}>Borrar formulario</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
