import './App.css';
import React, {useReducer} from 'react';
import StateHook from "./component/Rahul"
import Counter2 from './component/Counter2';
import ComponentA from './component/ComponentA'
import UseReducser from './component/CounteOne'
import CompA from './Use_reducer_with_use_context/ComponentA'
import CompB from './Use_reducer_with_use_context/ComponentB'
import CompD from './Use_reducer_with_use_context/ComponenetD'
import Data1 from './Data_fetching_with_use_effect_use_reducer/ComponentA'
import Data2 from './Data_fetching_with_use_effect_use_reducer/DataFetchingTwo'

export const UserContext = React.createContext()
export const ChaneelContext = React.createContext()

export const CountContext = React.createContext()

const Initalcount = 0
const reducer = (state,action) => {
  switch (action){
    case  'increment':
      return state+1
    case 'decerement':
      return state-1
    case 'reset':
      return Initalcount
    default:
      return state        
  }
}
function App() {
  const[count,dispatch]= useReducer(reducer,Initalcount)
  return (
    <CountContext.Provider value = {{CountState:count, CountDispatch :dispatch}}>
      <div>
        <Data2/>
        {/* <CompA/>
        <CompB/>
        <CompD/> */}
        {/* <UseReducser/> */}
        {/* <StateHook/> */}
        {/* <Counter2/> */}
        {/* <UserContext.Provider value={'rahul'}>
          <ChaneelContext.Provider value={'Tech Active'}>
            <ComponentA/>

          </ChaneelContext.Provider>
        </UserContext.Provider> */}
      {/* <h1>Welcome</h1> */}
      </div>
    </CountContext.Provider>
    
  );
}

export default App;
