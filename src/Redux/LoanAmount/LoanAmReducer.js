import { PAY_HOMELOAN, TAKE_HOMELOAN,PAY_CARLOAN,TAKE_CARLOAN } from './LoanAmActionType'

const LoanAmount={
    homeLoan : 3000000,
    carloan : 250000
}

export const LoanAmReducer = (newLoanAmount=LoanAmount,action)=>{
    switch(action.type){
        case PAY_HOMELOAN : return{
            ...newLoanAmount,
            homeLoan : newLoanAmount.homeLoan - action.quantity
        }
        case TAKE_HOMELOAN : return{
            ...newLoanAmount,
            homeLoan : newLoanAmount.homeLoan + action.quantity
        }
        case PAY_CARLOAN : return{
            ...newLoanAmount,
            carLoan : newLoanAmount.carloan - action.quantity
        }
        case TAKE_CARLOAN : return{
            ...newLoanAmount,
            carLoan : newLoanAmount.carloan + action.quantity
        }
        default : return{
            ...newLoanAmount
        }
    }
}