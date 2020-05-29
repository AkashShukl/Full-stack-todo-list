import React from 'react';
import './styles.css';
import Cards from '../Cards';

class TaskContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    };
    
    // transformDate = (dates) => {
    //     console.log(dates);
    //    let date = dates.split(' ');
    //    let nt =date[4].split(':')
    //    let nd = date[0] + date[1]+" "+date[2]+ " " + nt[0] +':'+nt[1];
    //    return nd;
    // }
    helperfunction(){
        return(
            <div>
                { 
                    this.props.entries.map( (i) => (
                        <Cards 
                        key = {i.id}
                        id= {i.id}
                        onDelete = {() => { this.props.cardDelete(i.id) } }
                        heading = {i.task_header}
                        description = {i.task_description}
                        taskType = {i.task_type}
                        taskStatus = {i.task_status}
                        taskDueDate = {i.task_due_date}
                        />
                    ))
                }
            </div>
        );    
    };
    
    render()
    {
        return(
            <div>
            {this.helperfunction()}
            </div>
        );
    }
}

export default TaskContainer;