import React from 'react'
import { useForm } from 'react-hook-form';


const DataModal = (props) => {
    const {onSubmit} = props;

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
  return (
    <div className='bg-white top-0 h-screen w-full flex items-center justify-center fixed bg-opacity-65 text-black'>
        <div>

        
        <form
         onSubmit={handleSubmit(onSubmit)}
         className=' p-4  shadow-2xl shadow-yellow-500  h-[300px] w-[350px] bg-white flex flex-col gap-4'>
        <div className='flex justify-between font-bold items-center'>
        <p className='text-xl '>Basic Modal</p>
            <p>X</p>
        </div>
        <div className='flex justify-between '>
            <p>Name:</p>
            <input className='border-2' type="text" {...register("name")} />
        </div>
        <div className='flex justify-between '>
            <p>Email:</p>
            <input className='border-2' type="email" {...register("email")} />
        </div>
        <div className='flex justify-between '>
            <p>Phone:</p>
            <input className='border-2' type="number" {...register("ContactNumber")} />
        </div>
        <div className='flex justify-between '>
            <p>Website:</p>
            <input className='border-2' type="url" {...register("website")} />
        </div>
        {/* <div className='flex justify-between '>
            <p>Image:</p>
            <input className='border-2' type="image" {...register("image")} />
        </div> */}
        <button className='border-2 border-blue bg-green-300 shadow-2xl shadow-red-900 text-pink-500 uppercase font-bold rounded-2xl' type='submit'>
            submit
        </button>
        </form>
       
    </div>
    </div>
  )
}

export default DataModal