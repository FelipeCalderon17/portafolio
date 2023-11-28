import React, { useState, useEffect } from "react";
import HelperForm from "../helpers/HelperForm";
import { Global } from "../helpers/Global";
import { Navigate, NavLink } from "react-router-dom";

const squares = Array.from({ length: 10 }, (_, index) => (
  <div key={index} aria-hidden="true"></div>
));

const Registro = () => {
  const { form, cambiar } = HelperForm({});

  const registrar = async (e) => {
    e.preventDefault();
    console.log(form);
    let nuevoPerfil = form;
    /* console.log(nuevoPerfil); */
    //guardar en la api
    const request = await fetch(Global.url + "/persona/registrar", {
      method: "POST",
      body: JSON.stringify(nuevoPerfil),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const dataCons = await request.json();
    console.log(dataCons);
    if (dataCons.mensaje === "Insertado con exito") {
      window.location = "/";
    }
    cambiar({});
  };

  return (
    <>
      <div className="ascending-squares" aria-hidden="true">
        {squares}
      </div>
      <main className="flex flex-col items-center justify-center h-screen gap-10 sm:gap-11 md:gap-12 lg:gap-13 h-full align-bottom justify-self-center">
        <form
          onSubmit={registrar}
          className="gap-7 w-full  flex flex-col items-center justify-center h-screen  h-full align-bottom justify-self-center"
        >
          <h1>Registro</h1>
          <label className="max-w-[30em] w-[100%]">
            Nombre
            <input
              type="text"
              id="nombre"
              name="nombre"
              className="mt-3 px-5 py-4 bg-transparent border-2 border-solid border-neutGray-500 rounded-[5px] max-w-[30em] w-[100%] backdrop-blur-[5px]"
              placeholder=""
              required
              onChange={cambiar}
            />
          </label>
          <label className="max-w-[30em] w-[100%]">
            Apellidos
            <input
              type="text"
              id="apellidos"
              name="apellidos"
              className="mt-3 px-5 py-4 bg-transparent border-2 border-solid border-neutGray-500 rounded-[5px] max-w-[30em] w-[100%] backdrop-blur-[5px]"
              placeholder=""
              required
              onChange={cambiar}
            />
          </label>
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
          <label className="max-w-[30em] w-[100%]">
            Direccion
            <input
              type="text"
              id="direccion"
              name="direccion"
              className="mt-3 px-5 py-4 bg-transparent border-2 border-solid border-neutGray-500 rounded-[5px] max-w-[30em] w-[100%] backdrop-blur-[5px]"
              placeholder=""
              required
              onChange={cambiar}
            />
          </label>
          <label className="max-w-[30em] w-[100%]">
            Telefono
            <input
              type="text"
              id="telefono"
              name="telefono"
              className="mt-3 px-5 py-4 bg-transparent border-2 border-solid border-neutGray-500 rounded-[5px] max-w-[30em] w-[100%] backdrop-blur-[5px]"
              placeholder=""
              required
              onChange={cambiar}
            />
          </label>
          <label className="max-w-[30em] w-[100%]">
            Fecha Nacimiento
            <input
              type="date"
              id="fechaNace"
              name="fechaNace"
              className="mt-3 px-5 py-4 bg-transparent border-2 border-solid border-neutGray-500 rounded-[5px] max-w-[30em] w-[100%] backdrop-blur-[5px]"
              placeholder=""
              required
              onChange={cambiar}
            />
          </label>
          <div className="flex justify-center max-w-[30em] w-[100%]">
            <button type="submit" className="mt-8 glassy-icon px-6 m-7">
              Crear
            </button>
            <NavLink to={"/"} style={{ cursor: "pointer" }}>
              <button className="mt-8 glassy-icon px-6 m-7">Cancelar</button>
            </NavLink>
          </div>
        </form>
      </main>
    </>
  );
};

export default Registro;
