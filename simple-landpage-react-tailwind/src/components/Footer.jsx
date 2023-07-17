import React from "react";

function Footer() {
  return (
    <footer className="w-screen mr-0 ml-0 p-6 flex flex-col md:flex-row items-center justify-between bg-zinc-500">
      <a href="#" className="mx-3 hover:opacity-80 duration-150">Meu Perfil</a>
      <div className="flex -mx-6">
        <a href="#" className="mx-3 hover:opacity-80 duration-150">Blog</a> |
        <a href="#" className="mx-3 hover:opacity-80 duration-150">Sobre</a> |
        <a href="#" className="mx-3 hover:opacity-80 duration-150">Ajuda</a>
      </div>
    </footer>
  );
}

export default Footer;