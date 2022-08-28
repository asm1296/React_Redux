// import { GET_DETAILS_ACCOUNT_HOLDER,LOADING_PROCESS,FAILED_PROCESS } from './AccountHolActionType'

// const getProcessState={
//     loading : false,
//     accHold : [],
//     errorinfo : ''
// }

// export const AccountHolReducer=(processState=getProcessState,action)=>{
//     switch(action.type){
//         case GET_DETAILS_ACCOUNT_HOLDER : return{
//             loading : false,
//             accHold : action.accHolders,
//             errorinfo : ''
//         }
//         case LOADING_PROCESS : return{
//             loading : true,
//             accHold : [],
//             errorinfo : ''
//         }
//         case FAILED_PROCESS : return{
//             loading : false,
//             accHold : [],
//             errorinfo : action.errormsg
//         }
//         default : return {
//             ...processState
//         }
//     }
// }

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
    reducerPath:'userApi',
    baseQuery:fetchBaseQuery({baseUrl:'https://jsonplaceholder.typicode.com'}),
    endpoints:(builder)=>({
        allUsers:builder.query({
            query:()=>'/users'
        })
    })
})

export const { useAllUsersQuery } = userApi;