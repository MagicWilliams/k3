'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./Home.css');

var _Element = require('./Element/Element');

var _Element2 = _interopRequireDefault(_Element);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
	_inherits(Home, _React$Component);

	function Home(props) {
		_classCallCheck(this, Home);

		var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

		_this.state = {};
		return _this;
	}

	_createClass(Home, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'Home-container' },
				_react2.default.createElement(
					'div',
					{ className: 'tier' },
					_react2.default.createElement(_Element2.default, { index: 'i', size: 0, text: 'david latimore ii' })
				),
				_react2.default.createElement('hr', null),
				_react2.default.createElement(
					'div',
					{ className: 'tier' },
					_react2.default.createElement(_Element2.default, { index: 'i', size: 0, text: 'chicago-based developer & interface designer' }),
					_react2.default.createElement(_Element2.default, { index: 'ii', size: 0, text: 'accepting new work: david.latimore@me.com' })
				),
				_react2.default.createElement('hr', null),
				_react2.default.createElement(
					'div',
					{ className: 'tier' },
					_react2.default.createElement(_Element2.default, { index: 'i', size: 1, text: 'Dial Up', url: 'http://www.dialupstuff.com' }),
					_react2.default.createElement(_Element2.default, { index: 'ii', size: 1, text: 'Lyrical Lemonade', url: 'http://www.lyricallemonade.com' }),
					_react2.default.createElement(_Element2.default, { index: 'iii', size: 1, text: 'Night Mode (Twitter)', url: 'https://www.theverge.com/2017/9/6/16263416/twitter-night-mode-desktop-roll-out-moon-icon' }),
					_react2.default.createElement(_Element2.default, { index: 'iv', size: 1, text: 'Rogue Agency', url: 'https://www.rogueagency.us/' }),
					_react2.default.createElement(_Element2.default, { index: 'v', size: 1, text: 'Scene VR', url: 'https://scene.knightlab.com/' })
				)
			);
		}
	}]);

	return Home;
}(_react2.default.Component);

exports.default = Home;