import React from 'react';
import './list.css'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    withRouter,
  } from 'react-router-dom'

import {routers} from '@/router/router'

const Content = withRouter(({history,location,match}) => {
    console.log(match.url);
    return(
        <div className='list'>
            <p onClick={() => history.push(`${match.path}/reactState`)}>0、组件中状态管理 => state 属性的使用</p>
        </div>
    )
})


class List extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.match.url);
    }
    render() {
        return(
            <div className='app-container'>
                <Content />
                <Switch>
                    {
                        routers.map((route,index) => {
                            return(
                                <Route
                                key={index}
                                exact
                                path={`${this.props.match.url}` + route.path}
                                component={route.component}
                                />
                            )
                        })
                    }
                    
                </Switch>
            </div>
        )
    }
}


export default List;