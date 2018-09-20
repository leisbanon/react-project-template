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
        component:loadables('main')
    },
];

/**
 *  嵌套路由集合
 */
const routers = [
    {
        path:'/navBar',
        component:loadables('navBar/navBar'),
    },
    {
        path:'/button',
        component:loadables('button/button'),
    },
    {
        path:'/input',
        exact:true,
        component:loadables('input/input'),
    },
    {
        path:'/network',
        component:loadables('network/network'),
    },
];


export {
    rootRouters,
    routers,
}