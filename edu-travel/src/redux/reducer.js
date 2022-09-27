import * as types from "./actionType"

const initState = {
    user:[],
    isError:false,
    isLoading:false,

}

const reducer = (state=initState,action)=>{
    const {type,payload} = action
    switch(type){
        case types.GET_USER_DATA_REQUEST:
            return{
                ...state,
                isLoading:true
            }
        case types.GET_USER_DATA_SUCCESS:
            return{
                ...state,
                user:payload,
                isLoading:false,
            }    
        case types.GET_USER_DATA_FAILURE:
            return{
                ...state,
                isLoading:false,
                isError:true
            }
        default:
            return state
    }
}

export {reducer}