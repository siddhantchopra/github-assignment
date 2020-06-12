import React, { useEffect } from 'react'
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import moment from 'moment'
import { fetchRepoList } from '../redux/ActionCreators'
import { connect } from 'react-redux'
import { Loading } from './LoadingComponent';

const RepoList = (props) => {

    useEffect(() => {
        props.LoadUserRepo(props.username)
    }, [])
    if (props.isLoading) {
        return (
            <Loading />
        )
    }
    else if (props.errMess) {
        return (
            <h4>{props.errMess}</h4>
        )
    } else {
        return (
            <div className="col-12 col-md-5 m-1">
                <ListGroup className="repo">
                    {
                        props.userRepoList && props.userRepoList.length > 0 ? props.userRepoList.map((data, index) => {
                            return <ListGroupItem key={index}>
                                <ListGroupItemHeading> {data.name} </ListGroupItemHeading>
                                <ListGroupItemText> {data.description} </ListGroupItemText>
                                <ListGroupItemText>
                                    {data.forks_count > 0 && <i className="fa fa-code-fork">{data.forks_count}</i>}
                                    {data.stargazers_count > 0 && <i className="fa fa-star">{data.stargazers_count}</i>}
                                    {data.language !== null && <i className="fa fa-circle">{data.language}</i>}
                                    {data.license && data.license.name !=='Other' && <span className="fa">{data.license.name}</span> }
                                                Updated {moment(data.updated_at).fromNow()}
                                                                </ListGroupItemText>
                                                            </ListGroupItem>
                                                        }) : <h4>No Repository Available</h4>
                                                    }

                </ListGroup>
            </div>
        )

    }
}

const mapStateToProps = state => {
    return {
        userRepoList: state.reducerCreator.userRepoList,
        isLoading: state.reducerCreator.isLoading,
        errMess: state.reducerCreator.errMessRepo
    }
}
const mapActionToProps = {
    LoadUserRepo: fetchRepoList
}
export default connect(mapStateToProps, mapActionToProps)(RepoList)
