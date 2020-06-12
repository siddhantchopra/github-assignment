import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {routingConstants} from '../constants/routingContants'
import SearchComponent from '../components/SearchComponent'
import UserDetailComponent from '../components/UserDetailComponent'

const MainComponent=(props)=>{

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={routingConstants.ROOT} component={()=> <SearchComponent/>}/>
                <Route path={`${routingConstants.USER}/:username`} render={(props)=><UserDetailComponent {...props}/> }/>

            </Switch>
        </BrowserRouter>
    )
}

export default MainComponent