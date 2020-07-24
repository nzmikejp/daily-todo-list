import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props)
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
                        <div className="task">
                            <div className="check-group">
                                <input type="checkbox" id="task-1" name="task-1"/>
                                <label htmlFor="task-1">Watch the godfather 1</label>
                            </div>
                            <div className="check-group-btns">
                                <i className="fas fa-edit edit"></i>
                                <i className="fas fa-trash-alt trash"></i>
                            </div>
                        </div>
                        <div className="task">
                            <div className="check-group">
                                <input type="checkbox" id="task-1" name="task-1"/>
                                <label htmlFor="task-1">Watch the godfather 1</label>
                            </div>
                            <div className="check-group-btns">
                                <i className="fas fa-edit edit"></i>
                                <i className="fas fa-trash-alt trash"></i>
                            </div>
                        </div>
                        <div className="task">
                            <div className="check-group">
                                <input type="checkbox" id="task-1" name="task-1"/>
                                <label htmlFor="task-1">Watch the godfather 1</label>
                            </div>
                            <div className="check-group-btns">
                                <i className="fas fa-edit edit"></i>
                                <i className="fas fa-trash-alt trash"></i>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    </div>
    )

  }

}

export default App;
