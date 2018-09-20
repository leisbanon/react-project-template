import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import {
    Button,
} from 'antd-mobile'

import {
    NavBars
} from '@/components'

import {
    getRequest
} from '@/api/api'


class Views extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading:false,
            network_content:'',
        }
    }
    onRequest() {
        this.setState({
            isLoading:true,
        });
        let params = {city:'长沙'}
        getRequest(params).then(v => {
            this.setState({
                isLoading:false,
                network_content:v,

                isShow:false,
            });
        }).catch(e => {
            console.log(e);
        });
    }
    render() { 
        return(
            <div id='page'>
                <NavBars title='Axios Request'/>
                <p style={{'marginLeft':'30px'}}>
                    <Button 
                        loading={this.state.isLoading} 
                        onClick={this.onRequest.bind(this)} 
                        type='primary' 
                        inline 
                        size='small'
                        >网络请求
                    </Button>
                </p>

                <p style={{
                    height: '300px',
                    overflow: 'auto',
                    wordBreak: 'break-all',
                    lineHeight: '25px',
                }}>{JSON.stringify(this.state.network_content)}</p>
            </div>
        )
    }
}
 
export default hot(module)(Views);