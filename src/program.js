import React from 'react';
import ReactDom from 'react-dom';



let a = 1;
let arr = [1,2,3,4,5,6,7,534];
// const element = <h1>hello,react{a}</h1>;
// ReactDom.render(element,document.getElementById('root'));




/**
* ! 这里的map()方法是数组的原生方法
* ! map() 方法原本的作用就是：遍历一个数组，然后返回一个新的数组
* ! 所以，这里的使用方式就非常容易理解了：
* ! 先遍历包含数据的数组，然后，生成一个包含 html 标签的新数组
* ! 最后，再将这个数组遍历到 dom 中                         
*/
let arrElement = arr.map((item,index)=>{
    return <li key={index}>{item}</li>;
});
// 遍历数组的数据到 dom 中
const element = <ul>{arrElement}</ul>;
// ReactDom.render(element,document.getElementById('root'));


// JSX(React 语法糖)
//! 这里的 element 只是一个变量，而不是 dom 元素.只是它的值是 dom 元素,这就是 JSX
const element = <h1>hello,react</h1>;


/**
* ￥ 定义组件的两个方式得到的就是 dom 元素，而不仅仅是函数名或者类名
* ￥ 比如，下面的函数名：Ele，类名：Welcome，就是相应的标签名，即 dom元素，也是组件。
* ￥ 然后，就可以在 ReactDom.render() 方法中渲染出来
*/
// 定义组件的方法一：函数
function Ele(props){
    if(Math.random() > 0.5){
        return <h1>大于 0.5{props.name}</h1>;
    }else{
        return <h1>不大于 0.5{props.age}</h1>;
    }
}
// ReactDom.render(<Ele></Ele>,document.getElementById('root'));


// 定义组件的方法二：类定义组件
//! 这里的类是 ES6 中的语法，Component 后的花括号的作用，类似与 function(){}的方法体的作用
class Welcome extends React.Component{
    render(){
        return <h1>hello,welcome{this.props.name}</h1>;
    }
}
// ReactDom.render(<Welcome name="lisi" age="15"></Welcome>,document.getElementById('root'));


// 生命周期，实现一个现实时间的组件
class Clock extends React.Component{
    constructor(){
        // 调用父类的构造函数
        super();
        /**
        * * 不能直接更新 state 中的值，只能通过 setState() 方法更新 state 的值
        */
        this.state = {
            time:new Date().toLocaleTimeString(),
            name:"张三"
        };
    }
    interval(){
        this.setState({
            time:new Date().toLocaleTimeString()
        });
    }
    // componentDidMount 将组件挂载到页面上
    componentDidMount(){
        setInterval(()=>{
            this.interval();
        },1000);
    }
    render(){
        return (
            <div>
                <h1>{this.state.time}</h1>
            </div>
        )

    }
}
/**
* * react 默认的挂载容器是 root
* * 浏览器中的结构是：
* * <div id="root">
* * </div>
*/ 
// ReactDom.render(<Clock/>,document.getElementById('root'));


// form 表单实现双向数据绑定
class Form extends React.Component{
    constructor(){
        super();
        this.state = {
            name:"张三"
        }
        //! 保持this指向不变(即让this指向Clock组件)的方法二：
        // bind()是JavaScript原生的方法
        // this.changeHandle = this.changeHandle.bind(this);
    }
    render(){
        /**
        * ! return 后面跟圆括号的原因：
        * ! 我们同样推荐在 JSX 代码的外面扩上一个圆括号，这样可以防止 分号自动插入 的 bug
        * * https://react.docschina.org/docs/introducing-jsx.html
        * *
        */
        return (
            <form>
    {
        /** 
        * ! (e)=>{this.changeHandle(e)} 使用箭头函数，保持 this 的指向不变(即让this指向Clock组件) 
        * 
        * ! 在constructor()中this.state是一个对象，name 是它的属性，因此，this.state.name就可以获取name的值
        * 
        * ! 在写表单时，一定要写 onChange 事件，否则，浏览器会报一个警告
        */
    }
                <input type="text" value={this.state.name} onChange={(e)=>{this.changeHandle(e)}} />
            </form>
        )
    }
    changeHandle(e){
        // consloe.log(e.target); 输出的是input节点
        this.setState({
            name:e.target.value
        });
    }
}
ReactDom.render(<Form />,document.getElementById('root'));

