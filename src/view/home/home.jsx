import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
    withRouter,
} from 'react-router-dom'
import './home.less'
import qs from 'qs'
import { routers } from '@/router/router'

const Content = withRouter(({history,match}) => {
    let toPage = (id) => {
        if('0' == id) {
            let params = {
                userid:'431103',
                username:'xiaoming',
            }
            history.push({
                pathname:match.path + '/navBar',
                search:qs.stringify(params),
            });
        }
        else if('1' == id) {
            history.push({
                pathname:match.path + '/button',
            });
        }
        else if('2' == id) {
            history.push(`${match.path}/input`);
        }
        else if('3' == id) {
            history.push({
                pathname:match.path + '/network',
            });
        }
    }
    return(
        <div id='home'>
            <div className='users'>
            <h1>张三李四王麻子</h1>
            </div>
            <img className='title-img' src={require('@/image/title-img.jpg')} style={{'borderRadius':'50% / 7%'}}/>
            <div className='home-list'>
                <ul>
                    <li onClick={toPage.bind(this,'0')}>
                        <div>
                            <img src={require('@/image/home-1.png')} alt=""/>导航栏
                        </div>
                    </li>
                    <li onClick={toPage.bind(this,'1')}>
                        <img src={require('@/image/home-2.png')} alt=""/>按钮
                    </li>
                    <li onClick={toPage.bind(this,'2')}>
                        <img src={require('@/image/home-3.png')} alt=""/>文本输入
                    </li>
                </ul><br/>

                <ul>
                    <li onClick={toPage.bind(this,'3')}>
                        <img src={require('@/image/home-4.png')} alt=""/>接口请求
                    </li>
                    <li>
                        <img src={require('@/image/home-5.png')} alt=""/>页面切换过渡
                    </li>
                </ul>
            </div>
        </div>
    )
})

class Home extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() { 
        return(
            <div>
                <Content />
                    <Switch>
                        {
                            routers.map((route,index) => {
                                return(
                                <Route 
                                key={index}
                                path={`${this.props.match.path}` + route.path}
                                component={route.component}/>
                                )
                            })
                        }
                    </Switch>
            </div>
        )
    }
}
 
export default withRouter(Home);