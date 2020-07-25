import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    
    this.tasks = [{
        id: 1,
        text: 'Watch the godfather 1',
        date: 'Tue 6th March'
    },{
        id: 2,
        text: 'Watch the godfather 2',
        date: 'Wed 20th March'
    },{
        id: 3,
        text: 'Watch the godfather 3',
        date: 'Sun 1st April'
    },{
        id: 4,
        text: 'Watch the godfather 4',
        date: 'Sat 13th May'
    },{
        id: 5,
        text: 'You have watched to many Movies. go for a walk',
        date: 'Sun 14th May' 
    },{
        id: 6,
        text: 'Stop slacking. Do some more React',
        date: 'Mon 15th May' 
    },{
        id: 7,
        text: 'Lean about Key id\'s in React to solve JS error',
        date: 'Mon 15th May' 
    }]
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
                    <div className="input-group">
                        <input type="text" id="todo" name="todo" placeholder="Add your todo"/>
                        <i className="fas fa-plus plus"></i>
                    </div>
                    <div className="tasks">
                        {
                            this.tasks.map((task) =>{
                                return (
                                    <div className="task" key={task.id}>
                                        <div className="check-group">
                                            <input type="checkbox" id="task" name="task"/>
                                            <label htmlFor="task">
                                                {task.text}
                                            </label>
                                            <div className="task-date">
                                                Due date:<span>{task.date}</span>
                                            </div>
                                        </div>
                                        <div className="check-group-btns">
                                            <i className="fas fa-edit edit"></i>
                                            <i className="fas fa-trash-alt trash"></i>
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
