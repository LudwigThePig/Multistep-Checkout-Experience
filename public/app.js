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
      value: props.forms[props.name],
      onChange: props.handleChange,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9jb21wb25lbnRzL2FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImZvcm0xIiwiZm9ybTIiLCJmb3JtMyIsInJldmlldyIsImZvcm1EYXRhIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJsaW5lMSIsImxpbmUyIiwiY2l0eSIsInppcCIsImNyZWRpdENhcmQiLCJleHBpcmF0aW9uIiwiY3Z2IiwiYmlsbGluZ1ppcCIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJoYW5kbGVTdWJtaXQiLCJwb3N0RGF0YSIsImUiLCJmaWVsZCIsInRhcmdldCIsInZhbHVlIiwiZHVtbXkiLCJzZXRTdGF0ZSIsInByZXZlbnREZWZhdWx0IiwicGFydCIsImlkIiwiaW50IiwiTnVtYmVyIiwic2xpY2UiLCJuZXh0UGFydCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwib3B0aW9ucyIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJjYXRjaCIsImVyciIsIlJlYWN0IiwiQ29tcG9uZW50IiwiRm9ybVZpZXciLCJtZXRhIiwibWFwIiwiaSIsImZvcm1zIiwiSW5wdXRGaWVsZCIsInR5cGUiLCJyZXF1aXJlZCIsIlJldmlldyIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGFBQU8sSUFESTtBQUVYQyxhQUFPLEtBRkk7QUFHWEMsYUFBTyxLQUhJO0FBSVhDLGNBQVEsS0FKRztBQUtYQyxnQkFBVztBQUNUQyxjQUFPLEVBREUsRUFDRUMsT0FBTyxFQURULEVBQ2FDLFVBQVUsRUFEdkIsRUFDMkI7QUFDcENDLGVBQU8s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OztBQVlBRSxTQUFTQyxNQUFULENBQWdCLG9CQUFDLEdBQUQsT0FBaEIsRUFBeUJDLFNBQVNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBekIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZm9ybTE6IHRydWUsXHJcbiAgICAgIGZvcm0yOiBmYWxzZSxcclxuICAgICAgZm9ybTM6IGZhbHNlLFxyXG4gICAgICByZXZpZXc6IGZhbHNlLFxyXG4gICAgICBmb3JtRGF0YSA6IHtcclxuICAgICAgICBuYW1lIDogJycsIGVtYWlsOiAnJywgcGFzc3dvcmQ6ICcnLCAvKmZvcm0gMSovXHJcbiAgICAgICAgbGluZTE6ICcnLCBsaW5lMjogJycsIGNpdHk6ICcnLCAgc3RhdGU6ICcnLCB6aXA6ICcnLCAvKmZvcm0gMiovXHJcbiAgICAgICAgY3JlZGl0Q2FyZDogJycsIGV4cGlyYXRpb246ICcnLCBjdnY6ICcnLCAgYmlsbGluZ1ppcDogJycvKmZvcm0gMyovXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTsgXHJcbiAgICB0aGlzLnBvc3REYXRhID0gdGhpcy5wb3N0RGF0YS5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2hhbmdlKGUpIHtcclxuICAgIGNvbnN0IGZpZWxkID0gZS50YXJnZXQubmFtZTtcclxuICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICBsZXQgZHVtbXkgPSB0aGlzLnN0YXRlLmZvcm1EYXRhO1xyXG4gICAgZHVtbXlbZmllbGRdID0gdmFsdWVcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBmb3JtRGF0YTogZHVtbXlcclxuICAgIH0pXHJcbiAgfVxyXG4gIGhhbmRsZVN1Ym1pdChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBwYXJ0ID0gZS50YXJnZXQuaWQ7XHJcbiAgICBjb25zdCBpbnQgPSBOdW1iZXIocGFydC5zbGljZSgtMSkpICsgMTtcclxuICAgIGxldCBuZXh0UGFydCA9IHBhcnQuc2xpY2UoMCwgLTEpICsgaW50O1xyXG4gICAgaWYgKGludCA+IDMpIHtcclxuICAgICAgbmV4dFBhcnQgPSAncmV2aWV3JztcclxuICAgICAgdGhpcy5wb3N0RGF0YSh0aGlzLnN0YXRlLmZvcm1EYXRhKTtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBbcGFydF06IGZhbHNlLFxyXG4gICAgICBbbmV4dFBhcnRdOiB0cnVlXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHBvc3REYXRhKGRhdGEpIHtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmV0Y2goJy9jaGVja291dERhdGEnLCBvcHRpb25zKVxyXG4gICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgLnRoZW4oZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSlcclxuICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGlmICghdGhpcy5zdGF0ZS5yZXZpZXcpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgIDxoMT5NdWx0aSBQYXJ0IENoZWNrb3V0PC9oMT5cclxuICAgICAgICA8Rm9ybVZpZXcgcGFydD17dGhpcy5zdGF0ZS5mb3JtMSA/IGZvcm0xIDogdGhpcy5zdGF0ZS5mb3JtMiA/IGZvcm0yIDogZm9ybTN9XHJcbiAgICAgICAgICBoYW5kbGVDaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSBcclxuICAgICAgICAgIGhhbmRsZVN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9XHJcbiAgICAgICAgICBmb3Jtcz17dGhpcy5zdGF0ZS5mb3JtRGF0YX0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgxPk11bHRpIFBhcnQgQ2hlY2tvdXQ8L2gxPlxyXG4gICAgICAgIDxSZXZpZXcgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgRm9ybVZpZXcgPSAocHJvcHMpID0+IChcclxuICA8ZGl2PlxyXG4gICAgPGZvcm0gY2xhc3NOYW1lPSdmb3JtLXBsYXRlJyBpZD17cHJvcHMucGFydC5tZXRhLm5hbWV9IG9uU3VibWl0PXtwcm9wcy5oYW5kbGVTdWJtaXR9PlxyXG4gICAgICB7cHJvcHMucGFydC5kYXRhLm1hcCgoZmllbGQsIGkpID0+IFxyXG4gICAgICAgIDxJbnB1dEZpZWxkIGZpZWxkPXtmaWVsZH0gXHJcbiAgICAgICAgaGFuZGxlQ2hhbmdlPXtwcm9wcy5oYW5kbGVDaGFuZ2V9IFxyXG4gICAgICAgIGZvcm1zPXtwcm9wcy5mb3Jtc30gXHJcbiAgICAgICAga2V5PXtgZm9ybSR7aX1gfSAvPil9XHJcbiAgICAgIDxpbnB1dCB2YWx1ZT1cIm5leHRcIiB0eXBlPVwic3VibWl0XCI+PC9pbnB1dD5cclxuICAgIDwvZm9ybT5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmNvbnN0IElucHV0RmllbGQgPSAocHJvcHMpID0+IHsgXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICA8bGFiZWw+e3Byb3BzLmZpZWxkLm5hbWV9PC9sYWJlbD5cclxuICAgIDxiciAvPlxyXG4gICAgPGlucHV0XHJcbiAgICAgIHR5cGU9e3Byb3BzLmZpZWxkLnR5cGV9IFxyXG4gICAgICBuYW1lPXtwcm9wcy5maWVsZC5uYW1lfVxyXG4gICAgICB2YWx1ZT17cHJvcHMuZm9ybXNbcHJvcHMubmFtZV19XHJcbiAgICAgIG9uQ2hhbmdlPXtwcm9wcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgIHJlcXVpcmVkPXtwcm9wcy5maWVsZC5yZXF1aXJlZH1cclxuICAgICAgLz48YnIgLz4gXHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG59XHJcblxyXG5jb25zdCBSZXZpZXcgPSAoKSA9PiAoXHJcbiAgPGRpdj5cclxuICAgIDxoMT5UaGFua3MgZm9yIGJ1eWluZyBzdHVmZiE8L2gxPlxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuY29uc3QgZm9ybTEgPSB7XHJcbiAgbWV0YToge1xyXG4gICAgbmFtZTogJ2Zvcm0xJ1xyXG4gIH0sXHJcbiAgZGF0YTogW1xyXG4gIHtuYW1lOiAnbmFtZScsIHR5cGU6ICd0ZXh0JywgcmVxdWlyZWQ6IHRydWV9LCBcclxuICB7bmFtZTogJ2VtYWlsJywgdHlwZTogJ3RleHQnLCByZXF1aXJlZDogdHJ1ZX0sIFxyXG4gIHtuYW1lOiAncGFzc3dvcmQnLCB0eXBlOiAncGFzc3dvcmQnLCByZXF1aXJlZDogdHJ1ZX1cclxuICBdXHJcbn07XHJcblxyXG5jb25zdCBmb3JtMiA9IHtcclxuICBtZXRhOiB7XHJcbiAgICBuYW1lOiAnZm9ybTInXHJcbiAgfSxcclxuICBkYXRhOiBbXHJcbiAgICB7bmFtZTogJ2xpbmUxJywgdHlwZTogJ3RleHQnLCByZXF1aXJlZDogdHJ1ZX0sIFxyXG4gICAge25hbWU6ICdsaW5lMicsIHR5cGU6ICd0ZXh0JywgcmVxdWlyZWQ6IGZhbHNlfSwgXHJcbiAgICB7bmFtZTogJ2NpdHknLCB0eXBlOiAndGV4dCcsIHJlcXVpcmVkOiB0cnVlfSwgXHJcbiAgICB7bmFtZTogJ3N0YXRlJywgdHlwZTogJ3RleHQnLCByZXF1aXJlZDogdHJ1ZX0sIFxyXG4gICAge25hbWU6ICd6aXAnLCB0eXBlOiAndGV4dCcsIHJlcXVpcmVkOiB0cnVlfVxyXG4gIF1cclxufTtcclxuY29uc3QgZm9ybTMgPSB7XHJcbiAgbWV0YToge1xyXG4gICAgbmFtZTogJ2Zvcm0zJ1xyXG4gIH0sXHJcbiAgZGF0YTogW1xyXG4gICAge25hbWU6ICdjcmVkaXRDYXJkJywgdHlwZTogJ3RleHQnLCByZXF1aXJlZDogdHJ1ZX0sIFxyXG4gICAge25hbWU6ICdleHBpcmF0aW9uJywgdHlwZTogJ3RleHQnLCByZXF1aXJlZDogdHJ1ZX0sIFxyXG4gICAge25hbWU6ICdjdnYnLCB0eXBlOiAndGV4dCcsIHJlcXVpcmVkOiB0cnVlfSwgXHJcbiAgICB7bmFtZTogJ2JpbGxpbmdaaXAnLCB0eXBlOiAndGV4dCcsIHJlcXVpcmVkOiB0cnVlfVxyXG4gIF1cclxufTtcclxuXHJcblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIikpOyJdfQ==