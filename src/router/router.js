import React from 'react'
import {Redirect} from 'react-router-dom'
import Loadable from 'react-loadable'


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
        //根路由匹配
        path:'/',
        exact:true,
        component:() => <Redirect to='/react-example'/>
    },
    {
        // 首页
        path:'/react-example',
        component:Loadable({
            loader:() => import('@/components/list/list'),
            loading:() => ('')
        })
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
    {
        // 组件中状态管理 => state 属性的使用
        path:'/reactState',
        component:loadables('reactState')
    },
];


export {
    rootRouters,
    routers,
}