import React from 'react';
import ReactDOM from 'react-dom';

class customer extends React.Component {
    render (){
        return<h2>hi i am for {this.props.city}!</h2>
    }
}
class details extends React.Component{
    render(){
        return(
            <div>
                <h2>hello</h2>
                <customer city = "mumbai"/>
            </div>
        );
    }

}
ReactDOM.render(<Details/>, document.getElementById('root'));