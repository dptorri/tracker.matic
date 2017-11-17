import React from 'react';
import ReactDOM from 'react-dom';

import $ from 'jquery'

export default class Log extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            tasks: [],
            duration: 0
        }
    }

    //to use tasks you need to pass it as a prop

    formSubmitted(event){
        event.preventDefault();

        $.ajax({
            method: 'post',
            url: 'http://classes.codingbootcamp.cz/assets/classes/react-hackathon/api/tasks',
            data: {
                duration: this.state.taskDuration
            },
            success: (data) => {
                this.setState({
                    tasks: data

                })
            }
        });



            render(){
                return(
                    <form action="" onSubmit={(event) => this.formSubmitted(event)}>
                        
                        <select name="duration" id="">
                        { this.props.tasks.map(task => 
                            <option value={ task.id }>{ task.id }
                            </option>)}
                        </select>

                    <input type="text" value={this.state.taskDuration} placeholder="enter the duration"/>
                    <button type="submit">send</button>

                </form>
            );
        }
}