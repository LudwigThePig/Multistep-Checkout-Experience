'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      form1: true,
      form2: false,
      form3: false
    };
    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Multi Part Checkout'
        ),
        this.state.form1 ? React.createElement(Form1, null) : this.state.form2 ? React.createElement(Form2, null) : this.state.form3 ? React.createElement(Form3, null) : React.createElement(Review, null)
      );
    }
  }]);

  return App;
}(React.Component);

var Form1 = function (_React$Component2) {
  _inherits(Form1, _React$Component2);

  function Form1(props) {
    _classCallCheck(this, Form1);

    var _this2 = _possibleConstructorReturn(this, (Form1.__proto__ || Object.getPrototypeOf(Form1)).call(this, props));

    _this2.state = {
      name: '',
      email: '',
      password: ''
    };

    _this2.handleForm = _this2.handleForm.bind(_this2);
    _this2.handleChange = _this2.handleChange.bind(_this2);
    return _this2;
  }

  _createClass(Form1, [{
    key: 'handleChange',
    value: function handleChange(e) {
      var field = e.target.name;
      var value = e.target.value;
      console.log(field, value);
      return this.setState(_defineProperty({}, field, value));
    }
  }, {
    key: 'handleForm',
    value: function handleForm(e) {
      e.preventDefault();
      console.log(e);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'form',
          { onSubmit: this.handleForm },
          React.createElement(
            'label',
            null,
            'Name'
          ),
          React.createElement('input', {
            type: 'text',
            name: 'name',
            value: this.state.name,
            onChange: this.handleChange
          }),
          React.createElement('br', null),
          React.createElement(
            'label',
            null,
            'Email'
          ),
          React.createElement('input', {
            type: 'text',
            name: 'email',
            value: this.state.email,
            onChange: this.handleChange
          }),
          React.createElement('br', null),
          React.createElement(
            'label',
            null,
            'Password'
          ),
          React.createElement('input', {
            type: 'text',
            name: 'password',
            value: this.state.password,
            onChange: this.handleChange
          }),
          React.createElement('br', null),
          React.createElement('input', { type: 'submit' })
        )
      );
    }
  }]);

  return Form1;
}(React.Component);

var Form2 = function (_React$Component3) {
  _inherits(Form2, _React$Component3);

  function Form2(props) {
    _classCallCheck(this, Form2);

    var _this3 = _possibleConstructorReturn(this, (Form2.__proto__ || Object.getPrototypeOf(Form2)).call(this, props));

    _this3.handleForm = _this3.handleForm.bind(_this3);
    return _this3;
  }

  _createClass(Form2, [{
    key: 'handleForm',
    value: function handleForm(e) {
      e.preventDefault();
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'form',
          { onSubmit: this.handleForm },
          React.createElement('input', { type: 'text' }),
          React.createElement('input', { type: 'submit' })
        )
      );
    }
  }]);

  return Form2;
}(React.Component);

var Form3 = function (_React$Component4) {
  _inherits(Form3, _React$Component4);

  function Form3(props) {
    _classCallCheck(this, Form3);

    var _this4 = _possibleConstructorReturn(this, (Form3.__proto__ || Object.getPrototypeOf(Form3)).call(this, props));

    _this4.handleForm = _this4.handleForm.bind(_this4);
    return _this4;
  }

  _createClass(Form3, [{
    key: 'handleForm',
    value: function handleForm(e) {
      e.preventDefault();
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'form',
          { onSubmit: this.handleForm },
          React.createElement('input', { type: 'text' }),
          React.createElement('input', { type: 'submit' })
        )
      );
    }
  }]);

  return Form3;
}(React.Component);

var Review = function Review() {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Thanks for shopping with us!'
    )
  );
};

// F1 collects name, email, and password for account creation.
// F2 collects ship to address (line 1, line 2, city, state, zip code) and phone number.
// F3 collects credit card #, expiry date, CVV, and billing zip code.

