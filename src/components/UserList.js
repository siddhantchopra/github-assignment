import React from 'react'
import { Media } from 'reactstrap';
import { Link } from 'react-router-dom'
import {routingConstants} from '../constants/routingContants'
import { Loading } from './LoadingComponent';

const UserList=(props)=>{
    if(props.isLoading){
        return(
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
            <div className="col-12">
                <ul className="list-group list-group-flush">
            {
                props.userList && props.userList.map((data, index) => {
                    return <Link key={index} to={routingConstants.USER+"/"+data.login}>
                        <li className="list-group-item"><Media>
                            <Media left className="mr-5 mt-2">
                                <Media object src={data.avatar_url} alt={data.login} width="32" height="32" />
                            </Media>
                            <Media heading>
                                {data.login}
                            </Media>
                        </Media> </li>
                    </Link>
                })
            }
            </ul>
        </div>
        )
    }
}

export default UserList