// 手动链接redux和组件的方式
//! 这里引入 react 的原因是：ReactDom.render(<App></App>)这里使用了 JSX 语法
import React from 'react'
import ReactDom from 'react-dom'
// 创建 store，加载合并中间件
import {createStore,applyMiddleware,compose} from 'redux'
import {Provider} from 'react-redux'
// 处理异步的中间件
import thunk from 'redux-thunk'
import {counter,addGun,removeGun,addGunSync} from './index.redux.js'
import App from './App'


// index.js 文件的作用是
// 1.渲染最大的组件
//! 2.因为每次修改 store 的状态，需要同步到组件中，因此，需要在 index.js 中通过 store
//! 的 subscribe() 方法，监听 store 的变化，重新渲染组件（即 subscribe(render())）
/**
* * 配置使用 redux 插件调试的参数：  
* * window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
* ! compose() 是 redux 中的方法，用于合并多个中间件
* *
*/
const store = createStore(counter,compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))
function render(){
//! 保险箱的数据(state)是在视图层(组件)上被修改的，所以，需要在这里进行对state的操作
    ReactDom.render(<App
        store={store} addGun={addGun} removeGun={removeGun} addGunSync={addGunSync}
    ></App>,document.getElementById('root'));

}
//! 保险箱里面的数据是 state
//! 下面代码的含义是:当 store的数据发生变化时，重新渲染组件App 
store.subscribe(render);

// 这样写结构不好看，因此，将其抽出来写成一个函数render()
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