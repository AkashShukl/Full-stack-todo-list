import React from 'react';
import './styles.css'


class DateTimeComp extends React.Component {

    constructor(props){
        super(props);
    
        this.state = {
          currDate : new Date().getDate(),
          currMonth : new Date().getMonth() + 1,
          currHour : new Date().getHours(),
          currMinutes : new Date().getMinutes() 
        }
      }

    daysInMonth = (month, year) => { 
        return new Date(year, month, 0).getDate(); 
    } 

    monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    days = () =>{
        var d = new Date();
        var m = d.getMonth()+1;
        var y = d.getFullYear();
        return this.daysInMonth(m,y);
    }
    
    handleMonthsChange = (event) => {
        let monthnumber = 0;
        console.log(event.target.value)
        for(let i=0;i< 12;i++)
        if( this.monthNames[i]=== event.target.value )
            monthnumber = i+1;

        this.setState({
            currMonth : monthnumber
        })
    }

    renderDates = () => {
        let datevar = new Date().getDate();

        var days = [...Array(this.days()).keys()],
        MakeItem  = (X) => {
            if(X+1 === datevar)
                return <option className = "options" key={X} selected>{X+1}</option>;
            else if (X+1 < datevar)
                return <option disabled className = "options" key={X}>{X+1}</option>;
            else
                return <option className = "options" key ={X}>{X+1}</option>;
        }
        return (
                <select className = "date-time-select" id="input-days-list"> {days.map(MakeItem)} </select> 
                );
    }

    renderMonths = () => {
        let monthvar = new Date().getMonth();
        var months = [...Array(12).keys()],
        MakeItem  = (X) => {
            if(X === monthvar )
                return <option className = "options" key={X} selected>{this.monthNames[X+1]}</option>;
            else if (X < monthvar)
                return <option disabled className = "options" key ={X}>{this.monthNames[X+1]}</option>;
            else
                return <option className = "options" key ={X}>{this.monthNames[X+1]}</option>;
        }
        return (
        <select  onChange= {this.handleMonthsChange} className = "date-time-select" id="input-months-list"> {months.map(MakeItem)} </select> 
        );
    }

    renderHours = () => {
        var hours = [...Array(24).keys()],
        MakeItem = (X) => {
            if(X === new Date().getHours())
                return <option className = "options" key={X} selected>{X}</option>;
            else
                return <option className = "options" key ={X}>{X}</option>;
        }
        return (
        <select  className = "date-time-select" id="input-hours-list"> {hours.map(MakeItem)} </select> 
        );
    }

    renderMinutes = () => {
        var minutes = [...Array(60).keys()],
        MakeItem = (X) => {
            if(X === new Date().getMinutes())
                return <option className = "options" key={X} selected>{X+1}</option>;
            else
                return <option className = "options" key ={X}>{X+1}</option>;
        }
        return (
        <select  className = "date-time-select" id="input-minutes-list"> {minutes.map(MakeItem)} </select> 
        );
    }

    render()
    {
        return(
            <div id="date-time-parent">
                <div id = "date-picker">
                    <label>{this.renderDates()} 
                    {this.renderMonths()} </label>
                    <lable id="time-picker">
                    {this.renderHours()}:
                    {this.renderMinutes()}
                    </lable>
                </div>
            </div>
        )
    }
}
export default DateTimeComp;