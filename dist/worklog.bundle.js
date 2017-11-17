webpackJsonp([0],{

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(3);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(28);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_App2.default, null), document.getElementById('react-app'));

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(3);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _jquery = __webpack_require__(6);

var _jquery2 = _interopRequireDefault(_jquery);

var _Log = __webpack_require__(29);

var _Log2 = _interopRequireDefault(_Log);

var _NewTask = __webpack_require__(30);

var _NewTask2 = _interopRequireDefault(_NewTask);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = {
            tasks: []

        };
        return _this;
    }

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            _jquery2.default.ajax({
                method: 'post',
                url: 'http://classes.codingbootcamp.cz/assets/classes/react-hackathon/api/tasks/totals',
                dataType: 'json',
                success: function success(data) {
                    _this2.setState({
                        tasks: data

                    });
                    console.log(data);
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {

            //must define in the render
            //let tasks = []
            return (

                //header


                //post_task
                _react2.default.createElement(
                    'div',
                    { id: 'mainPage' },
                    _react2.default.createElement(_NewTask2.default, null),
                    _react2.default.createElement(_Log2.default, { tasks: this.state.tasks }),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'ul',
                            null,
                            this.state.tasks.map(function (task) {
                                return _react2.default.createElement(
                                    'li',
                                    { key: task.id },
                                    'Task id: ',
                                    task.id,
                                    _react2.default.createElement(
                                        'div',
                                        { key: task.name },
                                        'Task Name:',
                                        task.name
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { key: task.total },
                                        'Task Duration:',
                                        task.total
                                    )
                                );
                            })
                        )
                    )
                )
                //list_task

                //footer   


            );
        }
    }]);

    return App;
}(_react2.default.Component);

exports.default = App;

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(3);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _jquery = __webpack_require__(6);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Log = function (_React$Component) {
    _inherits(Log, _React$Component);

    function Log(props) {
        _classCallCheck(this, Log);

        var _this = _possibleConstructorReturn(this, (Log.__proto__ || Object.getPrototypeOf(Log)).call(this, props));

        _this.state = {
            tasks: [],
            duration: '',
            task_id: 1
        };
        return _this;
    }

    //to use tasks you need to pass it as a prop


    _createClass(Log, [{
        key: 'textChanged',
        value: function textChanged(event) {
            this.setState({
                duration: event.target.value
            });
        }
    }, {
        key: 'task_id_Changed',
        value: function task_id_Changed(event) {
            this.setState({
                task_id: event.target.value
            });
        }
    }, {
        key: 'formSubmitted',
        value: function formSubmitted(event) {
            var _this2 = this;

            event.preventDefault();

            _jquery2.default.ajax({
                method: 'post',
                url: 'http://classes.codingbootcamp.cz/assets/classes/react-hackathon/api/logs/create',
                data: {

                    task_id: this.state.task_id,
                    duration: this.state.duration

                },
                success: function success(data) {
                    _this2.setState({
                        tasks: data

                    });
                    console.log(data);
                }

            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(
                'form',
                { action: '', onSubmit: function onSubmit(event) {
                        return _this3.formSubmitted(event);
                    } },
                _react2.default.createElement(
                    'select',
                    { value: this.state.task_id, onChange: function onChange(event) {
                            return _this3.task_id_Changed(event);
                        }, name: 'duration', id: '' },
                    this.props.tasks.map(function (task) {
                        return _react2.default.createElement(
                            'option',
                            { value: task.id },
                            task.id
                        );
                    })
                ),
                _react2.default.createElement('input', { type: 'text', value: this.state.duration, onChange: function onChange(event) {
                        return _this3.textChanged(event);
                    }, placeholder: 'enter the duration' }),
                _react2.default.createElement(
                    'button',
                    { type: 'submit' },
                    'send'
                )
            );
        }
    }]);

    return Log;
}(_react2.default.Component);

exports.default = Log;

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(3);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _jquery = __webpack_require__(6);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewTask = function (_React$Component) {
    _inherits(NewTask, _React$Component);

    function NewTask(props) {
        _classCallCheck(this, NewTask);

        //set initial state of this component
        var _this = _possibleConstructorReturn(this, (NewTask.__proto__ || Object.getPrototypeOf(NewTask)).call(this, props));

        _this.state = {

            TaskID: '',
            TaskName: ''
        };

        _this.handleTaskID = _this.handleTaskID.bind(_this);
        _this.handleTaskName = _this.handleTaskName.bind(_this);

        return _this;
    }

    _createClass(NewTask, [{
        key: 'formSubmitted',
        value: function formSubmitted(event) {
            var _this2 = this;

            event.preventDefault();

            _jquery2.default.ajax({
                method: 'post',
                url: 'http://classes.codingbootcamp.cz/assets/classes/react-hackathon/api/tasks/create',
                data: {
                    task_id: this.state.TaskID,
                    name: this.state.TaskName,
                    user_id: 'david'
                },

                success: function success(data) {

                    _this2.setState({
                        TaskID: '',
                        TaskName: ''
                    });
                    //console.log(data)
                }
            });
        }
    }, {
        key: 'handleTaskID',
        value: function handleTaskID(event) {
            this.setState({
                TaskID: event.target.value
            });
        }
    }, {
        key: 'handleTaskName',
        value: function handleTaskName(event) {
            this.setState({
                TaskName: event.target.value
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(
                'div',
                { id: 'NewTask' },
                _react2.default.createElement(
                    'h4',
                    null,
                    'Insert new task:'
                ),
                _react2.default.createElement(
                    'form',
                    { action: '', onSubmit: function onSubmit(event) {
                            return _this3.formSubmitted(event);
                        } },
                    _react2.default.createElement(
                        'p',
                        null,
                        'Task ID:'
                    ),
                    _react2.default.createElement('input', { id: 'field1', value: this.state.TaskID, onChange: this.handleTaskID, type: 'text', name: 'task_id' }),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Task Name:'
                    ),
                    _react2.default.createElement('input', { id: 'field2', value: this.state.TaskName, onChange: this.handleTaskName, type: 'text', name: 'task_name' }),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement('input', { type: 'submit', value: 'add' }),
                    _react2.default.createElement('br', null)
                ),
                _react2.default.createElement('br', null)
            );
        }
    }]);

    return NewTask;
}(_react2.default.Component);

exports.default = NewTask;

/***/ })

},[16]);