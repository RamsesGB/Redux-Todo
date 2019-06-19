import React from 'react';
import '../App.css';
import { connect } from 'react-redux';
import {createNewTask, toggleTask} from '../Actions/index';

class ToDoList extends React.Component {
    state = {
        newTask: []
    };

    handleChanges = e => {
    this.setState({ newTask: e.target.value });
    }

    addTask = e => {
    this.props.createNewTask(this.state.newTask)
    this.setState({ newTask: '' })
    }



    render() {
        return(
            <React.Fragment>
            <div className='listContainer'>
                {this.props.tasksMSTP.map( task =>(
                    <h4 key={task.id}>
                        {task.value}
                    </h4>
                ))}
                <input
                type='text'
                placeholder='Add New Task'
                value={this.state.newTask}
                onChange={this.handleChanges}
                />
                <button onClick={this.addTask}>Create Task!</button>
            </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        tasksMSTP: state.tasks
    };
};


export default connect(mapStateToProps, { createNewTask })(ToDoList);


