import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUserDetail } from '../redux/ActionCreators'
import { Loading } from './LoadingComponent'

const UserCard = (props) => {
    
    useEffect(() => {
        props.LoadUserDetail(props.username)
    }, [])

    if(props.isLoading){
        return (
            <Loading/>
        )
    }
    else if(props.errMess){
        return (
        <h4>{props.errMess}</h4>
        )
    }
    else{
        return (
            // <div className="col-12 col-md-5 m-1">
            <div className="col-3">
                <div className="card">
                    <img className="card-img-top" src={props.userDetail && props.userDetail.avatar_url} alt={props.userDetail && props.userDetail.login} />
                    <div className="card-body">
                        <h5 className="card-title">{props.userDetail && props.userDetail.name}</h5>
                        <p className="card-text">{props.userDetail && props.userDetail.login}</p>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        userDetail: state.reducerCreator.userDetail,
        isLoading: state.reducerCreator.isLoading,
        errMess: state.reducerCreator.errMessCard
    }
}
const mapActionToProps = {
    LoadUserDetail: fetchUserDetail,
}
export default connect(mapStateToProps, mapActionToProps)(UserCard)