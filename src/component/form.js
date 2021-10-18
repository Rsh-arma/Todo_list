import React, { Component } from 'react';
import './form.css';

class Form extends React.Component {

    state={
        name: "",
        date : ""
    }

    componentDidMount = () => {
        this.setState({name: this.props.name, date:this.props.date})
    }


    setName = (event) => {
        this.setState({name :event.target.value })
    }


    setDate = (event) => {
        this.setState({date :event.target.value })
    }

    addTask = () => {
        if((this.state.name !== "") && (this.state.date !== "") ){
            this.props.addTask(this.state)
        }
    }

    render() { 


        return <div className="form"> 
           <div className="form_content" >
           <div className="form_entry">
            <label  className = 'form_label' > Task Name </label>
            <input type="text" value={this.state.name} onChange={this.setName} />  
            </div>

            <div className="form_entry">
            <label className = 'form_label'> Date </label>
            <input type="date" value={this.state.date} onChange={this.setDate}/>  
            </div>
           </div>
            <div className="form_button">
            <div className="form_entry">
                <button onClick={this.props.cancel} className='btn_primarycancel' > Cancel </button>
                <button onClick={ this.addTask} className='btn_primary'> Create  </button>
            </div>
            
            </div>
            
             </div> ;
    }
}


export default Form;
