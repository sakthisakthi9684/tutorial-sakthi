import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Day3() {
  const Home1=useNavigate()
  const about1=useNavigate()



  function about()
  {
    about1(`/about/${b}`)
  }
  // function Home()
  // {
  //   Home1("/Home")
  // }
  let a=90
  let b="SAKTHI"
  return (
    <div>Day3<br/><br/><br/>
      
    <button onClick={()=>Home1(`/Home/${a}`)}>Home</button>
    
    <button onClick={()=>Home1(`/Day5`)}>Day5</button>
    <button  onClick={()=>about()}>About</button>
   </div>

  )
}   

export default Day3