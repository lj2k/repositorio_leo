import React from 'react';
import "./index.css";
import './fonts/siffon.woff2';

const App = () => {
  return (
  <div className="align-center bg-white flex flex-row h-screen //*container total*// "> 
  <div className="bg-[#57FF9A] w-1/2 //container left">
  <div class="absolute bottom-auto top-0 h-4 w-full bg-teal-400"></div>
  <div className="ml-12"><div className="font-montserrat cursor-pointer mt-48 absolute 
  font-light text-4xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl
  2xl:text-5xl text-gray-800">Level up as a brand</div></div>
  <div className="cursor-pointer mt-60 ml-12 absolute h-96">
  <img className="cursor-pointer h-12 sm:h-20 md:h-24 lg:h-28 xl:h-32" alt="Influencer" src="influencer.svg"/>   
  <img className="opacity-5 5mix-blend-multiply cursor-pointer h-12 sm:h-20 md:h-24 lg:h-28 xl:h-32" alt="Influencer" src="influencer.svg"/></div>
  <div className="h-12 //espaçamento container left]"></div>
  <div className="h-4/6 // espaçamento esquerda "></div>
  <img className="cursor-pointer ml-8 mb-4 h-8" alt="cartoon network" src="image-4@2x.png" /> 
  <img className="cursor-pointer relative  ml-24 -mt-12 h-8" alt="tiktok" src="image-5@2x.png"/> 
  <p className= "ml-8 text-white text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl 3xl:text-9xl ">Trusted by +135 brands.>></p>    
  <p className= "ml-8 text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl 3xl:text-9xl text-bold ">Work with them.</p>
  </div>
  <div className="w-3/6 bg-[#f0f0f0] // container-direita"> <img className="h-auto ml-auto mt-4 mr-4 bg-[#f0f0f0]" alt="" src="frame.svg" />
  <div className="h-12 // 01 e menu"> 
  <p className= "font-black text-3xl leading-8 text-left ml-4 mt-4 bg-[#f0f0f0] text-green-600">01</p></div>
  <div className="h-auto bg--[#f0f0f0]">
  <div className="divBoxMulher ml-auto mr-0 object-position:right bg-black w-64 sm:w-72 md:w-72 lg:w-64 xl:w-72 2xl:w-72">
  <img className=""  src="image-3@2x.png" /></div>
  </div>
  <div className="grid-flex grid-cols-3">
  <div className="col-span-3 h-16 flex flex-col bg-white justify-between">
  <div className= "mt-16 text-center text-2xl text-gray-700">Guesstimate! 
  <p className= "mt-auto text-center text-2xl text-gray-700">Instagram.com/</p>
  </div>
  </div>
 
  <div class="col-span-3 h-36 flex flex-col bg-white justify-between">
  </div>
  <div class="absolute bottom-auto top-auto h-8 w-1/2 bg-teal-400"></div> 
  </div>
  </div>
  </div>
  



  )
}  

export default App


