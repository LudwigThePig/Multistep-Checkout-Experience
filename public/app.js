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
      form3: false,
      formData: {
        name: '',
        email: '',
        password: ''

      }
    };
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'handleChange',
    value: function handleChange(e) {
      var field = e.target.name;
      var value = e.target.value;
      console.log(field, value);
      return this.setState({
        formData: _defineProperty({}, field, value)
      });
    }
  }, {
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
        this.state.form1 ? React.createElement(Form1, { handleChange: this.handleChange, forms: this.state.formData }) : this.state.form2 ? React.createElement(Form2, null) : this.state.form3 ? React.createElement(Form3, null) : React.createElement(Review, null)
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

    _this2.handleForm = _this2.handleForm.bind(_this2);
    return _this2;
  }

  _createClass(Form1, [{
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
          React.createElement(
            'label',
            null,
            'Name'
          ),
          React.createElement('input', {
            type: 'text',
            name: 'name',
            value: this.props.forms.name,
            onChange: this.props.handleChange
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
            value: this.props.forms.email,
            onChange: this.props.handleChange
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
            value: this.props.forms.password,
            onChange: this.props.handleChange
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9jb21wb25lbnRzL2FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImZvcm0xIiwiZm9ybTIiLCJmb3JtMyIsImZvcm1EYXRhIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwiZSIsImZpZWxkIiwidGFyZ2V0IiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJSZWFjdCIsIkNvbXBvbmVudCIsIkZvcm0xIiwiaGFuZGxlRm9ybSIsInByZXZlbnREZWZhdWx0IiwiZm9ybXMiLCJGb3JtMiIsIkZvcm0zIiwiUmV2aWV3IiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsYUFBTyxJQURJO0FBRVhDLGFBQU8sS0FGSTtBQUdYQyxhQUFPLEtBSEk7QUFJWEMsZ0JBQVc7QUFDVEMsY0FBTyxFQURFO0FBRVRDLGVBQU8sRUFGRTtBQUdUQyxrQkFBVTs7QUFIRDtBQUpBLEtBQWI7QUFXQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JDLElBQWxCLE9BQXBCO0FBYmlCO0FBY2xCOzs7O2lDQUNZQyxDLEVBQUc7QUFDZCxVQUFNQyxRQUFRRCxFQUFFRSxNQUFGLENBQVNQLElBQXZCO0FBQ0EsVUFBTVEsUUFBUUgsRUFBRUUsTUFBRixDQUFTQyxLQUF2QjtBQUNBQyxjQUFRQyxHQUFSLENBQVlKLEtBQVosRUFBbUJFLEtBQW5CO0FBQ0EsYUFBTyxLQUFLRyxRQUFMLENBQWM7QUFDbkJaLHNDQUNHTyxLQURILEVBQ1dFLEtBRFg7QUFEbUIsT0FBZCxDQUFQO0FBS0Q7Ozs2QkFDUTtBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7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QWY7O0FBTUU7QUFDQTtBQUNBOztBQUVGQyxTQUFTQyxNQUFULENBQWdCLG9CQUFDLEdBQUQsT0FBaEIsRUFBeUJDLFNBQVNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBekIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZm9ybTE6IHRydWUsXHJcbiAgICAgIGZvcm0yOiBmYWxzZSxcclxuICAgICAgZm9ybTM6IGZhbHNlLFxyXG4gICAgICBmb3JtRGF0YSA6IHtcclxuICAgICAgICBuYW1lIDogJycsXHJcbiAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgIHBhc3N3b3JkOiAnJyxcclxuXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcclxuICB9XHJcbiAgaGFuZGxlQ2hhbmdlKGUpIHtcclxuICAgIGNvbnN0IGZpZWxkID0gZS50YXJnZXQubmFtZTtcclxuICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICBjb25zb2xlLmxvZyhmaWVsZCwgdmFsdWUpXHJcbiAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGZvcm1EYXRhOiB7XHJcbiAgICAgICAgW2ZpZWxkXTogdmFsdWVcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDE+TXVsdGkgUGFydCBDaGVja291dDwvaDE+XHJcbiAgICAgICAge3RoaXMuc3RhdGUuZm9ybTEgPyA8Rm9ybTEgaGFuZGxlQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gZm9ybXM9e3RoaXMuc3RhdGUuZm9ybURhdGF9IC8+IFxyXG4gICAgICAgICAgOiB0aGlzLnN0YXRlLmZvcm0yID8gPEZvcm0yIC8+IFxyXG4gICAgICAgICAgOiB0aGlzLnN0YXRlLmZvcm0zID8gPEZvcm0zIC8+IFxyXG4gICAgICAgICAgOiA8UmV2aWV3IC8+fVxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcblxyXG5jbGFzcyBGb3JtMSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuaGFuZGxlRm9ybSA9IHRoaXMuaGFuZGxlRm9ybS5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRm9ybShlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZUZvcm19PlxyXG4gICAgICAgICAgPGxhYmVsPk5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLmZvcm1zLm5hbWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnByb3BzLmhhbmRsZUNoYW5nZX0gXHJcbiAgICAgICAgICAgID48L2lucHV0PjxiciAvPlxyXG5cclxuICAgICAgICAgIDxsYWJlbD5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLmZvcm1zLmVtYWlsfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5wcm9wcy5oYW5kbGVDaGFuZ2V9IFxyXG4gICAgICAgICAgICA+PC9pbnB1dD48YnIgLz5cclxuXHJcbiAgICAgICAgICA8bGFiZWw+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5mb3Jtcy5wYXNzd29yZH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucHJvcHMuaGFuZGxlQ2hhbmdlfSBcclxuICAgICAgICAgICAgPjwvaW5wdXQ+PGJyIC8+IFxyXG5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCI+PC9pbnB1dD5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5jbGFzcyBGb3JtMiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuaGFuZGxlRm9ybSA9IHRoaXMuaGFuZGxlRm9ybS5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRm9ybShlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKXtcclxuICAgIHJldHVybihcclxuICAgICAgPGRpdj5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlRm9ybX0+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCI+PC9pbnB1dD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiPjwvaW5wdXQ+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjbGFzcyBGb3JtMyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgIHRoaXMuaGFuZGxlRm9ybSA9IHRoaXMuaGFuZGxlRm9ybS5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBoYW5kbGVGb3JtKGUpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlRm9ybX0+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCI+PC9pbnB1dD5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG5cclxuY29uc3QgUmV2aWV3ID0gKCkgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8aDE+VGhhbmtzIGZvciBzaG9wcGluZyB3aXRoIHVzITwvaDE+XHJcbiAgPC9kaXY+XHJcbilcclxuXHJcbiAgLy8gRjEgY29sbGVjdHMgbmFtZSwgZW1haWwsIGFuZCBwYXNzd29yZCBmb3IgYWNjb3VudCBjcmVhdGlvbi5cclxuICAvLyBGMiBjb2xsZWN0cyBzaGlwIHRvIGFkZHJlc3MgKGxpbmUgMSwgbGluZSAyLCBjaXR5LCBzdGF0ZSwgemlwIGNvZGUpIGFuZCBwaG9uZSBudW1iZXIuXHJcbiAgLy8gRjMgY29sbGVjdHMgY3JlZGl0IGNhcmQgIywgZXhwaXJ5IGRhdGUsIENWViwgYW5kIGJpbGxpbmcgemlwIGNvZGUuXHJcblxyXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpKTsiXX0=