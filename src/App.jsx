import React from 'react';
import {TransitionGroup,CSSTransition} from 'react-transition-group'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import { rootRouters,routers } from '@/router/router'

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <Router>
        <div id='app'>
          {
            rootRouters.map((route,index) => {
              return(
                <Route 
                key={index}
                exact={route.exact}
                path={route.path}
                component={route.component}/>
              )
            })
          }
        </div>
      </Router>
    );
  }
}

export default App;