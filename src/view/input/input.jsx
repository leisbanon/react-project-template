import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { NavBars } from '@/components'
import { List,InputItem } from 'antd-mobile';
import {
    Button
} from 'antd-mobile'

class Inputs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form:{
                username:'',
                userphone:''
            },
        }
    }
    updateForm(value) {
        this.setState({
            form:Object.assign(this.state.form,value)
        });
    }
    render() { 
        return(
            <div id='page'>
                <NavBars title='Antd Input'/><br/>
                <List className="my-list">
                    <InputItem
                        onChange={(v) => this.updateForm({
                            'username':v
                        })}
                        clear
                        placeholder="请输入用户名"
                    >标题</InputItem>
                    <InputItem
                        onChange={(v) => this.updateForm({
                            'userphone':v
                        })}
                        type='phone'
                        clear
                        placeholder="手机号码"
                    >手机号码</InputItem>
                </List>

                <div>
                    <ul>
                        <li>用户名：{this.state.form.username}</li>
                        <li>密码：{this.state.form.userphone}</li>
                    </ul>
                </div>
            </div>
        )
    }
}

// const CreateFormElement = createForm()(Inputs);
export default hot(module)(Inputs);