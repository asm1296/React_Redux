import React from 'react'
// import { useSelector,useDispatch, connect } from 'react-redux'
// import {getDetailsProcess} from '../Redux/AccountHolder/AccountHolActionCreater'

/* function AccountHolderDetails(){

    const processDetails = useSelector(state => state.accountHolders);
    const dispatch = useDispatch();

    let showDetails = ''

showDetails = processDetails.loading ? <h3>Loading....</h3> : processDetails.errorinfo ? <h3>{processDetails.errorinfo}</h3> : processDetails.accHold.map(user=><h3 id={user.id}>{user.username}</h3>)


    return(
        <div>
            <h3>Account Holder Details</h3>
            <h3>{showDetails}</h3>
            <button onClick={()=>(dispatch(getDetailsProcess()))}>Get Details</button>
        </div>
    )
}

export default AccountHolderDetails; */

/* function AccountHolderDetails({processDetails, fetchAccountHolders}){
    let showDetails = ''

showDetails = processDetails.loading ? <h3>Loading....</h3> : processDetails.errorinfo ? <h3>{processDetails.errorinfo}</h3> : processDetails.accHold.map(user=><h3 id={user.id}>{user.username}</h3>)


    return(
        <div>
            <h3>Account Holder Details</h3>
            <h3>{showDetails}</h3>
            <button onClick={()=>{fetchAccountHolders()}}>Get Details</button>
        </div>
    )
}

const mapStateToProps = state =>{
    return {
        processDetails:state.accountHolders
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        fetchAccountHolders: () =>dispatch(getDetailsProcess())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AccountHolderDetails); */

import { useAllUsersQuery } from '../Redux/AccountHolder/AccountHolReducer';

function AccountHolderDetails(){

    const { data, isLoading, isError, error} = useAllUsersQuery();

    let showDetails = ''

showDetails = isLoading ? <h3>Loading....</h3> : isError ? <h3>{error}</h3> : data.map(user=><h3 id={user.id}>{user.username}</h3>)


    return(
        <div>
            <h3>Account Holder Details</h3>
            <h3>{showDetails}</h3>
            {/* <button onClick={()=>(dispatch(getDetailsProcess()))}>Get Details</button> */}
        </div>
    )
}

export default AccountHolderDetails;