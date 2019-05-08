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
      review: false,
      formData: {
        name: '', email: '', password: '', /*form 1*/
        line1: '', line2: '', city: '', state: '', zip: '', /*form 2*/
        creditCard: '', expiration: '', cvv: '', billingZip: '' /*form 3*/
      }
    };
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.postData = _this.postData.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'handleChange',
    value: function handleChange(e) {
      var field = e.target.name;
      var value = e.target.value;
      var dummy = this.state.formData;
      dummy[field] = value;
      this.setState({
        formData: dummy
      });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      var _setState;

      e.preventDefault();
      var part = e.target.id;
      var int = Number(part.slice(-1)) + 1;
      var nextPart = part.slice(0, -1) + int;
      if (int > 3) {
        nextPart = 'review';
        this.postData(this.state.formData);
      }
      this.setState((_setState = {}, _defineProperty(_setState, part, false), _defineProperty(_setState, nextPart, true), _setState));
    }
  }, {
    key: 'postData',
    value: function postData(data) {
      console.log(data);
      var options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      };
      return fetch('/checkoutData', options).then(function (res) {
        return res.json();
      }).then(function (data) {
        return console.log(data);
      }).catch(function (err) {
        return console.log(err);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.state.review) {
        return React.createElement(
          'div',
          null,
          React.createElement(
            'h1',
            null,
            'Multi Part Checkout'
          ),
          React.createElement(FormView, { part: this.state.form1 ? form1 : this.state.form2 ? form2 : form3,
            handleChange: this.handleChange,
            handleSubmit: this.handleSubmit,
            forms: this.state.formData })
        );
      } else {
        return React.createElement(
          'div',
          null,
          React.createElement(
            'h1',
            null,
            'Multi Part Checkout'
          ),
          React.createElement(Review, null)
        );
      }
    }
  }]);

  return App;
}(React.Component);

var FormView = function FormView(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'form',
      { id: props.part.meta.name, onSubmit: props.handleSubmit },
      props.part.data.map(function (field, i) {
        return React.createElement(InputField, { field: field,
          handleChange: props.handleChange,
          forms: props.forms,
          key: 'form' + i });
      }),
      React.createElement('input', { type: 'submit' })
    )
  );
};

var InputField = function InputField(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'label',
      null,
      props.field.name
    ),
    React.createElement('input', {
      type: props.field.type,
      name: props.field.name,
      value: props.forms[props.name],
      onChange: props.handleChange
    }),
    React.createElement('br', null)
  );
};

var Review = function Review() {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Thanks for buying stuff!'
    )
  );
};

var form1 = {
  meta: {
    name: 'form1'
  },
  data: [{ name: 'name', type: 'text' }, { name: 'email', type: 'text' }, { name: 'password', type: 'text' }]
};

var form2 = {
  meta: {
    name: 'form2'
  },
  data: [{ name: 'line1', type: 'text' }, { name: 'line2', type: 'text' }, { name: 'city', type: 'text' }, { name: 'state', type: 'text' }, { name: 'zip', type: 'text' }]
};
var form3 = {
  meta: {
    name: 'form3'
  },
  data: [{ name: 'creditCard', type: 'text' }, { name: 'expiration', type: 'text' }, { name: 'cvv', type: 'text' }, { name: 'billingZip', type: 'text' }]
};

