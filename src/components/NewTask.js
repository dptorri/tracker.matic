import React from 'react';
import ReactDOM from 'react-dom';

import $ from 'jquery'

export default class NewTask extends React.Component {

    render()
    {
        return(
           <div id="NewTask">
            Task Name: <br />
            <input type="text" name="taskname" />



           </div>
    )
    }

}
