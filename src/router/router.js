import React from 'react'
import {Redirect} from 'react-router-dom'
import Loadable from 'react-loadable'

const baseUrl = '/react-project';

/**
 * 组件异步加载装置 => react-loadables
 * @param {String} filename 
 */
const loadables = (filename) => Loadable({
    loader:() => import(`@/view/${filename}`),
    loading:() => <div></div>
});


/**
 * 根路由集合
 */
const rootRouters = [
    {
        path:'/',
        exact:true,
        component:() => <Redirect to={baseUrl}/>
    },
    {
        // 首页
        path:`${baseUrl}`,
        exact:true,
        component:loadables('main')
    },
    {
        path:`${baseUrl}/navBar`,
        component:loadables('navBar/navBar'),
    },
    {
        path:`${baseUrl}/button`,
        component:loadables('button/button'),
    },
    {
        path:`${baseUrl}/input`,
        component:loadables('input/input'),
    },
    {
        path:`${baseUrl}/network`,
        component:loadables('network/network'),
    },
    {
        // 404 匹配
        path:'*',
        component:loadables('404')
    }
];

/**
 *  嵌套路由集合
 */
const routers = [
];


export {
    rootRouters,
    routers,
}