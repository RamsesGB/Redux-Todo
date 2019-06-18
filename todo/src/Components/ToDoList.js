import React from 'react';
import '../App.css';
import { connect } from 'react-redux';

class ToDoList extends React.Component {
    state = {
        newTask: []
    };

    handleChanges = e => {
    this.setState({ newTask: e.target.value });
    }



    render(){
        return(
            <div className='listContainer'>
                <div>
                    <h3>task</h3>
                </div>
                <input
                type='text'
                placeholder='Add New Task'
                value={this.state.newTask}
                onChange={this.handleChanges}
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {};
}

export default connect(mapStateToProps, {})(ToDoList);