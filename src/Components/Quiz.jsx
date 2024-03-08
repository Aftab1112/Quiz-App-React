import React from "react";

const Quiz = () => {
  return (
    <div className="fixed w-full h-screen bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500">
      <div className=" mt-14 w-[640px] mx-auto  bg-white text-zinc-800 flex flex-col gap-5 rounded-xl px-10 py-12 ">
        <h1 className=" text-4xl">Quiz</h1>
        <hr className="h-[2px] border-none bg-gray-500" />
        <h2 className="text-2xl font-medium">What is capital of India?</h2>
        <ul>
          <li className="flex  items-center h-16 pl-4 border-[1px] border-[solid] border-[#686868] rounded-lg mb-5 text-xl cursor-pointer ">
            Delhi
          </li>
          <li className="flex  items-center h-16 pl-4 border-[1px] border-[solid] border-[#686868] rounded-lg mb-5 text-xl cursor-pointer ">
            Bombay
          </li>
          <li className="flex  items-center h-16 pl-4 border-[1px] border-[solid] border-[#686868] rounded-lg mb-5 text-xl cursor-pointer ">
            Solapur
          </li>
          <li className="flex  items-center h-16 pl-4 border-[1px] border-[solid] border-[#686868] rounded-lg mb-5 text-xl cursor-pointer ">
            Bengluru
          </li>
        </ul>
        <button>Next</button>
        <div className="index">1 of 5 questions</div>
      </div>
    </div>
  );
};

export default Quiz;
