import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props)

    this.state = {

        tasks: [{
            id: 1,
            text: 'Try to do some more React',
            date: 'Tue 6th March'
        }],

        taskInputValue: '',
        taskInputDate: ''
    }
  }

  handleInputChange = (e) => {
      this.setState({taskInputValue: e.target.value})
  }
  
  handleInputDateChange = (e) => {
      this.setState({taskInputDate: e.target.value})
  }

  handleAddButton = (e) => {
      e.preventDefault()
      var task = {
          id: Date.now(),
          text: this.state.taskInputValue,
          date: this.state.taskInputDate
      }

      var newTasks = [task, ...this.state.tasks]

      this.setState({
          tasks: newTasks,
          taskInputValue: '',
          taskInputDate: ''
      })
  }

  handleTaskDelete = (e) => {
      var taskIdToDelete = parseInt(e.target.id)
      var tasks = this.state.tasks
      var filterTasks = tasks.filter((item) => {
          return item.id != taskIdToDelete
      })

      this.setState({tasks: filterTasks})

  }

  render(){

    return (
      <div className="wrap">
        <div className="container">
            <header>
                <h1>Daily todo list</h1>
            </header>
            <main>
                <section className="section-1">
                    <form className="input-body">
                        <div className="input-group">
                            <input type="text" id="todo" name="todo" placeholder="Add your todo" value={this.state.taskInputValue} onChange={this.handleInputChange}/>
                            <input type="text" id="date" name="date" placeholder="Add your due date" value={this.state.taskInputDate} onChange={this.handleInputDateChange}/>
                        </div>
                        <button type="submit" className="btn" onClick={this.handleAddButton}><i className="fas fa-plus plus"></i></button>
                    </form>
                    <div className="tasks">
                        {
                            this.state.tasks.map((task) =>{
                                return (
                                    <div className="task" key={task.id}>
                                        <div className="check-group">
                                            <input type="checkbox" id={task.id} name="task"/>
                                            <label htmlFor={task.id}>
                                                {task.text}
                                            </label>
                                            <div className="task-date">
                                                Due date:<span>{task.date}</span>
                                            </div>
                                        </div>
                                        <div className="check-group-btns">
                                            <i className="fas fa-edit edit"></i>
                                            <i id={task.id} className="fas fa-trash-alt trash" onClick={this.handleTaskDelete}></i>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </section>
            </main>
        </div>
    </div>
    )

  }

}

export default App;
