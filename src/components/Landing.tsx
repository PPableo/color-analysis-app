import React from "react";

const Landing: React.FC = () => {
  return (
    <div className="relative" id="home">
      <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 light:opacity-20"
      >
        <div className="blur-[106px] h-56 bg-gradient-to-br from-pink-400 to-primary light:from-white"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-pink-300 to-primary light:to-white"></div>{" "}
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div className="relative pt-36 ml-auto">
          <div className="lg:w-2/3 text-center mx-auto">
            <h1 className="text-gray-900 light:text-white font-bold text-5xl md:text-6xl xl:text-7xl">
              Color Analysis{" "}
              <span className="text-primary light:text-white">Formula.</span>
            </h1>
            <p className="mt-8 text-gray-700 light:text-gray-300 text-xl">
            Unlock Your True Colors: Personal Color Analysis for Flattering Colors And Style
            </p>
            <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
              <a
                href="#features"
                className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
              >
                <span className="relative text-base font-semibold text-white">
                  Get started
                </span>
              </a>
              <a
                href="#features"
                className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 light:before:border-gray-700 light:before:bg-gray-800 sm:w-max"
              >
                <span className="relative text-base font-semibold text-white light:text-white">
                  Learn more
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
