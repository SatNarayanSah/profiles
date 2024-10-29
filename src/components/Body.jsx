import React, { useState } from 'react'
import Card from './Card'
import { data } from '../../data'
import DataModal from './DataModal';

const Body = () => {
  const [users, setUsers] = useState(data);
  const [showModal, setShowModel] = useState(false)
  const [id, setId] = useState("");

  const onSubmit = (data) => {
    users[id].name = data.name;
    users[id].email = data.email;
    users[id].phone = data.ContactNumber;
    users[id].url = data.website;
    users[id].imgurl = data.imgurl;
    setShowModel(false);
  };
  

  const handleShowModel = (status) =>{
    setShowModel(status)
  }
  const handleId = (id) => {
    setId(id);
  };
  
  return (
    <div className='flex flex-wrap justify-center items-center'>
      {
        showModal ? (<DataModal handleShowModel= {(handleShowModel)} onSubmit={onSubmit} />) :(" ")
      }
      
      {
        data.map((val) => (
          <Card 
          handleId={handleId}
          key={val.id}
          handleShowModal={handleShowModel}
          value={val} 
           />
        ))
      }
        
    </div>
  )
}

export default Body