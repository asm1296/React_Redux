import { PAY_HOMELOAN, TAKE_HOMELOAN,PAY_CARLOAN,TAKE_CARLOAN } from './LoanAmActionType'

export function pay_homeloan(){
    return{
        type : PAY_HOMELOAN,
        quantity : 5000
    }
}

export function take_homeloan(){
    return{
        type : TAKE_HOMELOAN,
        quantity : 5000
    }
}

export function pay_carloan(){
    return{
        type : PAY_CARLOAN,
        quantity : 5000
    }
}

export function take_carloan(){
    return{
        type : TAKE_CARLOAN,
        quantity : 5000
    }
}