import React from 'react'
import RepoList from './RepoList';
import UserCard from './UserCard';
import { Link } from 'react-router-dom';
import { routingConstants } from '../constants/routingContants';

const UserDetailComponent = (props) => {

    return (
        <div className="container">
            <Link to={routingConstants.ROOT} className="fa fa-arrow-left" style={{marginBottom:'20px'}}>Back</Link>
        
            <div className="row">        
                <UserCard username={props.match.params.username}/>
               <RepoList username={props.match.params.username}/>
            </div>
            </div>
    )
}
export default UserDetailComponent