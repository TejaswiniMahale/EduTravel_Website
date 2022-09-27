import axios from "axios"
import * as types from "./actionType"

const user_post_request = () =>{
   return{
    type:types.POST_USER_DATA_REQUEST
   }
}
const user_post_success = (payload) =>{
    return{
        type:types.POST_USER_DATA_SUCCESS,
        payload
    }
}
const user_post_failure = () =>{
    return{
        type:types.POST_USER_DATA_FAILURE
    }   
}

const getData = (params)=>dispatch=>{
    dispatch({type:types.GET_USER_DATA_REQUEST})
    return axios.get("https://warm-headland-49821.herokuapp.com/user",params)
    .then((r)=>{
        dispatch({
            type:types.GET_USER_DATA_SUCCESS,
            payload:r.data
        })
    })
    .catch((e)=>{
        dispatch({type:types.GET_USER_DATA_FAILURE})
    })
}

const postUser=(payload)=>dispatch=>{
    dispatch(user_post_request())
    return axios.post("https://warm-headland-49821.herokuapp.com/user",payload)
    .then(()=>{
        dispatch(user_post_success())
    })
    .catch((e)=>{
        dispatch(user_post_failure())
    })
}


const editUser=(id,payload)=>dispatch=>{
    dispatch({type:types.EDIT_USER_DATA_REQUEST})
    return axios.patch(`https://warm-headland-49821.herokuapp.com/user/${id}`,{
        doc:payload.doc,
        count:payload.count,
        status:payload.status
    })
    .then((r)=>{
        dispatch({
            type:types.EDIT_USER_DATA_SUCCESS,
            payload:r.data
        })
    })
    .catch((e)=>{
        dispatch({type:types.EDIT_USER_DATA_FAILURE})
    })
}

export {postUser,getData,editUser}