import React from 'react';
import { withRouter } from 'react-router-dom'
import {
    Grid,
} from 'antd-mobile'
import './home.less'
import qs from 'qs'

const Content = withRouter(({history,match,datalist}) => {
    let toPage = ({id}) => {
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
                <Grid className='home-grid' onClick={toPage} data={datalist} columnNum={3} hasLine={false} activeStyle={false}/>
            </div>
        </div>
    )
})

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datalist:[],
        }
    }
    componentDidMount() {
        let array = [
            {icon:require('@/image/home-1.png'),text:'导航栏',id:'0'},
            {icon:require('@/image/home-2.png'),text:'按钮',id:'1'},
            {icon:require('@/image/home-3.png'),text:'文本输入',id:'2'},
            {icon:require('@/image/home-4.png'),text:'接口请求',id:'3'},
        ];

        this.setState({
            datalist:[...array]
        });
    }
    render() { 
        return(
            <div>
                <Content datalist={this.state.datalist}/>
            </div>
        )
    }
}
 
export default withRouter(Home);