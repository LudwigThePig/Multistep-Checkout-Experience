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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9jb21wb25lbnRzL2FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImZvcm0xIiwiZm9ybTIiLCJmb3JtMyIsInJldmlldyIsImZvcm1EYXRhIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJsaW5lMSIsImxpbmUyIiwiY2l0eSIsInppcCIsImNyZWRpdENhcmQiLCJleHBpcmF0aW9uIiwiY3Z2IiwiYmlsbGluZ1ppcCIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJoYW5kbGVTdWJtaXQiLCJwb3N0RGF0YSIsImUiLCJmaWVsZCIsInRhcmdldCIsInZhbHVlIiwiZHVtbXkiLCJzZXRTdGF0ZSIsInByZXZlbnREZWZhdWx0IiwicGFydCIsImlkIiwiaW50IiwiTnVtYmVyIiwic2xpY2UiLCJuZXh0UGFydCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwib3B0aW9ucyIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJjYXRjaCIsImVyciIsIlJlYWN0IiwiQ29tcG9uZW50IiwiRm9ybVZpZXciLCJtZXRhIiwibWFwIiwiaSIsImZvcm1zIiwiSW5wdXRGaWVsZCIsInR5cGUiLCJ0aXRsZSIsInBhdHRlcm4iLCJyZXF1aXJlZCIsIlJldmlldyIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGFBQU8sSUFESTtBQUVYQyxhQUFPLEtBRkk7QUFHWEMsYUFBTyxLQUhJO0FBSVhDLGNBQVEsS0FKRztBQUtYQyxnQkFBVztBQUNUQyxjQUFPLEVBREUsRUFDRUMsT0FBTyxFQURULEVBQ2FDLFVBQVUsRUFEdkIs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QUFPLEVBQW5DLEVBQXVDQyxTQUFTLFFBQWhELEVBQTBEQyxVQUFVLElBQXBFLEVBTEk7QUFKTSxDQUFkO0FBWUEsSUFBTXpELFFBQVE7QUFDWmlELFFBQU07QUFDSjlDLFVBQU07QUFERixHQURNO0FBSVo0QixRQUFNLENBQ0osRUFBQzVCLE1BQU0sWUFBUCxFQUFxQm1ELE1BQU0sTUFBM0IsRUFBbUNDLE9BQU8sNENBQTFDLEVBQXdGQyxTQUFTLGNBQWpHLEVBQWlIQyxVQUFVLElBQTNILEVBREksRUFFSixFQUFDdEQsTUFBTSxZQUFQLEVBQXFCbUQsTUFBTSxNQUEzQixFQUFtQ0MsT0FBTywyQkFBMUMsRUFBdUVDLFNBQVMsaUJBQWhGLEVBQW1HQyxVQUFVLElBQTdHLEVBRkksRUFHSixFQUFDdEQsTUFBTSxLQUFQLEVBQWNtRCxNQUFNLE1BQXBCLEVBQTRCQyxPQUFPLDJDQUFuQyxFQUFnRkMsU0FBUyxVQUF6RixFQUFxR0MsVUFBVSxJQUEvRyxFQUhJLEVBSUosRUFBQ3RELE1BQU0sWUFBUCxFQUFxQm1ELE1BQU0sTUFBM0IsRUFBbUNDLE9BQU8sNEJBQTFDLEVBQXdFQyxTQUFTLFFBQWpGLEVBQTJGQyxVQUFVLElBQXJHLEVBSkk7QUFKTSxDQUFkOztBQVlBRSxTQUFTQyxNQUFULENBQWdCLG9CQUFDLEdBQUQsT0FBaEIsRUFBeUJDLFNBQVNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBekIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZm9ybTE6IHRydWUsXHJcbiAgICAgIGZvcm0yOiBmYWxzZSxcclxuICAgICAgZm9ybTM6IGZhbHNlLFxyXG4gICAgICByZXZpZXc6IGZhbHNlLFxyXG4gICAgICBmb3JtRGF0YSA6IHtcclxuICAgICAgICBuYW1lIDogJycsIGVtYWlsOiAnJywgcGFzc3dvcmQ6ICcnLCAvKmZvcm0gMSovXHJcbiAgICAgICAgbGluZTE6ICcnLCBsaW5lMjogJycsIGNpdHk6ICcnLCAgc3RhdGU6ICcnLCB6aXA6ICcnLCAvKmZvcm0gMiovXHJcbiAgICAgICAgY3JlZGl0Q2FyZDogJycsIGV4cGlyYXRpb246ICcnLCBjdnY6ICcnLCAgYmlsbGluZ1ppcDogJycvKmZvcm0gMyovXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTsgXHJcbiAgICB0aGlzLnBvc3REYXRhID0gdGhpcy5wb3N0RGF0YS5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2hhbmdlKGUpIHtcclxuICAgIGNvbnN0IGZpZWxkID0gZS50YXJnZXQubmFtZTtcclxuICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICBsZXQgZHVtbXkgPSB0aGlzLnN0YXRlLmZvcm1EYXRhO1xyXG4gICAgZHVtbXlbZmllbGRdID0gdmFsdWVcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBmb3JtRGF0YTogZHVtbXlcclxuICAgIH0pXHJcbiAgfVxyXG4gIGhhbmRsZVN1Ym1pdChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBwYXJ0ID0gZS50YXJnZXQuaWQ7XHJcbiAgICBjb25zdCBpbnQgPSBOdW1iZXIocGFydC5zbGljZSgtMSkpICsgMTtcclxuICAgIGxldCBuZXh0UGFydCA9IHBhcnQuc2xpY2UoMCwgLTEpICsgaW50O1xyXG4gICAgaWYgKGludCA+IDMpIHtcclxuICAgICAgbmV4dFBhcnQgPSAncmV2aWV3JztcclxuICAgICAgdGhpcy5wb3N0RGF0YSh0aGlzLnN0YXRlLmZvcm1EYXRhKTtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBbcGFydF06IGZhbHNlLFxyXG4gICAgICBbbmV4dFBhcnRdOiB0cnVlXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHBvc3REYXRhKGRhdGEpIHtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmV0Y2goJy9jaGVja291dERhdGEnLCBvcHRpb25zKVxyXG4gICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgLnRoZW4oZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSlcclxuICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGlmICghdGhpcy5zdGF0ZS5yZXZpZXcpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgIDxoMT5NdWx0aSBQYXJ0IENoZWNrb3V0PC9oMT5cclxuICAgICAgICA8Rm9ybVZpZXcgcGFydD17dGhpcy5zdGF0ZS5mb3JtMSA/IGZvcm0xIDogdGhpcy5zdGF0ZS5mb3JtMiA/IGZvcm0yIDogZm9ybTN9XHJcbiAgICAgICAgICBoYW5kbGVDaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSBcclxuICAgICAgICAgIGhhbmRsZVN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9XHJcbiAgICAgICAgICBmb3Jtcz17dGhpcy5zdGF0ZS5mb3JtRGF0YX0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgxPk11bHRpIFBhcnQgQ2hlY2tvdXQ8L2gxPlxyXG4gICAgICAgIDxSZXZpZXcgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgRm9ybVZpZXcgPSAocHJvcHMpID0+IChcclxuICA8ZGl2PlxyXG4gICAgPGZvcm0gY2xhc3NOYW1lPSdmb3JtLXBsYXRlJyBpZD17cHJvcHMucGFydC5tZXRhLm5hbWV9IG9uU3VibWl0PXtwcm9wcy5oYW5kbGVTdWJtaXR9PlxyXG4gICAgICB7cHJvcHMucGFydC5kYXRhLm1hcCgoZmllbGQsIGkpID0+IFxyXG4gICAgICAgIDxJbnB1dEZpZWxkIGZpZWxkPXtmaWVsZH0gXHJcbiAgICAgICAgaGFuZGxlQ2hhbmdlPXtwcm9wcy5oYW5kbGVDaGFuZ2V9IFxyXG4gICAgICAgIGZvcm1zPXtwcm9wcy5mb3Jtc30gXHJcbiAgICAgICAga2V5PXtgZm9ybSR7aX1gfSAvPil9XHJcbiAgICAgIDxpbnB1dCB2YWx1ZT1cIm5leHRcIiB0eXBlPVwic3VibWl0XCI+PC9pbnB1dD5cclxuICAgIDwvZm9ybT5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmNvbnN0IElucHV0RmllbGQgPSAocHJvcHMpID0+IHsgXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICA8bGFiZWw+e3Byb3BzLmZpZWxkLm5hbWV9PC9sYWJlbD5cclxuICAgIDxiciAvPlxyXG4gICAgPGlucHV0XHJcbiAgICAgIHR5cGU9e3Byb3BzLmZpZWxkLnR5cGV9IFxyXG4gICAgICBuYW1lPXtwcm9wcy5maWVsZC5uYW1lfVxyXG4gICAgICB0aXRsZT17cHJvcHMuZmllbGQudGl0bGV9XHJcbiAgICAgIHZhbHVlPXtwcm9wcy5mb3Jtc1twcm9wcy5uYW1lXX1cclxuICAgICAgb25DaGFuZ2U9e3Byb3BzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgcGF0dGVybj17cHJvcHMuZmllbGQucGF0dGVybn1cclxuICAgICAgcmVxdWlyZWQ9e3Byb3BzLmZpZWxkLnJlcXVpcmVkfVxyXG4gICAgICAvPjxiciAvPiBcclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbn1cclxuXHJcbmNvbnN0IFJldmlldyA9ICgpID0+IChcclxuICA8ZGl2PlxyXG4gICAgPGgxPlRoYW5rcyBmb3IgYnV5aW5nIHN0dWZmITwvaDE+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5jb25zdCBmb3JtMSA9IHtcclxuICBtZXRhOiB7XHJcbiAgICBuYW1lOiAnZm9ybTEnXHJcbiAgfSxcclxuICBkYXRhOiBbXHJcbiAge25hbWU6ICduYW1lJywgdHlwZTogJ3RleHQnLCB0aXRsZTogJ1dlIGFyZSBvbiBhIGZpcnN0IG5hbWUgYmFzaXMgOyknLCBwYXR0ZXJuOiAnW0EtWmEtel0qJywgcmVxdWlyZWQ6IHRydWV9LCBcclxuICB7bmFtZTogJ2VtYWlsJywgdHlwZTogJ3RleHQnLCB0aXRsZTogJ011c3QgYmUgYSB2YWxpZCBlbWFpbCBhZGRyZXNzJywgcGF0dGVybjogJ15bYS16MC05Ll8lKy1dK0BbYS16MC05Li1dK1xcLlthLXpdezIsNH0kJyxyZXF1aXJlZDogdHJ1ZX0sIFxyXG4gIHtuYW1lOiAncGFzc3dvcmQnLCB0eXBlOiAncGFzc3dvcmQnLCB0aXRsZTogJ211c3QgYmUgYmV0d2VlbiAxIGFuZCAyMCBjaGFyYWN0ZXJzJywgcGF0dGVybjogJy57MSwyMH0nLCByZXF1aXJlZDogdHJ1ZX1cclxuICBdXHJcbn07XHJcblxyXG5jb25zdCBmb3JtMiA9IHtcclxuICBtZXRhOiB7XHJcbiAgICBuYW1lOiAnZm9ybTInXHJcbiAgfSxcclxuICBkYXRhOiBbXHJcbiAgICB7bmFtZTogJ2xpbmUxJywgdHlwZTogJ3RleHQnLCB0aXRsZTogJ011c3QgYmUgYSB2YWxpZCBzdHJlZXQgYWRkcmVzcycsIHBhdHRlcm46ICdcXFxcZHsxLH1cXFxccypcXFxcdypcXFxcc1xcXFx3KlsuXXswLH0nLCByZXF1aXJlZDogdHJ1ZX0sIFxyXG4gICAge25hbWU6ICdsaW5lMicsIHR5cGU6ICd0ZXh0JywgdGl0bGU6ICcnLCBwYXR0ZXJuOiAnLionLCByZXF1aXJlZDogZmFsc2V9LCBcclxuICAgIHtuYW1lOiAnY2l0eScsIHR5cGU6ICd0ZXh0JywgdGl0bGU6ICcnLCBwYXR0ZXJuOiAnXFxcXHcqJywgcmVxdWlyZWQ6IHRydWV9LCBcclxuICAgIHtuYW1lOiAnc3RhdGUnLCB0eXBlOiAndGV4dCcsIHRpdGxlOiAnJywgcGF0dGVybjogJ1tBLVphLXpdezJ9JywgcmVxdWlyZWQ6IHRydWV9LCBcclxuICAgIHtuYW1lOiAnemlwJywgdHlwZTogJ3RleHQnLCB0aXRsZTogJycsIHBhdHRlcm46ICdcXFxcZHs1fScsIHJlcXVpcmVkOiB0cnVlfVxyXG4gIF1cclxufTtcclxuY29uc3QgZm9ybTMgPSB7XHJcbiAgbWV0YToge1xyXG4gICAgbmFtZTogJ2Zvcm0zJ1xyXG4gIH0sXHJcbiAgZGF0YTogW1xyXG4gICAge25hbWU6ICdjcmVkaXRDYXJkJywgdHlwZTogJ3RleHQnLCB0aXRsZTogJ011c3QgYmUgYSB2YWxpZCBjcmVkaXQgY2FyZCB3aXRoIG5vIHNwYWNlcycsIHBhdHRlcm46ICdbMC05XXsxMywxNn0nLCByZXF1aXJlZDogdHJ1ZX0sIFxyXG4gICAge25hbWU6ICdleHBpcmF0aW9uJywgdHlwZTogJ3RleHQnLCB0aXRsZTogJ211c3QgYmUgaW4gbW0veXl5eSBmb3JtYXQnLCBwYXR0ZXJuOiAnXFxcXGR7Mn1bL11cXFxcZHs0fScsIHJlcXVpcmVkOiB0cnVlfSwgXHJcbiAgICB7bmFtZTogJ2N2dicsIHR5cGU6ICd0ZXh0JywgdGl0bGU6ICdNdXN0IGJlIGJldHdlZW4gdGhyZWUgYW5kIGZvdXIgY2hhcmFjdGVycycsIHBhdHRlcm46ICdcXFxcZHszLDN9JywgcmVxdWlyZWQ6IHRydWV9LCBcclxuICAgIHtuYW1lOiAnYmlsbGluZ1ppcCcsIHR5cGU6ICd0ZXh0JywgdGl0bGU6ICdNdXN0IGJlIGEgNSBkaWdpdCB6aXAgY29kZScsIHBhdHRlcm46ICdcXFxcZHs1fScsIHJlcXVpcmVkOiB0cnVlfVxyXG4gIF1cclxufTtcclxuXHJcblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIikpOyJdfQ==