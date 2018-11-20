//! 这里引入 react 的原因是：ReactDom.render(<App></App>)这里使用了 JSX 语法
import React from 'react'
import ReactDom from 'react-dom'
import {createStore} from 'redux'
import {counter,addGun,removeGun} from './index.redux.js'
import App from './App'

// index.js 文件的作用是
// 1.渲染最大的组件
//! 2.创建组件的状态管理，即创建保险箱.因为要在这里获取保险箱的数据，所以，在这里创建保险箱
/**
* * 配置使用 redux 插件调试的参数：  
* * window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
* *
* *
*/
const store = createStore(counter,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
function render(){
    ReactDom.render(<App
        store={store} addGun={addGun} removeGun={removeGun}
    ></App>,document.getElementById('root'));

}
//! 保险箱里面的数据是？
//! 下面代码的含义是:当 store的数据发生变化时，重新渲染组件App 
store.subscribe(render);

// store.subscribe(function(){
//     ReactDom.render(<App
//         store={store} addGun={addGun} removeGun={removeGun}
//     ></App>,document.getElementById('root'));

// });
/**
* ! 因为subscrib监听需要store的数据发生变化，所以，为了第一次的数据变化
* ! 就将ReactDom.render(<App……getElementById('root'));封装成一个函数，
* ! 然后，在下面调用一次，让数据发生变化
*/

render();