import React from "react";
import logo from "../assets/logo192.png"

function Header() {
  return (
    <header className="w-screen mr-0 ml-0 px-6 pt-6 flex justify-between bg-zinc-500">

      <div className="">

        <h2 className="md:text-2xl lg:text-4xl uppercase">
          Bem vindo ao
        </h2>

        <h1 className="text-2xl md:text-4xl lg:text-6xl font-black uppercase mb-8">
          MyBlog
        </h1>
      </div>
      <div className="h-14 w-14">
      <img className="" src={logo} alt="logo" />
      </div>
    </header>
  );
}

export default Header;