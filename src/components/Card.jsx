import React from 'react'
import { FaEnvelope } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { CiGlobe } from "react-icons/ci";
import { BiHeart } from 'react-icons/bi';
import { PiPencil } from 'react-icons/pi';

import { ImBin } from 'react-icons/im';




const Card = (props) => {

  console.log(props);
  const {id,email,imgurl,name,phone,url} = props.value
  return (
    <div className='p-4'>
        <div className='border-2 border-black h-fit w-[300px] ' >
          <div className='bg-[#f5f5f5] flex  justify-center items-center'>
          <img className='w-1/2 h-1/2' src={imgurl} alt="image" />
          
          </div>
          <div className='p-2 mt-4 mb-4'>
            <p className='text-center font-bold text-2xl'> {name} </p>
            <div className='flex items-center gap-4'>
              <p> <FaEnvelope/> </p>
              <p> {email} </p>
            </div>
            <div className='flex items-center gap-4'>
              <p> <IoMdCall/> </p>
              <p> {phone} </p>
            </div>
            <div className='flex items-center gap-4'>
              <p> <CiGlobe/> </p>
              <p> {url} </p>
            </div>
        </div>
        <div className='flex justify-between items-center bg-[#f1f1f1] text-3xl mb-0 '>
          <div className='border-r-2 p-4 w-1/3 flex justify-center '> <BiHeart/> </div>
          <div className='border-r-2 p-4 w-1/3 flex justify-center'> <PiPencil/> </div>
          <div className='border-r-2 p-4 w-1/3 flex justify-center'> <ImBin/> </div>
        </div>
        </div>
    </div>
  )
}

export default Card