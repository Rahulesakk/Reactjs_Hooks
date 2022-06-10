import React,{useContext} from 'react'
import {CountContext} from '../App'

function ComponentC() {
    const countContext = useContext(CountContext)
  return (
    <div>
        <h1>Component C</h1>
        <p>Count -- {countContext.CountState}</p>
        <button onClick={()=>countContext.CountDispatch('increment')}>Increment</button>
        <button onClick={()=>countContext.CountDispatch('decerement')}>Decerement</button>
        <button onClick={()=>countContext.CountDispatch('reset')}>Reset</button>
    </div>
  )
}

export default ComponentC