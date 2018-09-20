import React, { Component } from 'react';
import { NavBars} from '@/components'
import { Button } from 'antd-mobile'
import { hot } from 'react-hot-loader';

class Buttons extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return(
            <div id='page'>
                <NavBars title='Antd Button'/>
                <p>
                    <Button type='primary' size='small' inline>主要按钮</Button>
                </p>

                <p>
                    <Button type='ghost'>Button</Button>
                </p>
            </div>
        )
    }
}
 
export default hot(module)(Buttons);