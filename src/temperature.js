import React from 'react'
import ReactDom from 'react-dom'


function BollingVerdict(props){
    if(props.celsius>=100){
        return <p>水会烧开</p>
    }else{
        return <p>水不会烧开</p>
    }
}


class Calculator extends React.Component{
    constructor(){
        super();
        this.state = {temperature:""};
        this.changeHandle = this.changeHandle.bind(this);
    }
    changeHandle(){
        
    }
    render(){
        const temperature = this.state.temperature;
        return (
            <fieldset>
                <legend>输入一个摄氏温度</legend>
                <input type="text" value={temperature} onChange={this.changeHandle} />
            </fieldset>
        )
    }
}

ReactDom.render(<Calculator/>,document.getElementById('root'));