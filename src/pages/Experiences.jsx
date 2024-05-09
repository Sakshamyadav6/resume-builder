import React, { useState } from "react";
import FormSteps from "../components/FormSteps";
import { useNavigate } from "react-router-dom";

const Experiences = () => {
  const [inputForms, setInputForms] = useState([]);
  const navigate = useNavigate();

  const backButton = (e) => {
    e.preventDefault();
    navigate("/details");
  };

  const addInput = (e) => {
    e.preventDefault();

    console.log("first");

    const newinputForms = [
      ...inputForms,
      <InputForms key={inputForms.length} />,
    ];
    setInputForms(newinputForms);
  };
  const InputForms = ({ index }) => {
    return (
      <div className="mb-5" key={index}>
        <label
          htmlFor={`large-input-${index}`}
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Large input
        </label>
        <input
          type="text"
          id={`large-input-${index}`}
          className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
    );
  };
  return (
    <>
      <div className="flex flex-col items-center mt-9">
        <div className="mb-4">
          <FormSteps step2 />
        </div>
        <h1 className="text-3xl font-bold mt-2 mb-2 tracking-widest">
          Experiences
        </h1>
        <div className="relative lg:right-96  right-32 mb-4 lg:mb-0">
          <button
            type="button"
            onClick={backButton}
            className="text-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary"
          >
            <i className="fa-solid fa-backward right-96"></i>
          </button>
        </div>
        <form>
          <div className="">
            <button
              type="button"
              onClick={addInput}
              className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Add Experiences
            </button>
          </div>

          <div>
            {inputForms.map((form, index) => (
              <React.Fragment key={index}>{form}</React.Fragment>
            ))}
          </div>

          <div className="flex flex-col md:flex-col mt-5 w-full">
            <button
              type="submit"
              className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Experiences;
