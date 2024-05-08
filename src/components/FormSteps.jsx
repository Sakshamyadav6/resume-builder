import React from "react";

const FormSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <>
      <div>
        {step1 ? (
          <>
            <div className="flex items-center">
              <div className="rounded-full bg-primary text-white w-8 h-8 flex items-center justify-center">
                1
              </div>
              <div className="h-1 w-8 bg-primary"></div>
              <div className="rounded-full bg-gray-500 text-white w-8 h-8 flex items-center justify-center">
                2
              </div>
              <div className="h-1 w-8 bg-gray-500"></div>
              <div className="rounded-full bg-gray-500 text-white w-8 h-8 flex items-center justify-center">
                3
              </div>
              <div className="h-1 w-8 bg-gray-500"></div>
              <div className="rounded-full bg-gray-500 text-white w-8 h-8 flex items-center justify-center">
                4
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
        {step2 ? (
          <>
            <div className="flex items-center">
              <div className="rounded-full bg-gray-500 text-white w-8 h-8 flex items-center justify-center">
                1
              </div>
              <div className="h-1 w-8 bg-gray-500"></div>
              <div className="rounded-full bg-primary text-white w-8 h-8 flex items-center justify-center">
                2
              </div>
              <div className="h-1 w-8 bg-primary"></div>
              <div className="rounded-full bg-gray-500 text-white w-8 h-8 flex items-center justify-center">
                3
              </div>
              <div className="h-1 w-8 bg-gray-500"></div>
              <div className="rounded-full bg-gray-500 text-white w-8 h-8 flex items-center justify-center">
                4
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
        {step3 ? (
          <>
            <div className="flex items-center">
              <div className="rounded-full bg-gray-500 text-white w-8 h-8 flex items-center justify-center">
                1
              </div>
              <div className="h-1 w-8 bg-gray-500"></div>
              <div className="rounded-full bg-gray-500 text-white w-8 h-8 flex items-center justify-center">
                2
              </div>
              <div className="h-1 w-8 bg-gray-500"></div>
              <div className="rounded-full bg-primary text-white w-8 h-8 flex items-center justify-center">
                3
              </div>
              <div className="h-1 w-8 bg-primary"></div>
              <div className="rounded-full bg-gray-500 text-white w-8 h-8 flex items-center justify-center">
                4
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
        {step4 ? (
          <>
            <div className="flex items-center">
              <div className="rounded-full bg-gray-500 text-white w-8 h-8 flex items-center justify-center">
                1
              </div>
              <div className="h-1 w-8 bg-gray-500"></div>
              <div className="rounded-full bg-gray-500 text-white w-8 h-8 flex items-center justify-center">
                2
              </div>
              <div className="h-1 w-8 bg-gray-500"></div>
              <div className="rounded-full bg-gray-500 text-white w-8 h-8 flex items-center justify-center">
                3
              </div>
              <div className="h-1 w-8 bg-gray-500"></div>
              <div className="rounded-full bg-primary text-white w-8 h-8 flex items-center justify-center">
                4
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default FormSteps;
