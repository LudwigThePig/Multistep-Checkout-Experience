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
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      var _setState;

      e.preventDefault();
      var part = e.target.id;
      var int = Number(part.slice(-1)) + 1;
      var nextPart = part.slice(0, -1) + int;
      if (int > 3) {
        nextPart = 'review';
      }
      this.setState((_setState = {}, _defineProperty(_setState, part, false), _defineProperty(_setState, nextPart, true), _setState));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9jb21wb25lbnRzL2FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImZvcm0xIiwiZm9ybTIiLCJmb3JtMyIsInJldmlldyIsImZvcm1EYXRhIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJsaW5lMSIsImxpbmUyIiwiY2l0eSIsInppcCIsImNyZWRpdENhcmQiLCJleHBpcmF0aW9uIiwiY3Z2IiwiYmlsbGluZ1ppcCIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJoYW5kbGVTdWJtaXQiLCJlIiwiZmllbGQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsInByZXZlbnREZWZhdWx0IiwicGFydCIsImlkIiwiaW50IiwiTnVtYmVyIiwic2xpY2UiLCJuZXh0UGFydCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiRm9ybVZpZXciLCJtZXRhIiwiZGF0YSIsIm1hcCIsImkiLCJmb3JtcyIsIklucHV0RmllbGQiLCJ0eXBlIiwiUmV2aWV3IiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsYUFBTyxJQURJO0FBRVhDLGFBQU8sS0FGSTtBQUdYQyxhQUFPLEtBSEk7QUFJWEMsY0FBUSxLQUpHO0FBS1hDLGdCQUFXO0FBQ1RDLGNBQU8sRUFERSxFQUNFQyxPQUFPLEVBRFQsRUFDYUMsVUFBVSxFQUR2QixFQUMyQjtBQUNwQ0MsZUFBTyxFQUZFLEVBRUVDLE9BQU8sRUFGVCxFQUVhQyxNQUFNLEVBRm5CLEVBRXdCWCxPQUFPLEVBRi9CLEVBRW1DWSxLQUFLLEVBRnhDLEVBRTRDO0FBQ3JEQyxvQkFBWSxFQUhILEVBR09DLFlBQVksRUFIbkIsRUFHdUJDLEtBQUss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U0MsTUFBVCxDQUFnQixvQkFBQyxHQUFELE9BQWhCLEVBQXlCQyxTQUFTQyxjQUFULENBQXdCLE1BQXhCLENBQXpCIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGZvcm0xOiB0cnVlLFxyXG4gICAgICBmb3JtMjogZmFsc2UsXHJcbiAgICAgIGZvcm0zOiBmYWxzZSxcclxuICAgICAgcmV2aWV3OiBmYWxzZSxcclxuICAgICAgZm9ybURhdGEgOiB7XHJcbiAgICAgICAgbmFtZSA6ICcnLCBlbWFpbDogJycsIHBhc3N3b3JkOiAnJywgLypmb3JtIDEqL1xyXG4gICAgICAgIGxpbmUxOiAnJywgbGluZTI6ICcnLCBjaXR5OiAnJywgIHN0YXRlOiAnJywgemlwOiAnJywgLypmb3JtIDIqL1xyXG4gICAgICAgIGNyZWRpdENhcmQ6ICcnLCBleHBpcmF0aW9uOiAnJywgY3Z2OiAnJywgIGJpbGxpbmdaaXA6ICcnLypmb3JtIDMqL1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7IFxyXG4gIH1cclxuICBoYW5kbGVDaGFuZ2UoZSkge1xyXG4gICAgY29uc3QgZmllbGQgPSBlLnRhcmdldC5uYW1lO1xyXG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIGNvbnNvbGUubG9nKGZpZWxkLCB2YWx1ZSlcclxuICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgZm9ybURhdGE6IHtcclxuICAgICAgICBbZmllbGRdOiB2YWx1ZVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuICBoYW5kbGVTdWJtaXQoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgcGFydCA9IGUudGFyZ2V0LmlkO1xyXG4gICAgY29uc3QgaW50ID0gTnVtYmVyKHBhcnQuc2xpY2UoLTEpKSArIDE7XHJcbiAgICBsZXQgbmV4dFBhcnQgPSBwYXJ0LnNsaWNlKDAsIC0xKSArIGludDtcclxuICAgIGlmIChpbnQgPiAzKSB7XHJcbiAgICAgIG5leHRQYXJ0ID0gJ3Jldmlldyc7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgW3BhcnRdOiBmYWxzZSxcclxuICAgICAgW25leHRQYXJ0XTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIGlmICghdGhpcy5zdGF0ZS5yZXZpZXcpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgIDxoMT5NdWx0aSBQYXJ0IENoZWNrb3V0PC9oMT5cclxuICAgICAgICA8Rm9ybVZpZXcgcGFydD17dGhpcy5zdGF0ZS5mb3JtMSA/IGZvcm0xIDogdGhpcy5zdGF0ZS5mb3JtMiA/IGZvcm0yIDogZm9ybTN9XHJcbiAgICAgICAgICBoYW5kbGVDaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSBcclxuICAgICAgICAgIGhhbmRsZVN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9XHJcbiAgICAgICAgICBmb3Jtcz17dGhpcy5zdGF0ZS5mb3JtRGF0YX0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgxPk11bHRpIFBhcnQgQ2hlY2tvdXQ8L2gxPlxyXG4gICAgICAgIDxSZXZpZXcgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgRm9ybVZpZXcgPSAocHJvcHMpID0+IChcclxuICA8ZGl2PlxyXG4gICAgPGZvcm0gaWQ9e3Byb3BzLnBhcnQubWV0YS5uYW1lfSBvblN1Ym1pdD17cHJvcHMuaGFuZGxlU3VibWl0fT5cclxuICAgICAge3Byb3BzLnBhcnQuZGF0YS5tYXAoKGZpZWxkLCBpKSA9PiBcclxuICAgICAgICA8SW5wdXRGaWVsZCBmaWVsZD17ZmllbGR9IFxyXG4gICAgICAgIGhhbmRsZUNoYW5nZT17cHJvcHMuaGFuZGxlQ2hhbmdlfSBcclxuICAgICAgICBmb3Jtcz17cHJvcHMuZm9ybXN9IFxyXG4gICAgICAgIGtleT17YGZvcm0ke2l9YH0gLz4pfVxyXG4gICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiPjwvaW5wdXQ+XHJcbiAgICA8L2Zvcm0+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5jb25zdCBJbnB1dEZpZWxkID0gKHByb3BzKSA9PiAoXHJcbiAgPGRpdj5cclxuICAgIDxsYWJlbD57cHJvcHMuZmllbGQubmFtZX08L2xhYmVsPlxyXG4gICAgPGlucHV0IFxyXG4gICAgICB0eXBlPXtwcm9wcy5maWVsZC50eXBlfSBcclxuICAgICAgbmFtZT17cHJvcHMuZmllbGQubmFtZX1cclxuICAgICAgdmFsdWU9e3Byb3BzLmZvcm1zW3Byb3BzLm5hbWVdfVxyXG4gICAgICBvbkNoYW5nZT17cHJvcHMuaGFuZGxlQ2hhbmdlfSBcclxuICAgICAgPjwvaW5wdXQ+PGJyIC8+IFxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuY29uc3QgUmV2aWV3ID0gKCkgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8aDE+VGhhbmtzIGZvciBidXlpbmcgc3R1ZmYhPC9oMT5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmNvbnN0IGZvcm0xID0ge1xyXG4gIG1ldGE6IHtcclxuICAgIG5hbWU6ICdmb3JtMSdcclxuICB9LFxyXG4gIGRhdGE6IFtcclxuICB7bmFtZTogJ25hbWUnLCB0eXBlOiAndGV4dCd9LCBcclxuICB7bmFtZTogJ2VtYWlsJywgdHlwZTogJ3RleHQnfSwgXHJcbiAge25hbWU6ICdwYXNzd29yZCcsIHR5cGU6ICd0ZXh0J31cclxuICBdXHJcbn07XHJcblxyXG5jb25zdCBmb3JtMiA9IHtcclxuICBtZXRhOiB7XHJcbiAgICBuYW1lOiAnZm9ybTInXHJcbiAgfSxcclxuICBkYXRhOiBbXHJcbiAgICB7bmFtZTogJ2xpbmUxJywgdHlwZTogJ3RleHQnfSwgXHJcbiAgICB7bmFtZTogJ2xpbmUyJywgdHlwZTogJ3RleHQnfSwgXHJcbiAgICB7bmFtZTogJ2NpdHknLCB0eXBlOiAndGV4dCd9LCBcclxuICAgIHtuYW1lOiAnc3RhdGUnLCB0eXBlOiAndGV4dCd9LCBcclxuICAgIHtuYW1lOiAnemlwJywgdHlwZTogJ3RleHQnfVxyXG4gIF1cclxufTtcclxuY29uc3QgZm9ybTMgPSB7XHJcbiAgbWV0YToge1xyXG4gICAgbmFtZTogJ2Zvcm0zJ1xyXG4gIH0sXHJcbiAgZGF0YTogW1xyXG4gICAge25hbWU6ICdjcmVkaXRDYXJkJywgdHlwZTogJ3RleHQnfSwgXHJcbiAgICB7bmFtZTogJ2V4cGlyYXRpb24nLCB0eXBlOiAndGV4dCd9LCBcclxuICAgIHtuYW1lOiAnY3Z2JywgdHlwZTogJ3RleHQnfSwgXHJcbiAgICB7bmFtZTogJ2JpbGxpbmdaaXAnLCB0eXBlOiAndGV4dCd9XHJcbiAgXVxyXG59O1xyXG5cclxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKSk7Il19