ReactDOM.render(React.createElement(App, null), document.getElementById("root"));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9jb21wb25lbnRzL2FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImZvcm0xIiwiZm9ybTIiLCJmb3JtMyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiRm9ybTEiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImhhbmRsZUZvcm0iLCJiaW5kIiwiaGFuZGxlQ2hhbmdlIiwiZSIsImZpZWxkIiwidGFyZ2V0IiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJwcmV2ZW50RGVmYXVsdCIsIkZvcm0yIiwiRm9ybTMiLCJSZXZpZXciLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxhQUFPLElBREk7QUFFWEMsYUFBTyxLQUZJO0FBR1hDLGFBQU87QUFISSxLQUFiO0FBRmlCO0FBT2xCOzs7OzZCQUNRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFFRyxhQUFLSCxLQUFMLENBQVdDLEtBQVgsR0FBbUIsb0JBQUMsS0FBRCxPQUFuQixHQUErQixLQUFLRCxLQUFMLENBQVdFLEtBQVgsR0FBbUIsb0JBQUMsS0FBRCxPQUFuQixHQUErQixLQUFLRixLQUFMLENBQVdHLEtBQVgsR0FBbUIsb0JBQUMsS0FBRCxPQUFuQixHQUErQixvQkFBQyxNQUFEO0FBRmhHLE9BREY7QUFNRDs7OztFQWhCZUMsTUFBTUMsUzs7SUFvQmxCQyxLOzs7QUFDSixpQkFBWVAsS0FBWixFQUFtQjtBQUFBOztBQUFBLCtHQUNYQSxLQURXOztBQUVqQixXQUFLQyxLQUFMLEdBQWE7QUFDWE8sWUFBTyxFQURJO0FBRVhDLGFBQU8sRUFGSTtBQUdYQyxnQkFBVTtBQUhDLEtBQWI7O0FBTUEsV0FBS0MsVUFBTCxHQUFrQixPQUFLQSxVQUFMLENBQWdCQyxJQUFoQixRQUFsQjtBQUNBLFdBQUtDLFlBQUwsR0FBb0IsT0FBS0EsWUFBTCxDQUFrQkQsSUFBbEIsUUFBcEI7QUFUaUI7QUFVbEI7Ozs7aUNBRVlFLEMsRUFBRztBQUNkLFVBQU1DLFFBQVFELEVBQUVFLE1BQUYsQ0FBU1IsSUFBdkI7QUFDQSxVQUFNUyxRQUFRSCxFQUFFRSxNQUFGLENBQVNDLEtBQXZCO0FBQ0FDLGNBQVFDLEdBQVIsQ0FBWUosS0FBWixFQUFtQkUsS0FBbkI7QUFDQSxhQUFPLEtBQUtHLFFBQUwscUJBQ0pMLEtBREksRUFDSUUsS0FESixFQUFQO0FBR0Q7OzsrQkFFVUgsQyxFQUFHO0FBQ1pBLFFBQUVPLGNBQUY7QUFDQUgsY0FBUUMsR0FBUixDQUFZTCxDQUFaO0FBQ0Q7Ozs2QkFDUTtBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQU0sVUFBVSxLQUFLSCxVQUFyQjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUVFO0FBQ0Esa0JBQUssTUFETDtBQUVBLGtCQUFLLE1BRkw7QUFHQSxtQkFBTyxLQUFLVixLQUFMLENBQVdPLElBSGxCO0FBSUEsc0JBQVUsS0FBS0s7QUFKZixZQUZGO0FBT1cseUNBUFg7QUFTRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBVEY7QUFVRTtBQUNFLGtCQUFLLE1BRFA7QUFFRSxrQkFBSyxPQUZQO0FBR0UsbUJBQU8sS0FBS1osS0FBTCxDQUFXUSxLQUhwQjtBQUlFLHNCQUFVLEtBQUtJO0FBSmpCLFlBVkY7QUFlYSx5Q0FmYjtBQWlCRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBakJGO0FBa0JFO0FBQ0Esa0JBQUssTUFETDtBQUVBLGtCQUFLLFVBRkw7QUFHQSxtQkFBTyxLQUFLWixLQUFMLENBQVdTLFFBSGxCO0FBSUEsc0JBQVUsS0FBS0c7QUFKZixZQWxCRjtBQXVCVyx5Q0F2Qlg7QUF5QkUseUNBQU8sTUFBSyxRQUFaO0FBekJGO0FBREYsT0FERjtBQStCRDs7OztFQTFEaUJSLE1BQU1DLFM7O0lBNERwQmdCLEs7OztBQUNKLGlCQUFZdEIsS0FBWixFQUFtQjtBQUFBOztBQUFBLCtHQUNYQSxLQURXOztBQUVqQixXQUFLVyxVQUFMLEdBQWtCLE9BQUtBLFVBQUwsQ0FBZ0JDLElBQWhCLFFBQWxCO0FBRmlCO0FBR2xCOzs7OytCQUVVRSxDLEVBQUc7QUFDWkEsUUFBRU8sY0FBRjtBQUNEOzs7NkJBRU87QUFDTixhQUNFO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQSxZQUFNLFVBQVUsS0FBS1YsVUFBckI7QUFDRSx5Q0FBTyxNQUFLLE1BQVosR0FERjtBQUVFLHlDQUFPLE1BQUssUUFBWjtBQUZGO0FBREEsT0FERjtBQVFDOzs7O0VBbkJlTixNQUFNQyxTOztJQXNCbEJpQixLOzs7QUFDSixpQkFBWXZCLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwrR0FDWEEsS0FEVzs7QUFFakIsV0FBS1csVUFBTCxHQUFrQixPQUFLQSxVQUFMLENBQWdCQyxJQUFoQixRQUFsQjtBQUZpQjtBQUdsQjs7OzsrQkFFVUUsQyxFQUFHO0FBQ1pBLFFBQUVPLGNBQUY7QUFDRDs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBTSxVQUFVLEtBQUtWLFVBQXJCO0FBQ0UseUNBQU8sTUFBSyxNQUFaLEdBREY7QUFFRSx5Q0FBTyxNQUFLLFFBQVo7QUFGRjtBQURGLE9BREY7QUFRRDs7OztFQW5CaUJOLE1BQU1DLFM7O0FBd0I1QixJQUFNa0IsU0FBUyxTQUFUQSxNQUFTO0FBQUEsU0FDYjtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsR0FEYTtBQUFBLENBQWY7O0FBTUU7QUFDQTtBQUNBOztBQUVGQyxTQUFTQyxNQUFULENBQWdCLG9CQUFDLEdBQUQsT0FBaEIsRUFBeUJDLFNBQVNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBekIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZm9ybTE6IHRydWUsXHJcbiAgICAgIGZvcm0yOiBmYWxzZSxcclxuICAgICAgZm9ybTM6IGZhbHNlLFxyXG4gICAgfVxyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoMT5NdWx0aSBQYXJ0IENoZWNrb3V0PC9oMT5cclxuICAgICAgICB7dGhpcy5zdGF0ZS5mb3JtMSA/IDxGb3JtMSAvPiA6IHRoaXMuc3RhdGUuZm9ybTIgPyA8Rm9ybTIgLz4gOiB0aGlzLnN0YXRlLmZvcm0zID8gPEZvcm0zIC8+IDogPFJldmlldyAvPn1cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5cclxuY2xhc3MgRm9ybTEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBuYW1lIDogJycsXHJcbiAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgcGFzc3dvcmQ6ICcnXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5oYW5kbGVGb3JtID0gdGhpcy5oYW5kbGVGb3JtLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVDaGFuZ2UoZSkge1xyXG4gICAgY29uc3QgZmllbGQgPSBlLnRhcmdldC5uYW1lO1xyXG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIGNvbnNvbGUubG9nKGZpZWxkLCB2YWx1ZSlcclxuICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgW2ZpZWxkXTogdmFsdWVcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBoYW5kbGVGb3JtKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZUZvcm19PlxyXG4gICAgICAgICAgPGxhYmVsPk5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9XHJcbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IFxyXG4gICAgICAgICAgPjwvaW5wdXQ+PGJyIC8+XHJcblxyXG4gICAgICAgICAgPGxhYmVsPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gXHJcbiAgICAgICAgICAgID48L2lucHV0PjxiciAvPlxyXG5cclxuICAgICAgICAgIDxsYWJlbD5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSBcclxuICAgICAgICAgID48L2lucHV0PjxiciAvPlxyXG5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCI+PC9pbnB1dD5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5jbGFzcyBGb3JtMiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuaGFuZGxlRm9ybSA9IHRoaXMuaGFuZGxlRm9ybS5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRm9ybShlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKXtcclxuICAgIHJldHVybihcclxuICAgICAgPGRpdj5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlRm9ybX0+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCI+PC9pbnB1dD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiPjwvaW5wdXQ+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjbGFzcyBGb3JtMyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgIHRoaXMuaGFuZGxlRm9ybSA9IHRoaXMuaGFuZGxlRm9ybS5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBoYW5kbGVGb3JtKGUpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlRm9ybX0+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCI+PC9pbnB1dD5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG5cclxuY29uc3QgUmV2aWV3ID0gKCkgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8aDE+VGhhbmtzIGZvciBzaG9wcGluZyB3aXRoIHVzITwvaDE+XHJcbiAgPC9kaXY+XHJcbilcclxuXHJcbiAgLy8gRjEgY29sbGVjdHMgbmFtZSwgZW1haWwsIGFuZCBwYXNzd29yZCBmb3IgYWNjb3VudCBjcmVhdGlvbi5cclxuICAvLyBGMiBjb2xsZWN0cyBzaGlwIHRvIGFkZHJlc3MgKGxpbmUgMSwgbGluZSAyLCBjaXR5LCBzdGF0ZSwgemlwIGNvZGUpIGFuZCBwaG9uZSBudW1iZXIuXHJcbiAgLy8gRjMgY29sbGVjdHMgY3JlZGl0IGNhcmQgIywgZXhwaXJ5IGRhdGUsIENWViwgYW5kIGJpbGxpbmcgemlwIGNvZGUuXHJcblxyXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpKTsiXX0=