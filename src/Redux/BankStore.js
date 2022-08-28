// import { combineReducers,createStore,applyMiddleware } from 'redux'
// import logger from 'redux-logger'
// import { composeWithDevTools } from 'redux-devtools-extension'
// import reduxthhunk from 'redux-thunk'

// import { BankBalReducer } from './BankBalance/BankBalReducer'
// import { LoanAmReducer } from './LoanAmount/LoanAmReducer'
// import { AccountHolReducer } from './AccountHolder/AccountHolReducer'

// const rootReducer = combineReducers({
//     balance : BankBalReducer,
//     loan : LoanAmReducer,
//     accountHolders : AccountHolReducer
// })

// export const bankStore = createStore(rootReducer,composeWithDevTools(applyMiddleware(reduxthhunk,logger)));

import {configureStore} from '@reduxjs/toolkit';

import { userApi } from './AccountHolder/AccountHolReducer'

export const bankStore = configureStore({
    reducer:{
        [userApi.reducerPath]:userApi.reducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(userApi.middleware),
})
