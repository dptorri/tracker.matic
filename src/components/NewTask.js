import React from 'react';
import ReactDOM from 'react-dom';

import $ from 'jquery'

export default class NewTask extends React.Component {


    
    constructor(props) {
        super(props);

        //set initial state of this component
        this.state = {
            
            TaskID: '',
            TaskName: ''
        }

        this.handleTaskID = this.handleTaskID.bind(this)
        this.handleTaskName =  this.handleTaskName.bind(this)
        
    }
    

    formSubmitted(event) {
        event.preventDefault();  

        $.ajax({
            method: 'post',
            url: 'http://classes.codingbootcamp.cz/assets/classes/react-hackathon/api/tasks/create',
            data: {
                task_id: this.state.TaskID,
                name:this.state.TaskName,
                user_id: 'david'
            },

            success: (data) => {
                
                

                this.setState({
                    TaskID: '',
                    TaskName:''
                });
                //console.log(data)
            }
        })
    }

    
    handleTaskID(event) {
        this.setState({
            TaskID: event.target.value,
        })
    }

    handleTaskName(event) {
        this.setState({
            TaskName: event.target.value,
        })
    }

    render() {
        return (
            <div id="NewTask">

                <h4>Insert new task:</h4>
                <form action="" onSubmit={(event) => this.formSubmitted(event)} >

            
                    <p>Task ID:</p> 
                    <input id="field1" value={this.state.TaskID} onChange={this.handleTaskID} type="text" name="task_id" /><br />

                    <p>Task Name:</p> 
                    <input  id="field2" value={this.state.TaskName} onChange={this.handleTaskName} type="text" name="task_name" /><br />
                    <br />

                    <input type="submit" value="add" /><br />
                </form>
                <br />
            </div>
        )
    }

}
