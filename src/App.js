import React, { Component } from 'react';
import './App.css';
/**
* ! 以前的写法是：
* ! import React from "react";
* ! class App extends React.Component{}
* ! 可以看出：Component 是 react 对象的一个属性。
* ! 所以，根据 ES6 的语法(解构赋值){Component:Component}简写为{ Component }
* ! 而 React 是默认导出(export default {})的，所以，不用加花括号
*/
class App extends Component {
  render() {
    return (
      <div>
        <h1>现在有机关枪10把</h1>
        <button>加机关枪</button>
        <button>减机关枪</button>
      </div>
    );
  }
}

export default App;
