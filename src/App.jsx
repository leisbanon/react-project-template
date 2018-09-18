import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from 'react-router-dom'
import {TransitionGroup,CSSTransition} from 'react-transition-group'

import { rootRouters } from '@/router/router'

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return(
      <div className='App'>
        <Router>
          <TransitionGroup>
            <CSSTransition key='keudd' classNames='fade' timeout={300}>
              <Switch>
                {
                  rootRouters.map((route,index) => {
                    return(
                      <Route 
                      key={index}
                      path={route.path}
                      exact={route.exact}
                      component={route.component}/>
                    )
                  })
                }
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </Router>
      </div>
    );
  }
}

export default App;