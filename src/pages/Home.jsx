import React from "react";
import "../output.css";
import { Link } from "react-router-dom";

const Home = () => {
  const pagehandle = () => {
    e.preventDefault();
  };

  return (
    <>
      <h1 className="text-primary text-4xl text-center font-mono font-bold mt-24">
        Resume Builder
      </h1>
      <h4 className="text-center text-2xl text-gray-500 font-bold italic mt-32 tracking-widest">
        “Your CV is just a commodity, Package yourself.” <br /> - Bernard Kelvin
        Clive
      </h4>
      <div className="flex justify-center mt-10">
        <button
          class="bg-transparent border-gray-500 border-2 text-white font-mono font-semibold py-2 px-4 rounded-full transition duration-500 ease-in-out hover:border-primary hover:text-primary "
          onClick={pagehandle}
        >
          Get Started
        </button>
      </div>
      <div className="flex justify-center mt-8 font-mono">
        <button className="hover:text-primary">
          <Link
            to="https://github.com/Sakshamyadav6/resume-builder"
            target="_blank"
          >
            Github
          </Link>
        </button>
      </div>
    </>
  );
};

export default Home;
