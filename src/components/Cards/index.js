import * as React from 'react';
import './styles.css'

class Cards extends React.Component{

    // constructor(props) {
    //     super(props);
    // };


    onCloseHandle = (event,i) =>{
        this.props.onDelete(i);
    }

    render(){
        return(
            <div className="card-parent">
                <div>
                <label id="card-header"><h2 id="card-heading-text"> {this.props.heading} </h2> 
                <button id = "complete-button" onClick = {this.onCloseHandle.bind(this,this.props.id)}>X</button> </label>
                </div>
                <div id="text-container">
                <span id="card-body-text"> {this.props.description } </span>
                </div>
                <hr id="chr"/>
                <label id="extras">{this.props.taskType}</label>
                <label id="extras">{this.props.taskStatus}</label>
                <label id="extras">{this.props.taskDueDate.toString()}</label>
            </div>
        );
    }
}

export default Cards;