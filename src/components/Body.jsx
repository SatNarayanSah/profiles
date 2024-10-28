import React from 'react'
import Card from './Card'
import { data } from '../../data'
import DataModal from './DataModal';

const Body = () => {
  const onSubmit = (data) => {
    console.log(data);
    
  };
  console.log(data);
  
  return (
    <div className='flex flex-wrap justify-center items-center'>
      <DataModal onSubmit={onSubmit} />
      {
        data.map((val) => (
          <Card value = {val} />
        ))
      }
        
    </div>
  )
}

export default Body