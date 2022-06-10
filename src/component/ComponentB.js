import React,{useContext} from 'react'
import Componentc from './ComponentC'
import {UserContext,ChaneelContext} from '../App'

function ComponentB() {
    const user = useContext(UserContext)
    const comp = useContext(ChaneelContext)
  return (
      <div>
          {user} {comp}
      </div>
  )
}

export default ComponentB