import React from 'react';
import ReactDOM from 'react-dom';

import $ from 'jquery'

export default class Log extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            tasks: []
        }
    }

    //to use tasks you need to pass it as a prop

    formSubmitted(event){
        event.preventDefault();

    
    }
            render(){
                return(
                    <form action="" onSubmit={(event) => this.formSubmitted(event)}>
                        
                        <select name="" id="">
                        { this.props.tasks.map(task => 
                            <option value={ task.id }>{ task.id }
                            </option>)}
                        </select>

                    <input type="text" placeholder="enter the duration"/>
                    <button type="submit">send</button>

                </form>
            );
        }
}