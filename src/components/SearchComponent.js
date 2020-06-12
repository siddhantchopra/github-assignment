import React, { useEffect, useState } from 'react'
import { fetchUsers, resetSearch } from '../redux/ActionCreators'
import { connect } from 'react-redux'
import { DebounceInput } from 'react-debounce-input'

import UserList from './UserList'

const SearchComponent = (props) => {
    let [getUser, setUser] = useState('')

    useEffect(() => {
        if(getUser.length > 0){
        props.LoadUserList(getUser)
        }
        else{
            props.resetSearch()
        }
    }, [getUser])

    useEffect(() => {
        props.resetSearch()
    }, [])
    const handleTextChange = (e) => {
        let name = e.target.value.trim()
        setUser(name)
    }
    return (<>
            <div className="row">
                <div className="col-6">
                    <div className="form-group has-search">
                        <span className="fa fa-search form-control-feedback"></span>
                        <DebounceInput
                            debounceTimeout={200}
                            className="form-control"
                            placeholder="Find a member"
                            onChange={handleTextChange} />
                    </div>
                </div>
            </div>
            <div className="row">
            <UserList userList={props.userList && props.userList} isLoading={props.isLoading && props.isLoading}
            errMess={props.errMessSearch && props.errMessSearch}
            />
            </div>
            </>
    )
}

const mapStateToProps = state => {
    return {
        userList: state.reducerCreator.userList,
        isLoading: state.reducerCreator.isLoading,
        errMessSearch: state.reducerCreator.errMessSearch
    }
}
const mapActionToProps = {
    LoadUserList: fetchUsers,
    resetSearch: resetSearch
}
export default connect(mapStateToProps, mapActionToProps)(SearchComponent)