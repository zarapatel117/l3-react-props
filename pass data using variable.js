import React from "react";
import ReactDOM from "react-dom";

class customer extends React.Component{
    render(){
        return <h2>I am from {this.props.city}</h2>
    }
}
class Details extends React.Component{
    render(){
        const cityname="Mumbai";
    return(
        <div>
            <h1>hello</h1>
            <customer city={cityname}/>
        </div>
    );
    }
}
ReactDOM.render(<Details/>,document.getElementById('root'));