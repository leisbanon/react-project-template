## catalog file describe 
```
|—— config  #webpack 等配置
|—— pubcli  #HTML静态入口
|—— scripts #文件编译入口配置
|—— scr 
    |—— api         #定义API接口请求
    |—— components  #React 组件定义模块
    |—— image       #项目图片资源
    |—— router      #React 路由定义模块
    |—— store       #React 状态管理模块，Redux
    |—— style       #项目样式定义模块
    |—— util        #工具类
    |—— view        #应用视图展示
    |—— App.jsx
    |—— http.js     #Axio 请求扩展配置
    |—— index.js    #开始入口
|—— .babelrc
|—— package.json
...

```



## project tech stack application
Application | Version |
------------|---------|
| `react` | ^16.4.2 |
| `react-router-dom` | ^4.3.1 |
| `redux/react-redux` | ^4.0.0/^5.0.7 |
| `antd-mobile` | ^2.2.5 |
| `less` | ^3.8.1 |
| `axios` | ^0.18.0 |
| `webpack` | 3.8.1 |


## 安装与开发
    npm install

## 启动应用
    npm run start


## 应用打包
    npm run build

