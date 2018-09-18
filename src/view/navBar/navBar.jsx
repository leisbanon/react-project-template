import React from 'react'
import { hot } from 'react-hot-loader';
import { withRouter } from 'react-router-dom'
import { NavBars } from '@/components'



class Views extends React.Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (
            <div>
                <NavBars title='标题'/>
            </div>
        );
    }
}
 
export default hot(module)(withRouter(Views));