import React from "react";
import "./index.css";

const App = () => {
  return (
    <div className="align-center flex flex-row h-screen">
      <div className="bg-[#57FF9A] h-screen w-1/2">
        <div className="columns-2 fixed inset-x-0 bottom-0 align-bottom h-1/3 w-screen grid-flex grid-cols">
          <div className="absolute bottom-10 left-0 grid-flex grid-cols">
            <img
              className="cursor-pointer ml-8 mb-4 h-8"
              alt="cartoon network"
              src="image-4@2x.png"
            />
            <img
              className="cursor-pointer relative ml-24 -mt-12 h-8"
              alt="tiktok"
              src="image-5@2x.png"
            />
            <p className="ml-8 text-white sm:text-1xl md:text-2xl lg:text-3xl xl:text-3xl 3xl:text-9xl ">
              Trusted by +135
              <br /> brands. >>
            </p>
            <p className="ml-8 text-black sm:text-1xl md:text-2xl lg:text-3xl xl:text-3xl 3xl:text-9xl ">
              Work with them.
            </p>
          </div>
          <div className="absolute bottom-10 right-10">
            <p className=" text-gray-500 sm:text-1xl md:text-2xl lg:text-3xl xl:text-3xl 3xl:text-9xl ">
              Guestimate!
            </p>
            <p className="text-black sm:text-1xl md:text-2xl lg:text-3xl xl:text-3xl 3xl:text-9xl ">
              instagram.com/
            </p>
          </div>
        </div>
        <div class="absolute bottom-auto top-0 h-4 w-full bg[#C6F5D6]"></div>
        <div className="ml-10 mt-24">
          <div className="font-montserrat cursor-pointer mt-16 absolute font-light sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-4xl text-gray-800">
            Level up as a brand
          </div>
        </div>
        <div className="mix-blend-multiply cursor-pointer mt-28 ml-12 absolute">
          <img
            className="cursor-pointer sm:h-20 md:h-24 lg:h-20 xl:h-32 2xl:h-28"
            alt="Influencer"
            src="influencer.svg"
          />
        </div>
      </div>
      <div className="w-3/6 bg-[#f0f0f0] // container-direita">
        <img className="h-18 ml-auto p-4 bg-[#f0f0f0]" alt="" src="frame.svg" />
        <div className="h-12">
          <p className="font-bold text-3xl leading-8 text-left ml-4 mt-4 bg-[#f0f0f0] text-green-600">
            01
          </p>
        </div>
        <div className="bg-[#f0f0f0]">
          <div className="divBoxMulher object-position:right // xss :w-4 // sm:w-48 sm:mt-36 // md:w-48 md:mt-40 // lg:w-56 lg:mt-auto lg:ml-48 / xl:w-72 xl:mt-48 xl:ml-0 // 2xl:w-96 2xl:mt-auto 2xl:ml-auto">
            <img className="influencer" alt="influencer" src="image-3@2x.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
