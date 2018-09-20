import React from 'react';
import { hot } from 'react-hot-loader'
import './main.less'
import { 
    TabBar,
} from 'antd-mobile';

import Home from './home/home'
import Message from './message/message'
import My from './my/my'

class Tab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home',
            hidden: false,
            fullScreen: false,
        };
    }
    render() { 
        return (
            <div id='page'>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white">
                    {/* 首页 */}
                    <TabBar.Item
                        key="home"
                        icon={
                            <i className='iconfont icon-zhuye1'></i>
                        }
                        selectedIcon={
                            <i className='iconfont icon-zhuye2 select-icon'></i>
                        }
                        selected={this.state.selectedTab === 'home'}
                        onPress={() => {
                        this.setState({
                            selectedTab: 'home',
                        });
                        }}
                        >
                        <Home />
                    </TabBar.Item>

                    {/* 消息 */}
                    <TabBar.Item
                        key="message"
                        icon={
                            <i className='iconfont icon-xiaoxi1'></i>
                        }
                        selectedIcon={
                            <i className='iconfont icon-xiaoxi select-icon'></i>
                        }
                        selected={this.state.selectedTab === 'message'}
                        onPress={() => {
                        this.setState({
                            selectedTab: 'message',
                        });
                        }}
                        >
                        
                        <Message />
                    </TabBar.Item>

                    {/* 我的 */}
                    <TabBar.Item
                        key="my"
                        icon={
                            <i className='iconfont icon-wode'></i>
                        }
                        selectedIcon={
                            <i className='iconfont icon-04f select-icon'></i>
                        }
                        selected={this.state.selectedTab === 'my'}
                        onPress={() => {
                        this.setState({
                            selectedTab: 'my',
                        });
                        }}
                        >
                        <My />
                    </TabBar.Item>
                </TabBar>
            </div>
        );
    }
}
 
export default hot(module)(Tab);