import { DEPOSIT_SAVING,WITHDRAW_SAVING,DEPOSIT_CURRENT,WITHDRAW_CURRENT } from './BankBalActionType'

const Balance = {
    savingAccount : 20000,
    currentAccount : 20000
}

export const BankBalReducer = (newBalance=Balance,action)=>{
    switch(action.type){
        case DEPOSIT_SAVING : return{
            ...newBalance,
            savingAccount : newBalance.savingAccount + action.quantity
        }
        case DEPOSIT_CURRENT : return{
            ...newBalance,
            currentAccount : newBalance.currentAccount + action.quantity
        }
        case WITHDRAW_SAVING : return{
            ...newBalance,
            savingAccount : newBalance.savingAccount - action.quantity
        }
        case WITHDRAW_CURRENT : return{
            ...newBalance,
            currentAccount : newBalance.currentAccount - action.quantity
        }
        default : return {
            ...newBalance
        }
    }
}