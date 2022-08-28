import { GET_DETAILS_ACCOUNT_HOLDER,LOADING_PROCESS,FAILED_PROCESS } from './AccountHolActionType'
import axios from 'axios'

export function get_details_account_holder(accHoldData){
    return{
        type : GET_DETAILS_ACCOUNT_HOLDER,
        accHolders : accHoldData
    }
}

export function loading_process(){
    return{
        type : LOADING_PROCESS
    }
}

export function failed_process(error){
    return{
        type : FAILED_PROCESS,
        errormsg : error
    }
}

export function getDetailsProcess(){
    return function(dispatch){
        dispatch(loading_process());
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((result)=>{
            dispatch(get_details_account_holder(result.data))
        })
        .catch((error)=>{
            dispatch(failed_process('Something went Wrong'))
        })
    }
}