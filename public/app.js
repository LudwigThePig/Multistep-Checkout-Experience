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
      { 'class': 'form-plate', id: props.part.meta.name, onSubmit: props.handleSubmit },
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
  data: [{ name: 'name', type: 'text', required: true }, { name: 'email', type: 'text', required: true }, { name: 'password', type: 'password', required: true }]
};

var form2 = {
  meta: {
    name: 'form2'
  },
  data: [{ name: 'line1', type: 'text', required: true }, { name: 'line2', type: 'text', required: false }, { name: 'city', type: 'text', required: true }, { name: 'state', type: 'text', required: true }, { name: 'zip', type: 'text', required: true }]
};
var form3 = {
  meta: {
    name: 'form3'
  },
  data: [{ name: 'creditCard', type: 'text', required: true }, { name: 'expiration', type: 'text', required: true }, { name: 'cvv', type: 'text', required: true }, { name: 'billingZip', type: 'text', required: true }]
};

ReactDOM.render(React.createElement(App, null), document.getElementById("root"));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9jb21wb25lbnRzL2FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImZvcm0xIiwiZm9ybTIiLCJmb3JtMyIsInJldmlldyIsImZvcm1EYXRhIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJsaW5lMSIsImxpbmUyIiwiY2l0eSIsInppcCIsImNyZWRpdENhcmQiLCJleHBpcmF0aW9uIiwiY3Z2IiwiYmlsbGluZ1ppcCIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJoYW5kbGVTdWJtaXQiLCJwb3N0RGF0YSIsImUiLCJmaWVsZCIsInRhcmdldCIsInZhbHVlIiwiZHVtbXkiLCJzZXRTdGF0ZSIsInByZXZlbnREZWZhdWx0IiwicGFydCIsImlkIiwiaW50IiwiTnVtYmVyIiwic2xpY2UiLCJuZXh0UGFydCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwib3B0aW9ucyIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJjYXRjaCIsImVyciIsIlJlYWN0IiwiQ29tcG9uZW50IiwiRm9ybVZpZXciLCJtZXRhIiwibWFwIiwiaSIsImZvcm1zIiwiSW5wdXRGaWVsZCIsInR5cGUiLCJSZXZpZXciLCJyZXF1aXJlZCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGFBQU8sSUFESTtBQUVYQyxhQUFPLEtBRkk7QUFHWEMsYUFBTyxLQUhJO0FBSVhDLGNBQVEsS0FKRztBQUtYQyxnQkFBVztBQUNUQyxjQUFPLEVBREUsRUFDRUMsT0FBTyxFQURULEVBQ2FDLFVBQVUsRUFEdkIsRUFDMkI7QUFDcENDLGVBQU8s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RUFBeUJDLFNBQVNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBekIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZm9ybTE6IHRydWUsXHJcbiAgICAgIGZvcm0yOiBmYWxzZSxcclxuICAgICAgZm9ybTM6IGZhbHNlLFxyXG4gICAgICByZXZpZXc6IGZhbHNlLFxyXG4gICAgICBmb3JtRGF0YSA6IHtcclxuICAgICAgICBuYW1lIDogJycsIGVtYWlsOiAnJywgcGFzc3dvcmQ6ICcnLCAvKmZvcm0gMSovXHJcbiAgICAgICAgbGluZTE6ICcnLCBsaW5lMjogJycsIGNpdHk6ICcnLCAgc3RhdGU6ICcnLCB6aXA6ICcnLCAvKmZvcm0gMiovXHJcbiAgICAgICAgY3JlZGl0Q2FyZDogJycsIGV4cGlyYXRpb246ICcnLCBjdnY6ICcnLCAgYmlsbGluZ1ppcDogJycvKmZvcm0gMyovXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTsgXHJcbiAgICB0aGlzLnBvc3REYXRhID0gdGhpcy5wb3N0RGF0YS5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2hhbmdlKGUpIHtcclxuICAgIGNvbnN0IGZpZWxkID0gZS50YXJnZXQubmFtZTtcclxuICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICBsZXQgZHVtbXkgPSB0aGlzLnN0YXRlLmZvcm1EYXRhO1xyXG4gICAgZHVtbXlbZmllbGRdID0gdmFsdWVcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBmb3JtRGF0YTogZHVtbXlcclxuICAgIH0pXHJcbiAgfVxyXG4gIGhhbmRsZVN1Ym1pdChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBwYXJ0ID0gZS50YXJnZXQuaWQ7XHJcbiAgICBjb25zdCBpbnQgPSBOdW1iZXIocGFydC5zbGljZSgtMSkpICsgMTtcclxuICAgIGxldCBuZXh0UGFydCA9IHBhcnQuc2xpY2UoMCwgLTEpICsgaW50O1xyXG4gICAgaWYgKGludCA+IDMpIHtcclxuICAgICAgbmV4dFBhcnQgPSAncmV2aWV3JztcclxuICAgICAgdGhpcy5wb3N0RGF0YSh0aGlzLnN0YXRlLmZvcm1EYXRhKTtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBbcGFydF06IGZhbHNlLFxyXG4gICAgICBbbmV4dFBhcnRdOiB0cnVlXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHBvc3REYXRhKGRhdGEpIHtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmV0Y2goJy9jaGVja291dERhdGEnLCBvcHRpb25zKVxyXG4gICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgLnRoZW4oZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSlcclxuICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGlmICghdGhpcy5zdGF0ZS5yZXZpZXcpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgIDxoMT5NdWx0aSBQYXJ0IENoZWNrb3V0PC9oMT5cclxuICAgICAgICA8Rm9ybVZpZXcgcGFydD17dGhpcy5zdGF0ZS5mb3JtMSA/IGZvcm0xIDogdGhpcy5zdGF0ZS5mb3JtMiA/IGZvcm0yIDogZm9ybTN9XHJcbiAgICAgICAgICBoYW5kbGVDaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSBcclxuICAgICAgICAgIGhhbmRsZVN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9XHJcbiAgICAgICAgICBmb3Jtcz17dGhpcy5zdGF0ZS5mb3JtRGF0YX0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgxPk11bHRpIFBhcnQgQ2hlY2tvdXQ8L2gxPlxyXG4gICAgICAgIDxSZXZpZXcgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgRm9ybVZpZXcgPSAocHJvcHMpID0+IChcclxuICA8ZGl2PlxyXG4gICAgPGZvcm0gY2xhc3M9J2Zvcm0tcGxhdGUnIGlkPXtwcm9wcy5wYXJ0Lm1ldGEubmFtZX0gb25TdWJtaXQ9e3Byb3BzLmhhbmRsZVN1Ym1pdH0+XHJcbiAgICAgIHtwcm9wcy5wYXJ0LmRhdGEubWFwKChmaWVsZCwgaSkgPT4gXHJcbiAgICAgICAgPElucHV0RmllbGQgZmllbGQ9e2ZpZWxkfSBcclxuICAgICAgICBoYW5kbGVDaGFuZ2U9e3Byb3BzLmhhbmRsZUNoYW5nZX0gXHJcbiAgICAgICAgZm9ybXM9e3Byb3BzLmZvcm1zfSBcclxuICAgICAgICBrZXk9e2Bmb3JtJHtpfWB9IC8+KX1cclxuICAgICAgPGlucHV0IHZhbHVlPVwibmV4dFwiIHR5cGU9XCJzdWJtaXRcIj48L2lucHV0PlxyXG4gICAgPC9mb3JtPlxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuY29uc3QgSW5wdXRGaWVsZCA9IChwcm9wcykgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8bGFiZWw+e3Byb3BzLmZpZWxkLm5hbWV9PC9sYWJlbD5cclxuICAgIDxiciAvPlxyXG4gICAgPGlucHV0IFxyXG4gICAgICB0eXBlPXtwcm9wcy5maWVsZC50eXBlfSBcclxuICAgICAgbmFtZT17cHJvcHMuZmllbGQubmFtZX1cclxuICAgICAgdmFsdWU9e3Byb3BzLmZvcm1zW3Byb3BzLm5hbWVdfVxyXG4gICAgICBvbkNoYW5nZT17cHJvcHMuaGFuZGxlQ2hhbmdlfSBcclxuICAgICAgPjwvaW5wdXQ+PGJyIC8+IFxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuY29uc3QgUmV2aWV3ID0gKCkgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8aDE+VGhhbmtzIGZvciBidXlpbmcgc3R1ZmYhPC9oMT5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmNvbnN0IGZvcm0xID0ge1xyXG4gIG1ldGE6IHtcclxuICAgIG5hbWU6ICdmb3JtMSdcclxuICB9LFxyXG4gIGRhdGE6IFtcclxuICB7bmFtZTogJ25hbWUnLCB0eXBlOiAndGV4dCcsIHJlcXVpcmVkOiB0cnVlfSwgXHJcbiAge25hbWU6ICdlbWFpbCcsIHR5cGU6ICd0ZXh0JywgcmVxdWlyZWQ6IHRydWV9LCBcclxuICB7bmFtZTogJ3Bhc3N3b3JkJywgdHlwZTogJ3Bhc3N3b3JkJywgcmVxdWlyZWQ6IHRydWV9XHJcbiAgXVxyXG59O1xyXG5cclxuY29uc3QgZm9ybTIgPSB7XHJcbiAgbWV0YToge1xyXG4gICAgbmFtZTogJ2Zvcm0yJ1xyXG4gIH0sXHJcbiAgZGF0YTogW1xyXG4gICAge25hbWU6ICdsaW5lMScsIHR5cGU6ICd0ZXh0JywgcmVxdWlyZWQ6IHRydWV9LCBcclxuICAgIHtuYW1lOiAnbGluZTInLCB0eXBlOiAndGV4dCcsIHJlcXVpcmVkOiBmYWxzZX0sIFxyXG4gICAge25hbWU6ICdjaXR5JywgdHlwZTogJ3RleHQnLCByZXF1aXJlZDogdHJ1ZX0sIFxyXG4gICAge25hbWU6ICdzdGF0ZScsIHR5cGU6ICd0ZXh0JywgcmVxdWlyZWQ6IHRydWV9LCBcclxuICAgIHtuYW1lOiAnemlwJywgdHlwZTogJ3RleHQnLCByZXF1aXJlZDogdHJ1ZX1cclxuICBdXHJcbn07XHJcbmNvbnN0IGZvcm0zID0ge1xyXG4gIG1ldGE6IHtcclxuICAgIG5hbWU6ICdmb3JtMydcclxuICB9LFxyXG4gIGRhdGE6IFtcclxuICAgIHtuYW1lOiAnY3JlZGl0Q2FyZCcsIHR5cGU6ICd0ZXh0JywgcmVxdWlyZWQ6IHRydWV9LCBcclxuICAgIHtuYW1lOiAnZXhwaXJhdGlvbicsIHR5cGU6ICd0ZXh0JywgcmVxdWlyZWQ6IHRydWV9LCBcclxuICAgIHtuYW1lOiAnY3Z2JywgdHlwZTogJ3RleHQnLCByZXF1aXJlZDogdHJ1ZX0sIFxyXG4gICAge25hbWU6ICdiaWxsaW5nWmlwJywgdHlwZTogJ3RleHQnLCByZXF1aXJlZDogdHJ1ZX1cclxuICBdXHJcbn07XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpKTsiXX0=