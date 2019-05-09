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
    _this.goBack = _this.goBack.bind(_this);
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
    key: 'goBack',
    value: function goBack(e) {
      e.preventDefault();
      if (this.state.form2) {
        this.setState({
          form1: true,
          form2: false
        });
      } else if (this.state.form3) {
        this.setState({
          form2: true,
          form3: false
        });
      }
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
            forms: this.state.formData }),
          React.createElement('input', { value: 'Go Back', type: 'submit', onClick: this.goBack })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9jb21wb25lbnRzL2FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImZvcm0xIiwiZm9ybTIiLCJmb3JtMyIsInJldmlldyIsImZvcm1EYXRhIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJsaW5lMSIsImxpbmUyIiwiY2l0eSIsInppcCIsImNyZWRpdENhcmQiLCJleHBpcmF0aW9uIiwiY3Z2IiwiYmlsbGluZ1ppcCIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJoYW5kbGVTdWJtaXQiLCJwb3N0RGF0YSIsImdvQmFjayIsImUiLCJmaWVsZCIsInRhcmdldCIsInZhbHVlIiwiZHVtbXkiLCJzZXRTdGF0ZSIsInByZXZlbnREZWZhdWx0IiwicGFydCIsImlkIiwiaW50IiwiTnVtYmVyIiwic2xpY2UiLCJuZXh0UGFydCIsImlucHV0RmllbGRzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImZvckVhY2giLCJjYWxsIiwidHlwZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwib3B0aW9ucyIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJjYXRjaCIsImVyciIsIlJlYWN0IiwiQ29tcG9uZW50IiwiRm9ybVZpZXciLCJtZXRhIiwibWFwIiwiaSIsImZvcm1zIiwiSW5wdXRGaWVsZCIsInRpdGxlIiwicGF0dGVybiIsInJlcXVpcmVkIiwiUmV2aWV3IiwiUmVhY3RET00iLCJyZW5kZXIiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGFBQU8sSUFESTtBQUVYQyxhQUFPLEtBRkk7QUFHWEMsYUFBTyxLQUhJO0FBSVhDLGNBQVEsS0FK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QyxNQUFNLE1BQTNCLEVBQW1Dd0IsT0FBTywyQkFBMUMsRUFBdUVDLFNBQVMsaUJBQWhGLEVBQW1HQyxVQUFVLElBQTdHLEVBRkksRUFHSixFQUFDNUQsTUFBTSxLQUFQLEVBQWNrQyxNQUFNLE1BQXBCLEVBQTRCd0IsT0FBTywyQ0FBbkMsRUFBZ0ZDLFNBQVMsVUFBekYsRUFBcUdDLFVBQVUsSUFBL0csRUFISSxFQUlKLEVBQUM1RCxNQUFNLFlBQVAsRUFBcUJrQyxNQUFNLE1BQTNCLEVBQW1Dd0IsT0FBTyw0QkFBMUMsRUFBd0VDLFNBQVMsUUFBakYsRUFBMkZDLFVBQVUsSUFBckcsRUFKSTtBQUpNLENBQWQ7O0FBWUFFLFNBQVNDLE1BQVQsQ0FBZ0Isb0JBQUMsR0FBRCxPQUFoQixFQUF5QmpDLFNBQVNrQyxjQUFULENBQXdCLE1BQXhCLENBQXpCIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGZvcm0xOiB0cnVlLFxyXG4gICAgICBmb3JtMjogZmFsc2UsXHJcbiAgICAgIGZvcm0zOiBmYWxzZSxcclxuICAgICAgcmV2aWV3OiBmYWxzZSxcclxuICAgICAgZm9ybURhdGEgOiB7XHJcbiAgICAgICAgbmFtZSA6ICcnLCBlbWFpbDogJycsIHBhc3N3b3JkOiAnJywgLypmb3JtIDEqL1xyXG4gICAgICAgIGxpbmUxOiAnJywgbGluZTI6ICcnLCBjaXR5OiAnJywgIHN0YXRlOiAnJywgemlwOiAnJywgLypmb3JtIDIqL1xyXG4gICAgICAgIGNyZWRpdENhcmQ6ICcnLCBleHBpcmF0aW9uOiAnJywgY3Z2OiAnJywgIGJpbGxpbmdaaXA6ICcnLypmb3JtIDMqL1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7IFxyXG4gICAgdGhpcy5wb3N0RGF0YSA9IHRoaXMucG9zdERhdGEuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZ29CYWNrID0gdGhpcy5nb0JhY2suYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUNoYW5nZShlKSB7XHJcbiAgICBjb25zdCBmaWVsZCA9IGUudGFyZ2V0Lm5hbWU7XHJcbiAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgbGV0IGR1bW15ID0gdGhpcy5zdGF0ZS5mb3JtRGF0YTtcclxuICAgIGR1bW15W2ZpZWxkXSA9IHZhbHVlXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgZm9ybURhdGE6IGR1bW15XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZ29CYWNrKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmICh0aGlzLnN0YXRlLmZvcm0yKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGZvcm0xOiB0cnVlLFxyXG4gICAgICAgIGZvcm0yOiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmZvcm0zKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGZvcm0yOiB0cnVlLFxyXG4gICAgICAgIGZvcm0zOiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlU3VibWl0KGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHBhcnQgPSBlLnRhcmdldC5pZDtcclxuICAgIGNvbnN0IGludCA9IE51bWJlcihwYXJ0LnNsaWNlKC0xKSkgKyAxO1xyXG4gICAgbGV0IG5leHRQYXJ0ID0gcGFydC5zbGljZSgwLCAtMSkgKyBpbnQ7XHJcbiAgICBpZiAoaW50ID4gMykge1xyXG4gICAgICBuZXh0UGFydCA9ICdyZXZpZXcnO1xyXG4gICAgICB0aGlzLnBvc3REYXRhKHRoaXMuc3RhdGUuZm9ybURhdGEpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIFtwYXJ0XTogZmFsc2UsXHJcbiAgICAgIFtuZXh0UGFydF06IHRydWVcclxuICAgIH0pO1xyXG4gICAgY29uc3QgaW5wdXRGaWVsZHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKTtcclxuICAgIFtdLmZvckVhY2guY2FsbChpbnB1dEZpZWxkcywgKGZpZWxkKSA9PiB7XHJcbiAgICAgIGlmIChmaWVsZC50eXBlICE9PSAnc3VibWl0Jykge1xyXG4gICAgICAgIHJldHVybiBmaWVsZC52YWx1ZSA9ICcnO1xyXG4gICAgICB9XHJcbiAgICB9KTsgXHJcbiAgfVxyXG5cclxuICBwb3N0RGF0YShkYXRhKSB7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZldGNoKCcvY2hlY2tvdXREYXRhJywgb3B0aW9ucylcclxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgIC50aGVuKGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSkpXHJcbiAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBpZiAoIXRoaXMuc3RhdGUucmV2aWV3KSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxoMT5NdWx0aSBQYXJ0IENoZWNrb3V0PC9oMT5cclxuICAgICAgICAgIDxGb3JtVmlldyBwYXJ0PXt0aGlzLnN0YXRlLmZvcm0xID8gZm9ybTEgOiB0aGlzLnN0YXRlLmZvcm0yID8gZm9ybTIgOiBmb3JtM31cclxuICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gXHJcbiAgICAgICAgICAgIGhhbmRsZVN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9XHJcbiAgICAgICAgICAgIGZvcm1zPXt0aGlzLnN0YXRlLmZvcm1EYXRhfSAvPlxyXG4gICAgICAgICAgICA8aW5wdXQgdmFsdWU9XCJHbyBCYWNrXCIgdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9e3RoaXMuZ29CYWNrfT48L2lucHV0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoMT5NdWx0aSBQYXJ0IENoZWNrb3V0PC9oMT5cclxuICAgICAgICA8UmV2aWV3IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IEZvcm1WaWV3ID0gKHByb3BzKSA9PiAoXHJcbiAgPGRpdj5cclxuICAgIDxmb3JtIGNsYXNzTmFtZT0nZm9ybS1wbGF0ZScgaWQ9e3Byb3BzLnBhcnQubWV0YS5uYW1lfSBvblN1Ym1pdD17cHJvcHMuaGFuZGxlU3VibWl0fT5cclxuICAgICAge3Byb3BzLnBhcnQuZGF0YS5tYXAoKGZpZWxkLCBpKSA9PiBcclxuICAgICAgICA8SW5wdXRGaWVsZCBmaWVsZD17ZmllbGR9IFxyXG4gICAgICAgIGhhbmRsZUNoYW5nZT17cHJvcHMuaGFuZGxlQ2hhbmdlfSBcclxuICAgICAgICBmb3Jtcz17cHJvcHMuZm9ybXN9IFxyXG4gICAgICAgIGtleT17YGZvcm0ke2l9YH0gLz4pfVxyXG4gICAgICA8aW5wdXQgdmFsdWU9XCJuZXh0XCIgdHlwZT1cInN1Ym1pdFwiPjwvaW5wdXQ+XHJcbiAgICA8L2Zvcm0+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5jb25zdCBJbnB1dEZpZWxkID0gKHByb3BzKSA9PiB7IFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgPGxhYmVsPntwcm9wcy5maWVsZC5uYW1lfTwvbGFiZWw+XHJcbiAgICA8YnIgLz5cclxuICAgIDxpbnB1dFxyXG4gICAgICB0eXBlPXtwcm9wcy5maWVsZC50eXBlfSBcclxuICAgICAgbmFtZT17cHJvcHMuZmllbGQubmFtZX1cclxuICAgICAgdGl0bGU9e3Byb3BzLmZpZWxkLnRpdGxlfVxyXG4gICAgICB2YWx1ZT17cHJvcHMuZm9ybXNbcHJvcHMubmFtZV19XHJcbiAgICAgIG9uQ2hhbmdlPXtwcm9wcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgIHBhdHRlcm49e3Byb3BzLmZpZWxkLnBhdHRlcm59XHJcbiAgICAgIHJlcXVpcmVkPXtwcm9wcy5maWVsZC5yZXF1aXJlZH1cclxuICAgICAgLz48YnIgLz4gXHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG59XHJcblxyXG5jb25zdCBSZXZpZXcgPSAoKSA9PiAoXHJcbiAgPGRpdj5cclxuICAgIDxoMT5UaGFua3MgZm9yIGJ1eWluZyBzdHVmZiE8L2gxPlxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuY29uc3QgZm9ybTEgPSB7XHJcbiAgbWV0YToge1xyXG4gICAgbmFtZTogJ2Zvcm0xJ1xyXG4gIH0sXHJcbiAgZGF0YTogW1xyXG4gIHtuYW1lOiAnbmFtZScsIHR5cGU6ICd0ZXh0JywgdGl0bGU6ICdXZSBhcmUgb24gYSBmaXJzdCBuYW1lIGJhc2lzIDspJywgcGF0dGVybjogJ1tBLVphLXpdKicsIHJlcXVpcmVkOiB0cnVlfSwgXHJcbiAge25hbWU6ICdlbWFpbCcsIHR5cGU6ICd0ZXh0JywgdGl0bGU6ICdNdXN0IGJlIGEgdmFsaWQgZW1haWwgYWRkcmVzcycsIHBhdHRlcm46ICdeW2EtejAtOS5fJSstXStAW2EtejAtOS4tXStcXC5bYS16XXsyLDR9JCcscmVxdWlyZWQ6IHRydWV9LCBcclxuICB7bmFtZTogJ3Bhc3N3b3JkJywgdHlwZTogJ3Bhc3N3b3JkJywgdGl0bGU6ICdtdXN0IGJlIGJldHdlZW4gMSBhbmQgMjAgY2hhcmFjdGVycycsIHBhdHRlcm46ICcuezEsMjB9JywgcmVxdWlyZWQ6IHRydWV9XHJcbiAgXVxyXG59O1xyXG5cclxuY29uc3QgZm9ybTIgPSB7XHJcbiAgbWV0YToge1xyXG4gICAgbmFtZTogJ2Zvcm0yJ1xyXG4gIH0sXHJcbiAgZGF0YTogW1xyXG4gICAge25hbWU6ICdsaW5lMScsIHR5cGU6ICd0ZXh0JywgdGl0bGU6ICdNdXN0IGJlIGEgdmFsaWQgc3RyZWV0IGFkZHJlc3MnLCBwYXR0ZXJuOiAnXFxcXGR7MSx9XFxcXHMqXFxcXHcqXFxcXHNcXFxcdypbLl17MCx9JywgcmVxdWlyZWQ6IHRydWV9LCBcclxuICAgIHtuYW1lOiAnbGluZTInLCB0eXBlOiAndGV4dCcsIHRpdGxlOiAnJywgcGF0dGVybjogJy4qJywgcmVxdWlyZWQ6IGZhbHNlfSwgXHJcbiAgICB7bmFtZTogJ2NpdHknLCB0eXBlOiAndGV4dCcsIHRpdGxlOiAnJywgcGF0dGVybjogJ1xcXFx3KicsIHJlcXVpcmVkOiB0cnVlfSwgXHJcbiAgICB7bmFtZTogJ3N0YXRlJywgdHlwZTogJ3RleHQnLCB0aXRsZTogJycsIHBhdHRlcm46ICdbQS1aYS16XXsyfScsIHJlcXVpcmVkOiB0cnVlfSwgXHJcbiAgICB7bmFtZTogJ3ppcCcsIHR5cGU6ICd0ZXh0JywgdGl0bGU6ICcnLCBwYXR0ZXJuOiAnXFxcXGR7NX0nLCByZXF1aXJlZDogdHJ1ZX1cclxuICBdXHJcbn07XHJcbmNvbnN0IGZvcm0zID0ge1xyXG4gIG1ldGE6IHtcclxuICAgIG5hbWU6ICdmb3JtMydcclxuICB9LFxyXG4gIGRhdGE6IFtcclxuICAgIHtuYW1lOiAnY3JlZGl0Q2FyZCcsIHR5cGU6ICd0ZXh0JywgdGl0bGU6ICdNdXN0IGJlIGEgdmFsaWQgY3JlZGl0IGNhcmQgd2l0aCBubyBzcGFjZXMnLCBwYXR0ZXJuOiAnWzAtOV17MTMsMTZ9JywgcmVxdWlyZWQ6IHRydWV9LCBcclxuICAgIHtuYW1lOiAnZXhwaXJhdGlvbicsIHR5cGU6ICd0ZXh0JywgdGl0bGU6ICdtdXN0IGJlIGluIG1tL3l5eXkgZm9ybWF0JywgcGF0dGVybjogJ1xcXFxkezJ9Wy9dXFxcXGR7NH0nLCByZXF1aXJlZDogdHJ1ZX0sIFxyXG4gICAge25hbWU6ICdjdnYnLCB0eXBlOiAndGV4dCcsIHRpdGxlOiAnTXVzdCBiZSBiZXR3ZWVuIHRocmVlIGFuZCBmb3VyIGNoYXJhY3RlcnMnLCBwYXR0ZXJuOiAnXFxcXGR7MywzfScsIHJlcXVpcmVkOiB0cnVlfSwgXHJcbiAgICB7bmFtZTogJ2JpbGxpbmdaaXAnLCB0eXBlOiAndGV4dCcsIHRpdGxlOiAnTXVzdCBiZSBhIDUgZGlnaXQgemlwIGNvZGUnLCBwYXR0ZXJuOiAnXFxcXGR7NX0nLCByZXF1aXJlZDogdHJ1ZX1cclxuICBdXHJcbn07XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpKTsiXX0=