ReactDOM.render(React.createElement(App, null), document.getElementById("root"));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9jb21wb25lbnRzL2FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImZvcm0xIiwiZm9ybTIiLCJmb3JtMyIsInJldmlldyIsImZvcm1EYXRhIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJsaW5lMSIsImxpbmUyIiwiY2l0eSIsInppcCIsImNyZWRpdENhcmQiLCJleHBpcmF0aW9uIiwiY3Z2IiwiYmlsbGluZ1ppcCIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJoYW5kbGVTdWJtaXQiLCJwb3N0RGF0YSIsImUiLCJmaWVsZCIsInRhcmdldCIsInZhbHVlIiwiZHVtbXkiLCJzZXRTdGF0ZSIsInByZXZlbnREZWZhdWx0IiwicGFydCIsImlkIiwiaW50IiwiTnVtYmVyIiwic2xpY2UiLCJuZXh0UGFydCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwib3B0aW9ucyIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJjYXRjaCIsImVyciIsIlJlYWN0IiwiQ29tcG9uZW50IiwiRm9ybVZpZXciLCJtZXRhIiwibWFwIiwiaSIsImZvcm1zIiwiSW5wdXRGaWVsZCIsInR5cGUiLCJSZXZpZXciLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxhQUFPLElBREk7QUFFWEMsYUFBTyxLQUZJO0FBR1hDLGFBQU8sS0FISTtBQUlYQyxjQUFRLEtBSkc7QUFLWEMsZ0JBQVc7QUFDVEMsY0FBTyxFQURFLEVBQ0VDLE9BQU8sRUFEVCxFQUNhQyxVQUFVLEVBRHZCLEVBQzJCO0FBQ3BDQyxlQUFPLEVBRkUsRUFFRUMs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Qm1ELE1BQU0sTUFBekIsRUFITTtBQUpNLENBQWQ7O0FBV0EsSUFBTXZELFFBQVE7QUFDWmtELFFBQU07QUFDSjlDLFVBQU07QUFERixHQURNO0FBSVo0QixRQUFNLENBQ0osRUFBQzVCLE1BQU0sT0FBUCxFQUFnQm1ELE1BQU0sTUFBdEIsRUFESSxFQUVKLEVBQUNuRCxNQUFNLE9BQVAsRUFBZ0JtRCxNQUFNLE1BQXRCLEVBRkksRUFHSixFQUFDbkQsTUFBTSxNQUFQLEVBQWVtRCxNQUFNLE1BQXJCLEVBSEksRUFJSixFQUFDbkQsTUFBTSxPQUFQLEVBQWdCbUQsTUFBTSxNQUF0QixFQUpJLEVBS0osRUFBQ25ELE1BQU0sS0FBUCxFQUFjbUQsTUFBTSxNQUFwQixFQUxJO0FBSk0sQ0FBZDtBQVlBLElBQU10RCxRQUFRO0FBQ1ppRCxRQUFNO0FBQ0o5QyxVQUFNO0FBREYsR0FETTtBQUlaNEIsUUFBTSxDQUNKLEVBQUM1QixNQUFNLFlBQVAsRUFBcUJtRCxNQUFNLE1BQTNCLEVBREksRUFFSixFQUFDbkQsTUFBTSxZQUFQLEVBQXFCbUQsTUFBTSxNQUEzQixFQUZJLEVBR0osRUFBQ25ELE1BQU0sS0FBUCxFQUFjbUQsTUFBTSxNQUFwQixFQUhJLEVBSUosRUFBQ25ELE1BQU0sWUFBUCxFQUFxQm1ELE1BQU0sTUFBM0IsRUFKSTtBQUpNLENBQWQ7O0FBWUFFLFNBQVNDLE1BQVQsQ0FBZ0Isb0JBQUMsR0FBRCxPQUFoQixFQUF5QkMsU0FBU0MsY0FBVCxDQUF3QixNQUF4QixDQUF6QiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBmb3JtMTogdHJ1ZSxcclxuICAgICAgZm9ybTI6IGZhbHNlLFxyXG4gICAgICBmb3JtMzogZmFsc2UsXHJcbiAgICAgIHJldmlldzogZmFsc2UsXHJcbiAgICAgIGZvcm1EYXRhIDoge1xyXG4gICAgICAgIG5hbWUgOiAnJywgZW1haWw6ICcnLCBwYXNzd29yZDogJycsIC8qZm9ybSAxKi9cclxuICAgICAgICBsaW5lMTogJycsIGxpbmUyOiAnJywgY2l0eTogJycsICBzdGF0ZTogJycsIHppcDogJycsIC8qZm9ybSAyKi9cclxuICAgICAgICBjcmVkaXRDYXJkOiAnJywgZXhwaXJhdGlvbjogJycsIGN2djogJycsICBiaWxsaW5nWmlwOiAnJy8qZm9ybSAzKi9cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpOyBcclxuICAgIHRoaXMucG9zdERhdGEgPSB0aGlzLnBvc3REYXRhLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVDaGFuZ2UoZSkge1xyXG4gICAgY29uc3QgZmllbGQgPSBlLnRhcmdldC5uYW1lO1xyXG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIGxldCBkdW1teSA9IHRoaXMuc3RhdGUuZm9ybURhdGE7XHJcbiAgICBkdW1teVtmaWVsZF0gPSB2YWx1ZVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGZvcm1EYXRhOiBkdW1teVxyXG4gICAgfSlcclxuICB9XHJcbiAgaGFuZGxlU3VibWl0KGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHBhcnQgPSBlLnRhcmdldC5pZDtcclxuICAgIGNvbnN0IGludCA9IE51bWJlcihwYXJ0LnNsaWNlKC0xKSkgKyAxO1xyXG4gICAgbGV0IG5leHRQYXJ0ID0gcGFydC5zbGljZSgwLCAtMSkgKyBpbnQ7XHJcbiAgICBpZiAoaW50ID4gMykge1xyXG4gICAgICBuZXh0UGFydCA9ICdyZXZpZXcnO1xyXG4gICAgICB0aGlzLnBvc3REYXRhKHRoaXMuc3RhdGUuZm9ybURhdGEpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIFtwYXJ0XTogZmFsc2UsXHJcbiAgICAgIFtuZXh0UGFydF06IHRydWVcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcG9zdERhdGEoZGF0YSkge1xyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmZXRjaCgnL2NoZWNrb3V0RGF0YScsIG9wdGlvbnMpXHJcbiAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAudGhlbihkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpKVxyXG4gICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgaWYgKCF0aGlzLnN0YXRlLnJldmlldykge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgxPk11bHRpIFBhcnQgQ2hlY2tvdXQ8L2gxPlxyXG4gICAgICAgIDxGb3JtVmlldyBwYXJ0PXt0aGlzLnN0YXRlLmZvcm0xID8gZm9ybTEgOiB0aGlzLnN0YXRlLmZvcm0yID8gZm9ybTIgOiBmb3JtM31cclxuICAgICAgICAgIGhhbmRsZUNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IFxyXG4gICAgICAgICAgaGFuZGxlU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH1cclxuICAgICAgICAgIGZvcm1zPXt0aGlzLnN0YXRlLmZvcm1EYXRhfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDE+TXVsdGkgUGFydCBDaGVja291dDwvaDE+XHJcbiAgICAgICAgPFJldmlldyAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBGb3JtVmlldyA9IChwcm9wcykgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8Zm9ybSBpZD17cHJvcHMucGFydC5tZXRhLm5hbWV9IG9uU3VibWl0PXtwcm9wcy5oYW5kbGVTdWJtaXR9PlxyXG4gICAgICB7cHJvcHMucGFydC5kYXRhLm1hcCgoZmllbGQsIGkpID0+IFxyXG4gICAgICAgIDxJbnB1dEZpZWxkIGZpZWxkPXtmaWVsZH0gXHJcbiAgICAgICAgaGFuZGxlQ2hhbmdlPXtwcm9wcy5oYW5kbGVDaGFuZ2V9IFxyXG4gICAgICAgIGZvcm1zPXtwcm9wcy5mb3Jtc30gXHJcbiAgICAgICAga2V5PXtgZm9ybSR7aX1gfSAvPil9XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCI+PC9pbnB1dD5cclxuICAgIDwvZm9ybT5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmNvbnN0IElucHV0RmllbGQgPSAocHJvcHMpID0+IChcclxuICA8ZGl2PlxyXG4gICAgPGxhYmVsPntwcm9wcy5maWVsZC5uYW1lfTwvbGFiZWw+XHJcbiAgICA8aW5wdXQgXHJcbiAgICAgIHR5cGU9e3Byb3BzLmZpZWxkLnR5cGV9IFxyXG4gICAgICBuYW1lPXtwcm9wcy5maWVsZC5uYW1lfVxyXG4gICAgICB2YWx1ZT17cHJvcHMuZm9ybXNbcHJvcHMubmFtZV19XHJcbiAgICAgIG9uQ2hhbmdlPXtwcm9wcy5oYW5kbGVDaGFuZ2V9IFxyXG4gICAgICA+PC9pbnB1dD48YnIgLz4gXHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5jb25zdCBSZXZpZXcgPSAoKSA9PiAoXHJcbiAgPGRpdj5cclxuICAgIDxoMT5UaGFua3MgZm9yIGJ1eWluZyBzdHVmZiE8L2gxPlxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuY29uc3QgZm9ybTEgPSB7XHJcbiAgbWV0YToge1xyXG4gICAgbmFtZTogJ2Zvcm0xJ1xyXG4gIH0sXHJcbiAgZGF0YTogW1xyXG4gIHtuYW1lOiAnbmFtZScsIHR5cGU6ICd0ZXh0J30sIFxyXG4gIHtuYW1lOiAnZW1haWwnLCB0eXBlOiAndGV4dCd9LCBcclxuICB7bmFtZTogJ3Bhc3N3b3JkJywgdHlwZTogJ3RleHQnfVxyXG4gIF1cclxufTtcclxuXHJcbmNvbnN0IGZvcm0yID0ge1xyXG4gIG1ldGE6IHtcclxuICAgIG5hbWU6ICdmb3JtMidcclxuICB9LFxyXG4gIGRhdGE6IFtcclxuICAgIHtuYW1lOiAnbGluZTEnLCB0eXBlOiAndGV4dCd9LCBcclxuICAgIHtuYW1lOiAnbGluZTInLCB0eXBlOiAndGV4dCd9LCBcclxuICAgIHtuYW1lOiAnY2l0eScsIHR5cGU6ICd0ZXh0J30sIFxyXG4gICAge25hbWU6ICdzdGF0ZScsIHR5cGU6ICd0ZXh0J30sIFxyXG4gICAge25hbWU6ICd6aXAnLCB0eXBlOiAndGV4dCd9XHJcbiAgXVxyXG59O1xyXG5jb25zdCBmb3JtMyA9IHtcclxuICBtZXRhOiB7XHJcbiAgICBuYW1lOiAnZm9ybTMnXHJcbiAgfSxcclxuICBkYXRhOiBbXHJcbiAgICB7bmFtZTogJ2NyZWRpdENhcmQnLCB0eXBlOiAndGV4dCd9LCBcclxuICAgIHtuYW1lOiAnZXhwaXJhdGlvbicsIHR5cGU6ICd0ZXh0J30sIFxyXG4gICAge25hbWU6ICdjdnYnLCB0eXBlOiAndGV4dCd9LCBcclxuICAgIHtuYW1lOiAnYmlsbGluZ1ppcCcsIHR5cGU6ICd0ZXh0J31cclxuICBdXHJcbn07XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpKTsiXX0=