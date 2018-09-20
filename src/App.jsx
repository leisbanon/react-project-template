import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import { rootRouters } from '@/router/router'

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <Router>
        <div id='app'>
          <Switch>
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
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;