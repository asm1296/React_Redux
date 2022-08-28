import React from 'react'
import { useSelector,useDispatch} from 'react-redux'
import { deposit_saving } from '../Redux/BankBalance/BankBalActionCreater'
import { pay_homeloan } from '../Redux/LoanAmount/LoanAmActionCreater'
function BankKiosk(){

    const { savAcc,homloan} = useSelector(state =>({
        savAcc : state.balance.savingAccount,
        homloan : state.loan.homeLoan
    }));

    const dispatch = useDispatch();

    return(
        <div>
            <h3>Welcome User !!</h3>
            <h4>Check your details</h4>
            <h4>Saving Account Balance : {savAcc}</h4>
            <button onClick = {()=>{dispatch(deposit_saving())}}>Deposit Money in Saving Account</button>
            <h4>Home Loan Amount : {homloan}</h4>
            <button onClick={()=>{dispatch(pay_homeloan())}}>Pay your Home Loan </button>
        </div>
    )

}

export default BankKiosk;