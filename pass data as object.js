import React from "react";
import ReactDOM from "react-dom"
 
class customer extends React.Component{
    render(){
        return <h2>I am from {this.props.customerDetails.country}!</h2>
    }
}
class Details extends React.Component {
    render(){
       const customerinfo = {city:"mumbai", country:"india"};
       return(
        <div>
            <h1>hello</h1>
            <customer customerDetails={customerinfo}/>
        </div>
       );
    }
}
ReactDOM.render(<Details/>, document.getElementById("root"));