import React from 'react'
import ReactDom from 'react-dom'

class Calculator extends React.Component{
    constructor(){
        super();
        this.state = {temperature:""}
    }
    
}

ReactDom.render(<Calculator/>,document.getElementById('root'));