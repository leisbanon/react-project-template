import React from 'react'
import { hot } from 'react-hot-loader';
import {
    withRouter
} from 'react-router-dom'
import {
    NavBar,
    Icon,
} from 'antd-mobile'


class NavBars extends React.Component {
    constructor(props) {
        super(props);
        // 标题
        this.title = this.props.title;
        // 模式
        this.mode = this.props.mode;
        // 导航左边内容
        this.leftContent = this.props.leftContent;
        // 导航左边点击回调
        this.onLeftClick = this.props.onLeftClick;
    }
    render() { 
        return (
            <div>
                <NavBar
                mode={this.mode || 'dark'}
                leftContent={this.leftContent || <Icon type='left' size='md'/>}
                onLeftClick={() => this.onLeftClick || this.props.history.goBack()}
                >{this.title}
                </NavBar>
            </div>
        );
    }
}
 
export default withRouter(NavBars);