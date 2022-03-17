import React, { Component } from 'react'
import "./TodoApp.css"
export default class TodoApp extends Component {
  state={
    input:"",
    items:[],
  };
// to add task
  handleChange=(e)=>{
    this.setState(
      {input:e.target.value}
    );
  };

  //on submit
 storeItems=(e)=>{
   e.preventDefault();
   const{input}=this.state;
  this.setState({
    items:[...this.state.items,input],
    input:''
  });
 }

 //delete task
deleteItem=(key)=>{
  this.setState({
    items:this.state.items.filter((data,index)=>
      index !== key
    )
  });
}
  render() {
   const {input,items}=this.state ;
   console.log(items);
    return (
      <div className="container">
        
        <form className='input-area' onSubmit={this.storeItems}>
        <h1>TODO</h1>
          <input type="text" 
          value={input}
          onChange={this.handleChange} 
          placeholder="ENTER YOUR TASK"/> 
        </form>
       <ul>
          {items.map((data,index)=>(
            <li key={index}>{data}<i className="fa-solid fa-trash-can" onClick={()=>this.deleteItem(index)}></i></li>
          ))}
        </ul>
      </div>
    )
  }
  
}
 