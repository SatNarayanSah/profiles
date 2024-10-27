import { useState } from 'preact/hooks'

import './app.css'
import Body from './components/Body'



export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div  className='text-red-800 font-bold text-4xl'>Hello World</div> */}
      <Body/>
    </>
  )
}
