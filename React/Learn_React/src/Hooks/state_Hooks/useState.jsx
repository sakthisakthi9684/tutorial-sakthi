import React, { useState } from 'react'

function State() {

  const [demo1,setdemo1]=useState("");
  const [demo2,setdemo2]=useState(1); 

  return (
    <div className='h-full w-full'>


      <b>Example.1</b>
      <br/>
      <input type='text'  onChange={(e)=>{setdemo1(e.target.value)}} />
      <p>{demo1}</p>



      <b>Example.2</b><br/>
      <button className='bg-purple-500 border border-gray-900 p-3 px-4 rounded-xl' onClick={()=>setdemo2(demo2+1)}>click me</button>
      <p>{demo2}</p>
    

    </div>
  )
}

export default State;