// 使用装饰器链接redux和组件
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
import {connect} from 'react-redux'
import {addGun,removeGun,addGunSync} from './index.redux'

/**
* * @connect ES6是装饰器的语法
* ! 注意：@connect和组件之间不能有空行，两者中间也不能写其他的内容
* *
*/
@connect(
  (state)=>{
    return{
      num:state
    }
  },{addGun,removeGun,addGunSync}
)
class App extends Component {
  render() {
    return (
      <div>
        <h1>现在有机关枪{this.props.num}把</h1>
        {/* <button onClick={this.props.addGun}>加机关枪</button> */}
        <button onClick={this.props.addGunSync}>加机关枪</button>
        <button onClick={this.props.removeGun}>减机关枪</button>
      </div>
    );
  }
}

export default App;
