import React, {useState,useEffect } from 'react'

function Counter2() {
    const[count,setCount]= useState(0);
    useEffect(() => {
        document.title=  `You have clicked ${count} times`;
    })
  return (
    <div>
        <p>You have clicked {count} times</p>
        <button onClick={()=>setCount(count+1)}>Click Me</button>
    </div>
  )
}

export default Counter2