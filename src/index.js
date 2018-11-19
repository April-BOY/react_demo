import React from 'react'
import ReactDom from 'react-dom'
import {createStore} from 'redux'
import {counter,addGun,removeGun} from './index.redux.js'
import App from './App'


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
store.subscribe(render);

render();