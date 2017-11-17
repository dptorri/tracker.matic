import React from 'react';
import ReactDOM from 'react-dom';

import $ from 'jquery'

export default class Log extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            duration: '',
            task_id: 1
        }
    }

    //to use tasks you need to pass it as a prop
    textChanged(event){
        this.setState({
                duration: event.target.value
        })
    }

    task_id_Changed(event){
        this.setState({
                task_id: event.target.value
        })
    }
    

    formSubmitted(event){
            event.preventDefault();

            $.ajax({
                method: 'post',
                url: 'http://classes.codingbootcamp.cz/assets/classes/react-hackathon/api/logs/create',
                data: {
                    task_id: this.state.task_id,
                    duration: this.state.duration
                },
                success: (data) => {
                    this.setState({
                        tasks: data
                        
                    })
                    console.log(data);  
                }
            });
        }
            render()
            {
                return(
                    <form action="" onSubmit={(event) => this.formSubmitted(event)}>
                        
                        <select value={this.state.task_id} onChange={ (event) => this.task_id_Changed(event) } name="duration" id="">
                        <option value="">Select the task</option>                        
                        { this.props.tasks.map(task => 
                            <option value={ task.id }>{ task.id }
                            </option>)}
                        </select>
                    <input type="text" value={this.state.duration} onChange={ (event) => this.textChanged(event) } placeholder="enter the duration" />
                    <button type="submit">send</button>

                </form>
            );
        }
}