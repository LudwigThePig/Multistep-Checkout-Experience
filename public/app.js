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
      var inputFields = document.getElementsByTagName('input');
      [].forEach.call(inputFields, function (field) {
        if (field.type !== 'submit') {
          return field.value = '';
        }
      });
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
      { className: 'form-plate', id: props.part.meta.name, onSubmit: props.handleSubmit },
      props.part.data.map(function (field, i) {
        return React.createElement(InputField, { field: field,
          handleChange: props.handleChange,
          forms: props.forms,
          key: 'form' + i });
      }),
      React.createElement('input', { value: 'next', type: 'submit' })
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
    React.createElement('br', null),
    React.createElement('input', {
      type: props.field.type,
      name: props.field.name,
      title: props.field.title,
      value: props.forms[props.name],
      onChange: props.handleChange,
      pattern: props.field.pattern,
      required: props.field.required
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
  data: [{ name: 'name', type: 'text', title: 'We are on a first name basis ;)', pattern: '[A-Za-z]*', required: true }, { name: 'email', type: 'text', title: 'Must be a valid email address', pattern: '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$', required: true }, { name: 'password', type: 'password', title: 'must be between 1 and 20 characters', pattern: '.{1,20}', required: true }]
};

var form2 = {
  meta: {
    name: 'form2'
  },
  data: [{ name: 'line1', type: 'text', title: 'Must be a valid street address', pattern: '\\d{1,}\\s*\\w*\\s\\w*[.]{0,}', required: true }, { name: 'line2', type: 'text', title: '', pattern: '.*', required: false }, { name: 'city', type: 'text', title: '', pattern: '\\w*', required: true }, { name: 'state', type: 'text', title: '', pattern: '[A-Za-z]{2}', required: true }, { name: 'zip', type: 'text', title: '', pattern: '\\d{5}', required: true }]
};
var form3 = {
  meta: {
    name: 'form3'
  },
  data: [{ name: 'creditCard', type: 'text', title: 'Must be a valid credit card with no spaces', pattern: '[0-9]{13,16}', required: true }, { name: 'expiration', type: 'text', title: 'must be in mm/yyyy format', pattern: '\\d{2}[/]\\d{4}', required: true }, { name: 'cvv', type: 'text', title: 'Must be between three and four characters', pattern: '\\d{3,3}', required: true }, { name: 'billingZip', type: 'text', title: 'Must be a 5 digit zip code', pattern: '\\d{5}', required: true }]
};

ReactDOM.render(React.createElement(App, null), document.getElementById("root"));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9jb21wb25lbnRzL2FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImZvcm0xIiwiZm9ybTIiLCJmb3JtMyIsInJldmlldyIsImZvcm1EYXRhIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJsaW5lMSIsImxpbmUyIiwiY2l0eSIsInppcCIsImNyZWRpdENhcmQiLCJleHBpcmF0aW9uIiwiY3Z2IiwiYmlsbGluZ1ppcCIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJoYW5kbGVTdWJtaXQiLCJwb3N0RGF0YSIsImUiLCJmaWVsZCIsInRhcmdldCIsInZhbHVlIiwiZHVtbXkiLCJzZXRTdGF0ZSIsInByZXZlbnREZWZhdWx0IiwicGFydCIsImlkIiwiaW50IiwiTnVtYmVyIiwic2xpY2UiLCJuZXh0UGFydCIsImlucHV0RmllbGRzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImZvckVhY2giLCJjYWxsIiwidHlwZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwib3B0aW9ucyIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJjYXRjaCIsImVyciIsIlJlYWN0IiwiQ29tcG9uZW50IiwiRm9ybVZpZXciLCJtZXRhIiwibWFwIiwiaSIsImZvcm1zIiwiSW5wdXRGaWVsZCIsInRpdGxlIiwicGF0dGVybiIsInJlcXVpcmVkIiwiUmV2aWV3IiwiUmVhY3RET00iLCJyZW5kZXIiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGFBQU8sSUFESTtBQUVYQyxhQUFPLEtBRkk7QUFHWEMsYUFBTyxLQUhJO0FBSVhDLGNBQVEsS0FKRztBQUtYQyxn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Iiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZm9ybTE6IHRydWUsXHJcbiAgICAgIGZvcm0yOiBmYWxzZSxcclxuICAgICAgZm9ybTM6IGZhbHNlLFxyXG4gICAgICByZXZpZXc6IGZhbHNlLFxyXG4gICAgICBmb3JtRGF0YSA6IHtcclxuICAgICAgICBuYW1lIDogJycsIGVtYWlsOiAnJywgcGFzc3dvcmQ6ICcnLCAvKmZvcm0gMSovXHJcbiAgICAgICAgbGluZTE6ICcnLCBsaW5lMjogJycsIGNpdHk6ICcnLCAgc3RhdGU6ICcnLCB6aXA6ICcnLCAvKmZvcm0gMiovXHJcbiAgICAgICAgY3JlZGl0Q2FyZDogJycsIGV4cGlyYXRpb246ICcnLCBjdnY6ICcnLCAgYmlsbGluZ1ppcDogJycvKmZvcm0gMyovXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTsgXHJcbiAgICB0aGlzLnBvc3REYXRhID0gdGhpcy5wb3N0RGF0YS5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2hhbmdlKGUpIHtcclxuICAgIGNvbnN0IGZpZWxkID0gZS50YXJnZXQubmFtZTtcclxuICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICBsZXQgZHVtbXkgPSB0aGlzLnN0YXRlLmZvcm1EYXRhO1xyXG4gICAgZHVtbXlbZmllbGRdID0gdmFsdWVcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBmb3JtRGF0YTogZHVtbXlcclxuICAgIH0pXHJcbiAgfVxyXG4gIGhhbmRsZVN1Ym1pdChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBwYXJ0ID0gZS50YXJnZXQuaWQ7XHJcbiAgICBjb25zdCBpbnQgPSBOdW1iZXIocGFydC5zbGljZSgtMSkpICsgMTtcclxuICAgIGxldCBuZXh0UGFydCA9IHBhcnQuc2xpY2UoMCwgLTEpICsgaW50O1xyXG4gICAgaWYgKGludCA+IDMpIHtcclxuICAgICAgbmV4dFBhcnQgPSAncmV2aWV3JztcclxuICAgICAgdGhpcy5wb3N0RGF0YSh0aGlzLnN0YXRlLmZvcm1EYXRhKTtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBbcGFydF06IGZhbHNlLFxyXG4gICAgICBbbmV4dFBhcnRdOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGlucHV0RmllbGRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0Jyk7XHJcbiAgICBbXS5mb3JFYWNoLmNhbGwoaW5wdXRGaWVsZHMsIChmaWVsZCkgPT4ge1xyXG4gICAgICBpZiAoZmllbGQudHlwZSAhPT0gJ3N1Ym1pdCcpIHtcclxuICAgICAgICByZXR1cm4gZmllbGQudmFsdWUgPSAnJztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwb3N0RGF0YShkYXRhKSB7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZldGNoKCcvY2hlY2tvdXREYXRhJywgb3B0aW9ucylcclxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgIC50aGVuKGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSkpXHJcbiAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBpZiAoIXRoaXMuc3RhdGUucmV2aWV3KSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICA8aDE+TXVsdGkgUGFydCBDaGVja291dDwvaDE+XHJcbiAgICAgICAgPEZvcm1WaWV3IHBhcnQ9e3RoaXMuc3RhdGUuZm9ybTEgPyBmb3JtMSA6IHRoaXMuc3RhdGUuZm9ybTIgPyBmb3JtMiA6IGZvcm0zfVxyXG4gICAgICAgICAgaGFuZGxlQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gXHJcbiAgICAgICAgICBoYW5kbGVTdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fVxyXG4gICAgICAgICAgZm9ybXM9e3RoaXMuc3RhdGUuZm9ybURhdGF9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoMT5NdWx0aSBQYXJ0IENoZWNrb3V0PC9oMT5cclxuICAgICAgICA8UmV2aWV3IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IEZvcm1WaWV3ID0gKHByb3BzKSA9PiAoXHJcbiAgPGRpdj5cclxuICAgIDxmb3JtIGNsYXNzTmFtZT0nZm9ybS1wbGF0ZScgaWQ9e3Byb3BzLnBhcnQubWV0YS5uYW1lfSBvblN1Ym1pdD17cHJvcHMuaGFuZGxlU3VibWl0fT5cclxuICAgICAge3Byb3BzLnBhcnQuZGF0YS5tYXAoKGZpZWxkLCBpKSA9PiBcclxuICAgICAgICA8SW5wdXRGaWVsZCBmaWVsZD17ZmllbGR9IFxyXG4gICAgICAgIGhhbmRsZUNoYW5nZT17cHJvcHMuaGFuZGxlQ2hhbmdlfSBcclxuICAgICAgICBmb3Jtcz17cHJvcHMuZm9ybXN9IFxyXG4gICAgICAgIGtleT17YGZvcm0ke2l9YH0gLz4pfVxyXG4gICAgICA8aW5wdXQgdmFsdWU9XCJuZXh0XCIgdHlwZT1cInN1Ym1pdFwiPjwvaW5wdXQ+XHJcbiAgICA8L2Zvcm0+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5jb25zdCBJbnB1dEZpZWxkID0gKHByb3BzKSA9PiB7IFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgPGxhYmVsPntwcm9wcy5maWVsZC5uYW1lfTwvbGFiZWw+XHJcbiAgICA8YnIgLz5cclxuICAgIDxpbnB1dFxyXG4gICAgICB0eXBlPXtwcm9wcy5maWVsZC50eXBlfSBcclxuICAgICAgbmFtZT17cHJvcHMuZmllbGQubmFtZX1cclxuICAgICAgdGl0bGU9e3Byb3BzLmZpZWxkLnRpdGxlfVxyXG4gICAgICB2YWx1ZT17cHJvcHMuZm9ybXNbcHJvcHMubmFtZV19XHJcbiAgICAgIG9uQ2hhbmdlPXtwcm9wcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgIHBhdHRlcm49e3Byb3BzLmZpZWxkLnBhdHRlcm59XHJcbiAgICAgIHJlcXVpcmVkPXtwcm9wcy5maWVsZC5yZXF1aXJlZH1cclxuICAgICAgLz48YnIgLz4gXHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG59XHJcblxyXG5jb25zdCBSZXZpZXcgPSAoKSA9PiAoXHJcbiAgPGRpdj5cclxuICAgIDxoMT5UaGFua3MgZm9yIGJ1eWluZyBzdHVmZiE8L2gxPlxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuY29uc3QgZm9ybTEgPSB7XHJcbiAgbWV0YToge1xyXG4gICAgbmFtZTogJ2Zvcm0xJ1xyXG4gIH0sXHJcbiAgZGF0YTogW1xyXG4gIHtuYW1lOiAnbmFtZScsIHR5cGU6ICd0ZXh0JywgdGl0bGU6ICdXZSBhcmUgb24gYSBmaXJzdCBuYW1lIGJhc2lzIDspJywgcGF0dGVybjogJ1tBLVphLXpdKicsIHJlcXVpcmVkOiB0cnVlfSwgXHJcbiAge25hbWU6ICdlbWFpbCcsIHR5cGU6ICd0ZXh0JywgdGl0bGU6ICdNdXN0IGJlIGEgdmFsaWQgZW1haWwgYWRkcmVzcycsIHBhdHRlcm46ICdeW2EtejAtOS5fJSstXStAW2EtejAtOS4tXStcXC5bYS16XXsyLDR9JCcscmVxdWlyZWQ6IHRydWV9LCBcclxuICB7bmFtZTogJ3Bhc3N3b3JkJywgdHlwZTogJ3Bhc3N3b3JkJywgdGl0bGU6ICdtdXN0IGJlIGJldHdlZW4gMSBhbmQgMjAgY2hhcmFjdGVycycsIHBhdHRlcm46ICcuezEsMjB9JywgcmVxdWlyZWQ6IHRydWV9XHJcbiAgXVxyXG59O1xyXG5cclxuY29uc3QgZm9ybTIgPSB7XHJcbiAgbWV0YToge1xyXG4gICAgbmFtZTogJ2Zvcm0yJ1xyXG4gIH0sXHJcbiAgZGF0YTogW1xyXG4gICAge25hbWU6ICdsaW5lMScsIHR5cGU6ICd0ZXh0JywgdGl0bGU6ICdNdXN0IGJlIGEgdmFsaWQgc3RyZWV0IGFkZHJlc3MnLCBwYXR0ZXJuOiAnXFxcXGR7MSx9XFxcXHMqXFxcXHcqXFxcXHNcXFxcdypbLl17MCx9JywgcmVxdWlyZWQ6IHRydWV9LCBcclxuICAgIHtuYW1lOiAnbGluZTInLCB0eXBlOiAndGV4dCcsIHRpdGxlOiAnJywgcGF0dGVybjogJy4qJywgcmVxdWlyZWQ6IGZhbHNlfSwgXHJcbiAgICB7bmFtZTogJ2NpdHknLCB0eXBlOiAndGV4dCcsIHRpdGxlOiAnJywgcGF0dGVybjogJ1xcXFx3KicsIHJlcXVpcmVkOiB0cnVlfSwgXHJcbiAgICB7bmFtZTogJ3N0YXRlJywgdHlwZTogJ3RleHQnLCB0aXRsZTogJycsIHBhdHRlcm46ICdbQS1aYS16XXsyfScsIHJlcXVpcmVkOiB0cnVlfSwgXHJcbiAgICB7bmFtZTogJ3ppcCcsIHR5cGU6ICd0ZXh0JywgdGl0bGU6ICcnLCBwYXR0ZXJuOiAnXFxcXGR7NX0nLCByZXF1aXJlZDogdHJ1ZX1cclxuICBdXHJcbn07XHJcbmNvbnN0IGZvcm0zID0ge1xyXG4gIG1ldGE6IHtcclxuICAgIG5hbWU6ICdmb3JtMydcclxuICB9LFxyXG4gIGRhdGE6IFtcclxuICAgIHtuYW1lOiAnY3JlZGl0Q2FyZCcsIHR5cGU6ICd0ZXh0JywgdGl0bGU6ICdNdXN0IGJlIGEgdmFsaWQgY3JlZGl0IGNhcmQgd2l0aCBubyBzcGFjZXMnLCBwYXR0ZXJuOiAnWzAtOV17MTMsMTZ9JywgcmVxdWlyZWQ6IHRydWV9LCBcclxuICAgIHtuYW1lOiAnZXhwaXJhdGlvbicsIHR5cGU6ICd0ZXh0JywgdGl0bGU6ICdtdXN0IGJlIGluIG1tL3l5eXkgZm9ybWF0JywgcGF0dGVybjogJ1xcXFxkezJ9Wy9dXFxcXGR7NH0nLCByZXF1aXJlZDogdHJ1ZX0sIFxyXG4gICAge25hbWU6ICdjdnYnLCB0eXBlOiAndGV4dCcsIHRpdGxlOiAnTXVzdCBiZSBiZXR3ZWVuIHRocmVlIGFuZCBmb3VyIGNoYXJhY3RlcnMnLCBwYXR0ZXJuOiAnXFxcXGR7MywzfScsIHJlcXVpcmVkOiB0cnVlfSwgXHJcbiAgICB7bmFtZTogJ2JpbGxpbmdaaXAnLCB0eXBlOiAndGV4dCcsIHRpdGxlOiAnTXVzdCBiZSBhIDUgZGlnaXQgemlwIGNvZGUnLCBwYXR0ZXJuOiAnXFxcXGR7NX0nLCByZXF1aXJlZDogdHJ1ZX1cclxuICBdXHJcbn07XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpKTsiXX0=