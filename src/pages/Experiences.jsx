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

    const newInputForms = [
      ...inputForms,
      <InputForms key={inputForms.length} />,
    ];
    setInputForms(newInputForms);
  };

  const handleDelete = (indexToDelete) => {
    const updatedForms = inputForms.filter(
      (_, index) => index !== indexToDelete
    );
    setInputForms(updatedForms);
  };
  const InputForms = ({ index }) => {
    return (
      <>
        <div className="flex flex-col md:flex-row w-full">
          <div className="mb-5 mr-4 flex-grow" key={index}>
            <label
              htmlFor={`job-title-${index}`}
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Job Title
            </label>
            <input
              type="text"
              id={`job-title-${index}`}
              className="block w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-5 flex-grow" key={index}>
            <label
              htmlFor={`employer-${index}`}
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Employer
            </label>
            <input
              type="text"
              id={`employer-${index}`}
              className="block w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full">
          <div className="mb-5 mr-4 flex-grow" key={index}>
            <label
              htmlFor={`start-date-${index}`}
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Start Date
            </label>
            <input
              type="date"
              id={`start-date-${index}`}
              className="block w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-5 flex-grow" key={index}>
            <label
              htmlFor={`end-date-${index}`}
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              End Date
            </label>
            <input
              type="date"
              id={`end-date-${index}`}
              className="block w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-5 md:ml-4 flex-grow" key={index}>
            <label
              htmlFor={`location-${index}`}
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Currently Working
            </label>
            <select className="block w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
        <div className="mb-5 flex-grow" key={index}>
          <label
            htmlFor={`location-${index}`}
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Location
          </label>
          <input
            type="text"
            id={`location-${index}`}
            className="block w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-5 flex-grow" key={index}>
          <label
            htmlFor={`location-${index}`}
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Description
          </label>
          <textarea
            type="text"
            id={`location-${index}`}
            className="block w-full p-3 h-40 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div>
          <button
            type="button"
            onClick={() => handleDelete(index)}
            class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
          >
            Delete
          </button>
        </div>
      </>
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
        <div className="relative lg:right-96 right-32 mb-4 lg:mb-0">
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
