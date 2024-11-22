import React from "react";

const Connect = () => {
  return (
    <section className="md:px-[150px] px-4 my-[60px] md:my-[100px]">
      <div className="bg-gray-900 px-4 h-max md:h-[150px] py-8 md:py-0 mb-[200px] flex items-center justify-center text-white font-main rounded-lg">
        <div className="flex flex-col md:flex-row items-center justify-between gap-x-8 gap-y-6">
          <div className="text-[25px] font-bold capitalize">
            Start a project
          </div>
          <div className="md:w-5/12 text-center">
            Looking to collaborate? Let's schedule a chat. I'll bring the tea,
            you bring the ideas!
          </div>
          <div className="w-full md:w-max">
            <button className="bg-primary px-3 py-3 rounded text-white flex items-center justify-center gap-1 w-full font-bold">
              {/* <PiHandFistLight className="text-[18px]" /> */}
              <span className="text-[14px]">Let's do this</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
