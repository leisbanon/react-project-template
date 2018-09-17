import React from 'react';
import './home.less'
import { 
} from 'antd-mobile';

class Home extends React.Component {
    constructor(props) {
        super(props);
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
                        <li>
                            <img src={require('@/image/home-1.png')} alt=""/>导航栏
                        </li>
                        <li>
                            <img src={require('@/image/home-2.png')} alt=""/>按钮
                        </li>
                        <li>
                            <img src={require('@/image/home-3.png')} alt=""/>文本输入
                        </li>
                    </ul><br/>

                    <ul>
                        <li>
                            <img src={require('@/image/home-4.png')} alt=""/>接口请求
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
 
export default Home;