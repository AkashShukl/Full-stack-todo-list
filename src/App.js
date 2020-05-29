import React from 'react';
import axios from 'axios';
import './App.css';
import add from './assets/add.png' ;
import Header  from './components/Header';
import NewTask from './components/NewTask';
import TaskContainer from './components/TaskContainer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DateTimeComp from './components/DateTimeComp';
class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      isEntrySheetOpen : false,
      taskEntries: []
    }
  }

  onDeleteCard = id => {
    let obj = { "id" : id }
    axios.put("/archive",obj)
    .then(response => {
        this.setState({
          taskEntries : this.state.taskEntries.filter( i => i.id !== id)
        });

        this.notify();
    })
    .catch( error => {
        console.log(error)
        this.setState({error});
    })
  }

  async componentDidMount(){
    const url = "add-task" ; 
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
            taskEntries : data
    });
  };


  notify = () => toast.info('Success', {
    position: "bottom-center",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });


  openEntrySheet = () => {
    this.setState({isEntrySheetOpen:true});
  };

  closeEntrySheet = () => {
    this.setState({isEntrySheetOpen:false});
  };
  
  onAddEntry= entry => {
    axios.post("/add-task",entry)
    .then(response => {
      if (response.status === 200){
        this.notify();
        this.closeEntrySheet();
        this.setState({
          taskEntries : [ entry, ...this.state.taskEntries ]
        });
      }    
    })
    .catch( error => {
        console.log(error)
    })
  };

  render(){

  return (
    
    <div className="App">
      <ToastContainer
          position="bottom-center"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl
          pauseOnFocusLoss
          draggable
          pauseOnHover
      />
      
     <Header />
     <TaskContainer entries = {this.state.taskEntries} cardDelete = { this.onDeleteCard } />
     
     <button id="add-task-btn" onClick={ () =>{this.openEntrySheet()}}>
        <img src = {add} id="add-task-icon"alt="open"/>
     </button>
     {this.state.isEntrySheetOpen && <NewTask onClose={this.closeEntrySheet} onAdd={this.onAddEntry} />}
    </div>
  );
}
}

export default App;
