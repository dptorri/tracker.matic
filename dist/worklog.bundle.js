webpackJsonp([0],{

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(8);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(29);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_App2.default, null), document.getElementById('react-app'));

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(8);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _jquery = __webpack_require__(28);

var _jquery2 = _interopRequireDefault(_jquery);

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
                url: 'http://classes.codingbootcamp.cz/assets/classes/react-hackathon/api/tasks',
                dataType: 'json',
                success: function success(data) {
                    _this2.setState({
                        tasks: data
                    });
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
                    _react2.default.createElement(
                        'form',
                        { action: '' },
                        _react2.default.createElement(
                            'select',
                            { name: '', id: '' },
                            this.state.tasks.map(function (task) {
                                return _react2.default.createElement(
                                    'option',
                                    { value: task.id },
                                    task.id
                                );
                            })
                        ),
                        _react2.default.createElement('input', { type: 'text', value: 'duration' }),
                        _react2.default.createElement(
                            'button',
                            { type: 'submit' },
                            'send'
                        )
                    ),
                    'l',
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

/***/ })

},[15]);