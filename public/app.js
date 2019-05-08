"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "Multi Part Checkout"
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

    return _possibleConstructorReturn(this, (Form1.__proto__ || Object.getPrototypeOf(Form1)).call(this, props));
  }

  _createClass(Form1, [{
    key: "handleForm",
    value: function handleForm(e) {
      e.preventDefault();
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "form",
          { onSubmit: this.handleForm },
          React.createElement("input", { type: "text" }),
          React.createElement("input", { type: "submit" })
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

    return _possibleConstructorReturn(this, (Form2.__proto__ || Object.getPrototypeOf(Form2)).call(this, props));
  }

  _createClass(Form2, [{
    key: "handleForm",
    value: function handleForm(e) {
      e.preventDefault();
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "form",
          { onSubmit: this.handleForm },
          React.createElement("input", { type: "text" }),
          React.createElement("input", { type: "submit" })
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

    return _possibleConstructorReturn(this, (Form3.__proto__ || Object.getPrototypeOf(Form3)).call(this, props));
  }

  _createClass(Form3, [{
    key: "handleForm",
    value: function handleForm(e) {
      e.preventDefault();
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "form",
          { onSubmit: this.handleForm },
          React.createElement("input", { type: "text" }),
          React.createElement("input", { type: "submit" })
        )
      );
    }
  }]);

  return Form3;
}(React.Component);

var Review = function Review() {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Thanks for shopping with us!"
    )
  );
};

// F1 collects name, email, and password for account creation.
// F2 collects ship to address (line 1, line 2, city, state, zip code) and phone number.
// F3 collects credit card #, expiry date, CVV, and billing zip code.

ReactDOM.render(React.createElement(App, null), document.getElementById("root"));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9jb21wb25lbnRzL2FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImZvcm0xIiwiZm9ybTIiLCJmb3JtMyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiRm9ybTEiLCJlIiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVGb3JtIiwiRm9ybTIiLCJGb3JtMyIsIlJldmlldyIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxhQUFPLElBREk7QUFFWEMsYUFBTyxLQUZJO0FBR1hDLGFBQU87QUFISSxLQUFiO0FBRmlCO0FBT2xCOzs7OzZCQUNRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFFRyxhQUFLSCxLQUFMLENBQVdDLEtBQVgsR0FBbUIsb0JBQUMsS0FBRCxPQUFuQixHQUErQixLQUFLRCxLQUFMLENBQVdFLEtBQVgsR0FBbUIsb0JBQUMsS0FBRCxPQUFuQixHQUErQixLQUFLRixLQUFMLENBQVdHLEtBQVgsR0FBbUIsb0JBQUMsS0FBRCxPQUFuQixHQUErQixvQkFBQyxNQUFEO0FBRmhHLE9BREY7QUFNRDs7OztFQWhCZUMsTUFBTUMsUzs7SUFvQmxCQyxLOzs7QUFDSixpQkFBWVAsS0FBWixFQUFtQjtBQUFBOztBQUFBLHlHQUNYQSxLQURXO0FBRWxCOzs7OytCQUNVUSxDLEVBQUc7QUFDWkEsUUFBRUMsY0FBRjtBQUNEOzs7NkJBQ1E7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFNLFVBQVUsS0FBS0MsVUFBckI7QUFDRSx5Q0FBTyxNQUFLLE1BQVosR0FERjtBQUVFLHlDQUFPLE1BQUssUUFBWjtBQUZGO0FBREYsT0FERjtBQVFEOzs7O0VBaEJpQkwsTUFBTUMsUzs7SUFrQnBCSyxLOzs7QUFDSixpQkFBWVgsS0FBWixFQUFtQjtBQUFBOztBQUFBLHlHQUNYQSxLQURXO0FBRWxCOzs7OytCQUVVUSxDLEVBQUc7QUFDWkEsUUFBRUMsY0FBRjtBQUNEOzs7NkJBRU87QUFDTixhQUNFO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQSxZQUFNLFVBQVUsS0FBS0MsVUFBckI7QUFDRSx5Q0FBTyxNQUFLLE1BQVosR0FERjtBQUVFLHlDQUFPLE1BQUssUUFBWjtBQUZGO0FBREEsT0FERjtBQVFDOzs7O0VBbEJlTCxNQUFNQyxTOztJQXFCbEJNLEs7OztBQUNKLGlCQUFZWixLQUFaLEVBQW1CO0FBQUE7O0FBQUEseUdBQ1hBLEtBRFc7QUFFbEI7Ozs7K0JBRVVRLEMsRUFBRztBQUNaQSxRQUFFQyxjQUFGO0FBQ0Q7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQU0sVUFBVSxLQUFLQyxVQUFyQjtBQUNFLHlDQUFPLE1BQUssTUFBWixHQURGO0FBRUUseUNBQU8sTUFBSyxRQUFaO0FBRkY7QUFERixPQURGO0FBUUQ7Ozs7RUFsQmlCTCxNQUFNQyxTOztBQXVCNUIsSUFBTU8sU0FBUyxTQUFUQSxNQUFTO0FBQUEsU0FDYjtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsR0FEYTtBQUFBLENBQWY7O0FBTUU7QUFDQTtBQUNBOztBQUVGQyxTQUFTQyxNQUFULENBQWdCLG9CQUFDLEdBQUQsT0FBaEIsRUFBeUJDLFNBQVNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBekIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZm9ybTE6IHRydWUsXHJcbiAgICAgIGZvcm0yOiBmYWxzZSxcclxuICAgICAgZm9ybTM6IGZhbHNlLFxyXG4gICAgfVxyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoMT5NdWx0aSBQYXJ0IENoZWNrb3V0PC9oMT5cclxuICAgICAgICB7dGhpcy5zdGF0ZS5mb3JtMSA/IDxGb3JtMSAvPiA6IHRoaXMuc3RhdGUuZm9ybTIgPyA8Rm9ybTIgLz4gOiB0aGlzLnN0YXRlLmZvcm0zID8gPEZvcm0zIC8+IDogPFJldmlldyAvPn1cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5cclxuY2xhc3MgRm9ybTEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgfVxyXG4gIGhhbmRsZUZvcm0oZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZUZvcm19PlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCI+PC9pbnB1dD5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCI+PC9pbnB1dD5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5jbGFzcyBGb3JtMiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUZvcm0oZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZUZvcm19PlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiPjwvaW5wdXQ+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIj48L2lucHV0PlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICAgICAgKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2xhc3MgRm9ybTMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBoYW5kbGVGb3JtKGUpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlRm9ybX0+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCI+PC9pbnB1dD5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG5cclxuY29uc3QgUmV2aWV3ID0gKCkgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8aDE+VGhhbmtzIGZvciBzaG9wcGluZyB3aXRoIHVzITwvaDE+XHJcbiAgPC9kaXY+XHJcbilcclxuXHJcbiAgLy8gRjEgY29sbGVjdHMgbmFtZSwgZW1haWwsIGFuZCBwYXNzd29yZCBmb3IgYWNjb3VudCBjcmVhdGlvbi5cclxuICAvLyBGMiBjb2xsZWN0cyBzaGlwIHRvIGFkZHJlc3MgKGxpbmUgMSwgbGluZSAyLCBjaXR5LCBzdGF0ZSwgemlwIGNvZGUpIGFuZCBwaG9uZSBudW1iZXIuXHJcbiAgLy8gRjMgY29sbGVjdHMgY3JlZGl0IGNhcmQgIywgZXhwaXJ5IGRhdGUsIENWViwgYW5kIGJpbGxpbmcgemlwIGNvZGUuXHJcblxyXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpKTsiXX0=