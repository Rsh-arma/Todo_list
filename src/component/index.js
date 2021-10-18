import React  from 'react';
import { connect } from 'react-redux';

import TodoList from './list';
import Form from './form';


import { changeStatus } from '../actions/changeStatus';
import { clearTask } from '../actions/clearTask';
import { addTask } from '../actions/addTask';

import './index.css';

class Dashboard extends React.Component {

 state = {
   displaylist : false,
   doneTask : false,
   displaydashboard : true,
   displayform : false ,
   date : '',
   name: ''
 }

    componentDidMount = () =>{
      let len =  this.props.state.length;
      if( len === 0 ){
        this.setState({displaylist:false})
      }
      else{        
        this.setState({displaylist: true })
      }
    }

    displayForm = () => {
        this.setState({displayform : true , displaydashboard:false})
     }

     displayDashboard = () =>{
      this.setState({ displaydashboard : true , displayform:false })
     }

     addTask = (data) => {
      this.props.addTask(data)
       this.setState({ displaydashboard : true , displayform:false, displaylist : true })
     }

     changeStatus = (id) => {
       this.props.changeStatus(id)
       this.setState({doneTask : true})
     }

     clearTask = () => {
       this.props.clearTask()
       this.setState({doneTask : false})
     }

     editTask = (name,date) => {
       
        this.setState({ name , date })
        this.setState({displayform : true , displaydashboard:false})
     }

    render() { 

    
      return(
        <>
         {this.state.displaydashboard && <div className='dashboard'>
           <div className="dashboard_header" >
           <button className='btn_primary' onClick={this.displayForm}>  Add Task </button>
           { this.state.doneTask &&  <div onClick = { this.clearTask } className='dashboard_clear'> 
             Clear all done task 
           </div> }

           </div>
          

           <div className='dashboard_content'>
           { !this.state.displaylist &&  <div style={{fontStyle : 'italic'}}>
               No tasks added
           </div>  }
              { this.state.displaylist && <TodoList
               data = {this.props.state}
               done = { this.changeStatus }
               edit = {this.editTask} /> } 
           </div>
         </div>  }
        
         {
           this.state.displayform && <Form 
           addTask = {this.addTask} 
           cancel = {this.displayDashboard} 
           name = {this.state.name} 
            date = {this.state.date} />         }

        </>
      )
            
    }
}


const mapDispatchToProps = (dispatch) =>{
   return{
      addTask: (data)=> dispatch(addTask(data)),
     changeStatus : data =>  dispatch( changeStatus(data)),
     clearTask : () => dispatch(clearTask())
   }
  }
  
  const mapStateToProps = (state) =>{
    return{
      state
    }
  }
 
export default connect( mapStateToProps, mapDispatchToProps )(Dashboard);