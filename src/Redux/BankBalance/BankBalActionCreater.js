import { DEPOSIT_SAVING,WITHDRAW_SAVING,DEPOSIT_CURRENT,WITHDRAW_CURRENT } from './BankBalActionType'

export function deposit_saving(){
    return{
        type : DEPOSIT_SAVING,
        quantity : 5000
    }    
}

export function deposit_current(){
    return{
        type : DEPOSIT_CURRENT,
        quantity : 5000
    }
}

export function withdraw_saving(){
    return{
        type : WITHDRAW_SAVING,
        quantity : 5000
    }
}

export function withdraw_current(){
    return{
        type : WITHDRAW_CURRENT,
        quantity : 5000
    }
}