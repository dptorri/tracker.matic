import React from 'react';
import ReactDOM from 'react-dom';

import $ from 'jquery'

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            tasks: []
        }
    }

    componentDidMount() {
        $.ajax({
            method: 'post',
            url: 'http://classes.codingbootcamp.cz/assets/classes/react-hackathon/api/tasks',
            dataType: 'json',
            success: (data) => {
                this.setState({
                        tasks: data
            })
        }
        });
    }



    render() {
        //must define in the render
        //let tasks = []
        return (

            //header

            //post_task
            <div id="mainPage">

                <form action="">
                    <input type="text" className="name" /><br />
                    <input type="text" className="name" />
                </form>
                l
                {/*this is an alternative to a for*/}
                <div>
                    <ul>
                        { this.state.tasks.map(task => 
                        <li key={task.id}>Task id: { task.id } 
                        <div key={task.name}>Task Name: 
                        { task.name }
                        </div>
                        </li>)  }
                    </ul>
                </div>
            </div>
            //list_task

            //footer   


        );
    }
}
