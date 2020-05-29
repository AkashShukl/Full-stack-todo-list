import * as React from 'react';
import './styles.css';
import "react-datepicker/dist/react-datepicker.css";
import ToggleButton from 'react-toggle-button';
import cross from '../../assets/cross.png';
import DateTimeComp from '../DateTimeComp';
class NewTask extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            id : Math.floor( Math.random() * 1000000),
            task_header: " ",
            task_description: " ",
            task_priority: false,
            task_type: "Casual",
            task_due_date: new Date(),
            task_points : 10,
            task_status : "Scheduled",
            task_is_archived: false
        };
    }

    onTaskTypeChange = (event) => {
        this.setState({
            task_type : event.target.value
        });
    }

    onDescriptionChange = (event) => {
        this.setState({
            task_description : event.target.value
        });
    };
    
    onTitleChange = (event) => {
        this.setState({
            task_header : event.target.value
        });
    };

    handleDateChange = date => {
        this.setState({
            task_due_date : date
        });
    };

    handlePriorityChange = (value) => {
        this.setState({
            task_priority : !this.state.task_priority
        });
    };
   
    submitHandler = event => {
        event.preventDefault();
        const entry = this.state;
        this.props.onAdd(entry);
    };


    render(){
        return(
            <div className="new-task-cont">
                
                <section id="new-task-header">

                    <label id="new-task-heading"> Add Task</label>

                    <button id= "cross-btn" onClick={this.props.onClose} >
                        <img src={cross} id="cross-btn-icon" alt="close" />
                    </button>
                
                </section>
               
                
                <form autocomplete="off" id="input-cont">
                    <section id="new-task-input">
                        <input  required autoFocus id = "title-input"type="text" placeholder=" Title" onChange = {this.onTitleChange}></input>
                        <hr/>
                        <textarea id="task-description" onChange = {this.onDescriptionChange} placeholder="Task Description or notes and select due date "></textarea>
                       
                        <section id = "extra-task-features">
                            <ToggleButton 
                                inactiveLabel={'OFF'}
                                activeLabel={'Prior'}
                                value={this.state.task_priority } 
                                onToggle = { this.handlePriorityChange }
                                colors={{
                                    activeThumb: {
                                        base: 'rgb(51,102,0)',
                                    },
                                    inactiveThumb: {
                                        base: 'rgb(62,130,247)',
                                    },
                                    active: {
                                        base: 'rgb(100,150,100)',
                                        hover: 'rgb(177, 191, 215)',
                                    },
                                    inactive: {
                                        base: 'rgb(65,66,68)',
                                        hover: 'rgb(95,96,98)',
                                    }
                                }}
                            />
                            <lable id = "date-time-cont"> <DateTimeComp /> </lable>
                           
                           </section>
                        </section>
                    <aside id = "aside-cont">
                        <select id = "task-types" defaultValue= "Personal"  name = "task-types" onChange = {this.onTaskTypeChange}>
                            <option id = "task-type-op" value="Official"> Official </option>
                            <option id = "task-type-op" value="Personal"> Personal</option>
                            <option id = "task-type-op" value="casual"> Personal</option>
                        </select>
                    </aside>
                </form>
    
                <button  id ="submit" onClick={this.submitHandler}>ADD Task</button>
                
            </div>

        );
    }
}


export default NewTask;