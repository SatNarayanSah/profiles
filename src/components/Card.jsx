import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { CiGlobe, CiHeart } from "react-icons/ci";
import { BiHeart } from "react-icons/bi";
import { PiPencil } from "react-icons/pi";

import { ImBin } from "react-icons/im";
import { FcLike } from "react-icons/fc";

const Card = (value) => {
  console.log(value);
  const { id, email, imgurl, name, phone, url } = value.value;
  const { handleShowModal } = value;
  const { handleId } = value
  
  const [ isred, setIsred ] = useState(false);

//{} object destruccturing
// [] array destructing
  const handleFaveriot = () => {
    setIsred(!isred);
    // if(isred){
    //   setIsred(false)
    // }else{
    //   setIsred(true)
    // }
  };
  return (
    <div className="p-4">
      <div className="border-2 border-black h-fit w-[300px] ">
        <div className="bg-[#f5f5f5] flex  justify-center items-center">
          <img className="h-[292px] w-[295px]" src={imgurl} alt="image" />
        </div>
        <div className="p-2 mt-4 mb-4">
          <p className="text-center font-bold text-2xl"> {name} </p>
          <div className="flex items-center gap-4">
            <p>
              {" "}
              <FaEnvelope />{" "}
            </p>
            <p> {email} </p>
          </div>
          <div className="flex items-center gap-4">
            <p>
              {" "}
              <IoMdCall />{" "}
            </p>
            <p> {phone} </p>
          </div>
          <div className="flex items-center gap-4">
            <p>
              {" "}
              <CiGlobe />{" "}
            </p>
            <p> {url} </p>
          </div>
        </div>
        <div className="flex justify-between items-center bg-[#f1f1f1] text-3xl mb-0 ">
          <div onClick={handleFaveriot} className="border-r-2 p-4 w-1/3 flex justify-center ">
            {/* {" "} */}
          {isred ? <FcLike/> : <CiHeart/>}
            {/* {" "} */}
          </div>
          <div 
          onClick={() =>{
            handleShowModal(true);
            handleId(id);
          }}
          className="border-r-2 p-4 w-1/3 flex justify-center">
            {/* {" "} */}
            <PiPencil />
            {/* {" "} */}
          </div>
          <div className="border-r-2 p-4 w-1/3 flex justify-center">
            {/* {" "} */}
            <ImBin />
            {/* {" "} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
