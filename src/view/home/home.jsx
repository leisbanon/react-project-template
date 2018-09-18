import React from 'react';
import {withRouter} from 'react-router-dom' 
import './home.less'
import qs from 'qs'

class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    toPage(id) {
        if('0' == id) {
            let params = {
                userid:'431103',
                username:'xiaoming',
            }
            this.props.history.push({
                pathname:this.props.match.path + '/navBar',
                search:qs.stringify(params),
            });
        }
        else if('1' == id) {
            this.props.history.push({
                pathname:this.props.match.path + '/button',
            });
        }
        else if('2' == id) {
            this.props.history.push({
                pathname:this.props.match.path + '/input',
            });
        }
        else if('3' == id) {
            this.props.history.push({
                pathname:this.props.match.path + '/network',
            });
        }
    }
    render() { 
        return(
            <div id='home'>
                <div className='users'>
                    <h1>张三李四王麻子</h1>
                </div>
                <img className='title-img' src={require('@/image/title-img.jpg')} style={{'borderRadius':'50% / 7%'}}/>
                <div className='home-list'>
                    <ul>
                        <li onClick={this.toPage.bind(this,'0')}>
                            <img src={require('@/image/home-1.png')} alt=""/>导航栏
                        </li>
                        <li onClick={this.toPage.bind(this,'1')}>
                            <img src={require('@/image/home-2.png')} alt=""/>按钮
                        </li>
                        <li onClick={this.toPage.bind(this,'2')}>
                            <img src={require('@/image/home-3.png')} alt=""/>文本输入
                        </li>
                    </ul><br/>

                    <ul>
                        <li onClick={this.toPage.bind(this,'3')}>
                            <img src={require('@/image/home-4.png')} alt=""/>接口请求
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
 
export default withRouter(Home);