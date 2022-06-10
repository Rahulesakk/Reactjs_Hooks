import React,{ useEffect,useReducer} from 'react'
import axios from 'axios'

const initialState = {
    loading : true,
    error : '',
    post : {}
}
const reducer = (state,action)=>{
    switch(action.type){
        case 'Fetch_Success':
            return{
                loading : false,
                error: " ",
                post : action.payload
            }
        case 'Fetch_Error':
            return{
                loading : false,
                error: "Something Went Wrong",
                post : {}
            }    
            default:
                return state
    }
}
function DataFetchingTwo() {
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            dispatch({type: 'Fetch_Success', payload: response.data})
        })
        .catch(error => {
            dispatch({type: 'Fetch_Error'})
        })
    },[])
    const[state,dispatch] = useReducer(reducer, initialState)
  return (
    <div>
        {state.loading ? 'Loading':state.post.title}
        {state.error ? state.error : null}
    </div>
  )
}

export default DataFetchingTwo