/* eslint-disable react/prop-types */
import { Fragment } from "react";
import { Link } from "react-router-dom";
import TopNav from "../components/topNav/topNav";


const AuthLayout = ({
  heading,
  subHeading,
  children,
  handleLink,
  buttonContent,
  quesion,
  questionLink,
  questionLinkText,
  handleSubmit,
  disabled,
}) => {
  return (
    <Fragment>
      <TopNav />
      <div className=" w-full flex bg-white h-auto justify-center items-center">
        <div className="w-[85%] lg:w-1/2 flex flex-col my-12 bg-gradient-to-l from-purple-300 to-purple-100 text-purple-600 border border-purple-300 rounded-lg shadow-md">
          <div>
            <div className="pt-20">
              <h1 className="text-4xl font-inter text-[#141414] font-semibold text-center ">
                {heading || "Hello 👋🏾"}
              </h1>
              <p className="text-xl my-5 font-dmSan text-[#141414] font-400 text-center">
                {subHeading || "Create a new account "}
              </p>
            </div>

            {children}

            <div>
              <Link
                to={handleLink}
                className="pt-10 flex justify-center items-center"
              >
                <button
                  onClick={handleSubmit}
                  disabled={disabled}
                  className="bg-[#4A148C]   w-1/2 py-3 rounded-xl text-white font-semibold capitalize"
                >
                  {buttonContent || "Get Started"}
                </button>
              </Link>
            </div>
            <div className="py-8 text-sm font-dmSan font-500 text-[#141414] text-center ">
              {quesion}{" "}
              <span>
                <Link to={questionLink} className="text-[#4A148C]">
                  {questionLinkText}
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AuthLayout;
