// 手动链接redux和组件的方式
//! 保险箱的数据(state)是在视图层上被修改的，所以，需要在这里进行对state的操作
/**
* ! 以前的写法是：
* ! import React from "react";
* ! class App extends React.Component{}
* ! 可以看出：Component 是 react 对象的一个属性。
* ! 所以，根据 ES6 的语法(解构赋值){Component:Component}简写为{ Component }
* ! 而 React 是默认导出(export default {})的，所以，不用加花括号
*/
import React, { Component } from 'react';


class App extends Component {
  render() {

    const store = this.props.store;
    const num = store.getState();
    const addGun = this.props.addGun;
    const addGunSync = this.props.addGunSync;
    const removeGun = this.props.removeGun;

    return (
      <div>
        <h1>现在有机关枪{num}把</h1>
        <button onClick={()=>{store.dispatch(addGunSync())}}>加机关枪</button>
        {/* <button onClick={()=>{store.dispatch(addGun())}}>加机关枪</button> */}
        <button onClick={()=>{store.dispatch(removeGun())}}>减机关枪</button>
      </div>
    );
  }
}

export default App;
