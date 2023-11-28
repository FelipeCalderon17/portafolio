import React, { useState, useEffect } from "react";
import HelperForm from "../helpers/HelperForm";
import { Global } from "../helpers/Global";
import { Navigate, NavLink } from "react-router-dom";

const squares = Array.from({ length: 10 }, (_, index) => (
  <div key={index} aria-hidden="true"></div>
));

const Login = () => {
  const { form, cambiar } = HelperForm({});

  const login = async (e) => {
    e.preventDefault();
    console.log(form);
    let nuevoPerfil = form;
    /* console.log(nuevoPerfil); */
    //guardar en la api
    const request = await fetch(Global.url + "/persona/ingresar", {
      method: "POST",
      body: JSON.stringify(nuevoPerfil),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const dataCons = await request.json();
    console.log(dataCons);
    if (dataCons.resultado === "success") {
      window.location = "/inicio";
    }
    /* cambiar({}); */
  };

  return (
    <>
      <div className="ascending-squares" aria-hidden="true">
        {squares}
      </div>
      <main className="flex flex-col items-center justify-center h-screen gap-10 sm:gap-11 md:gap-12 lg:gap-13 h-full align-bottom justify-self-center">
        <form
          onSubmit={login}
          className=" gap-7 w-full  flex flex-col items-center justify-center h-screen  h-full align-bottom justify-self-center"
        >
          <h1>Inicio de Sesión</h1>
          <label className="max-w-[30em] w-[100%]">
            Correo Electronico
            <input
              type="text"
              id="email"
              name="email"
              className="mt-3 px-5 py-4 bg-transparent border-2 border-solid border-neutGray-500 rounded-[5px] max-w-[30em] w-[100%] backdrop-blur-[5px]"
              placeholder=""
              required
              onChange={cambiar}
            />
          </label>
          <label className="max-w-[30em] w-[100%]">
            Contraseña
            <input
              type="password"
              id="password"
              name="password"
              className="mt-3 px-5 py-4 bg-transparent border-2 border-solid border-neutGray-500 rounded-[5px] max-w-[30em] w-[100%] backdrop-blur-[5px]"
              placeholder=""
              required
              onChange={cambiar}
            />
          </label>
          <div className="flex justify-center max-w-[30em] w-[100%]">
            <button type="submit" className="mt-8 glassy-icon px-6 m-7">
              Iniciar
            </button>
            <button type="reset" className="mt-8 glassy-icon px-6 m-7">
              Cancelar
            </button>
          </div>
          <NavLink to={"/registro"}>
            <button className="max-w-[30em] w-[100%]">No tengo Cuenta</button>
          </NavLink>
        </form>
      </main>
    </>
  );
};

export default Login;
