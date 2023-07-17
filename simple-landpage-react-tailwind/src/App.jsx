import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/Main";

function App() {
  return (
    <div className="min-h-screen flex flex-col text-white">
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}

export default App;