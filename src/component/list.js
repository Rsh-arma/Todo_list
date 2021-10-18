import React, { Component } from 'react';
import './list.css';



class TodoList extends React.Component {
    

    
    
    render() { 

        return (
            <>
            <div className="list_taskheading">
              <div className="list_taskname" > # Task Name </div>
               <div className="list_taskstatus"> Status </div>
               <div className="list_taskaction"> actions </div>
            </div>
            <div>
            {this.props.data.map( tag => {
                return(
                    <div key={tag.id} className='list_taskcontent'>
                       <div className="list_taskname" >
                       {tag.id} {tag.name}
                       </div >
                       <div className="list_taskstatus">
                       {tag.status}
                       </div>
                       <div className="list_taskaction">
                       { tag.status === 'undone' &&  <button onClick={ () => this.props.edit(tag.name, tag.date)} className="btn_secondary"> Edit </button> }
                           <button onClick={()=>this.props.done(tag.id) } className="btn_secondary"> Done </button>
                       </div>
                    </div>
                )
            } )}
            </div>
            
            </>
         );
    }
}
 
export default TodoList;
