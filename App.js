import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Layout/Header'
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About'
import { v4 as uuidv5 } from 'uuid';



import './App.css';

//class App extends React.Component{}
class App extends Component {

  state = {
    todos: [
      {
        id: uuidv5(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuidv5(),
        title: 'Create a git repo for Bernard',
        completed: false
      },
      {
        id: uuidv5(),
        title: 'Wash the plates',
        completed: false
      },
    ]
  }
  //Toggle Complete
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })});
  }

  //Delete ToDo
  delTodo = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo =>
       todo.id !== id)]})
  }

  //Add ToDo
  addTodo = (title) => {
    const newTodo = {
      id: uuidv5(),
      title,
      completed: false 
    }
    this.setState({todos: [...this.state.todos, newTodo]});
  }

  render(){
  return (
    <Router>
    <div className="App">
    <div className='Container'>
    <Header />
      <Route exact path='/' render={props => (
        <React.Fragment>
          <AddTodo addTodo={this.addTodo}/>
          <Todos todos = {this.state.todos} markComplete = {this.markComplete}
          delTodo = {this.delTodo}/>  
        </React.Fragment>
      )} />
      <Route path='/about' component={About} />
    </div>  
    </div>
    </Router>
  );
  }
  
}

export default App;
