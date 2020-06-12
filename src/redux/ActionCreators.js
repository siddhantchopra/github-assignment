import axios from 'axios'
import { routingConstants } from '../constants/routingContants'

export const fetchUsers = (username) => dispatch => {
    dispatch(userLoading(true))
    axios.get(routingConstants.baseUrl + 'search/users?q=' + username).then((res) => {
        dispatch(getUserList(res.data.items))
    })
        .catch((err) => {
            dispatch(errLoadingSearch(err.message))
        })
}

export const fetchUserDetail = (username) => dispatch => {
    dispatch(userLoading(true))
    axios.get(routingConstants.baseUrl + 'users/' + username).then((res) => {
        dispatch(getUserDetails(res.data))
    })
        .catch((err) => {
            dispatch(errLoadingCard(err.message))
        })
}

export const fetchRepoList = (username) => dispatch => {
    dispatch(userLoading(true))
    axios.get(routingConstants.baseUrl + 'users/' + username + '/repos').then((res) => {
        dispatch(getRepoList(res.data))
    })
        .catch((err) => {
            dispatch(errLoadingRepo(err.message))
        })
}

export const resetSearch =()=>dispatch =>{
    dispatch(resetResult())
}

const resetResult = () => ({ type: 'RESET_RESULT' })
const errLoadingSearch =(data) =>({type: 'ERROR_LOADING_SEARCH', payload: data})
const errLoadingCard =(data) =>({type: 'ERROR_LOADING_CARD', payload: data})
const errLoadingRepo =(data) =>({type: 'ERROR_LOADING_REPO', payload: data})
const getUserList = (data) => ({ type: 'SEARCH', payload: data })
const userLoading = (data) =>({ type:'USER_LOADING', payload: data})
const getRepoList = (data) => ({ type: 'USER_REPO', payload: data })
const getUserDetails = (data) => ({ type: 'USER_DETAIL', payload: data });

