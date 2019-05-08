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
        password: '',
        line1: '',
        line2: '',
        city: '',
        state: '',
        zip: '',
        creditCard: '',
        expiration: '',
        cvv: '',
        billingZip: ''
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
        React.createElement(FormView, { handleChange: this.handleChange, forms: this.state.formData })
      );
    }
  }]);

  return App;
}(React.Component);

var FormView = function FormView(props) {
  return React.createElement(
    'div',
    null,
    form1.map(function (field, i) {
      return React.createElement(InputField, { field: field, handleChange: props.handleChange, forms: props.forms, key: 'form' + i });
    }),
    React.createElement('input', { type: 'submit' })
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
      'Thanks for shopping with us!'
    )
  );
};

var form1 = [{ name: 'name', type: 'text' }, { name: 'email', type: 'text' }, { name: 'password', type: 'text' }];
var form2 = [{ name: 'line1', type: 'text' }, { name: 'line2', type: 'text' }, { name: 'city', type: 'text' }, { name: 'state', type: 'text' }, { name: 'zip', type: 'text' }];
var form3 = [{ name: 'creditCard', type: 'text' }, { name: 'expiration', type: 'text' }, { name: 'cvv', type: 'text' }, { name: 'billingZip', type: 'text' }];

ReactDOM.render(React.createElement(App, null), document.getElementById("root"));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9jb21wb25lbnRzL2FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImZvcm0xIiwiZm9ybTIiLCJmb3JtMyIsImZvcm1EYXRhIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJsaW5lMSIsImxpbmUyIiwiY2l0eSIsInppcCIsImNyZWRpdENhcmQiLCJleHBpcmF0aW9uIiwiY3Z2IiwiYmlsbGluZ1ppcCIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJlIiwiZmllbGQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiRm9ybVZpZXciLCJtYXAiLCJpIiwiZm9ybXMiLCJJbnB1dEZpZWxkIiwidHlwZSIsIlJldmlldyIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGFBQU8sSUFESTtBQUVYQyxhQUFPLEtBRkk7QUFHWEMsYUFBTyxLQUhJO0FBSVhDLGdCQUFXO0FBQ1RDLGNBQU8sRUFERTtBQUVUQyxlQUFPLEVBRkU7QUFHVEMsa0JBQVUsRUFIRDtBQUlUQyxlQUFPLEVBSkU7QUFLVEMsZUFBTyxFQUxFO0FBTVRDLGNBQU0sRUFORztBQU9UVixlQUFPLEVBUEU7QUFRVFcsYUFBSyxFQVJJO0FBU1RDLG9CQUFZLEVBVEg7QUFVVEMsb0JBQVksRUFWSDtBQVdUQyxhQUFLLEVBWEk7QUFZVEMsb0JBQVk7QUFaSDtBQUpBLEtBQWI7QUFtQkEsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCQyxJQUFsQixPQUFwQjtBQXJCaUI7QUFzQmxCOzs7O2lDQUNZQyxDLEVBQUc7QUFDZCxVQUFNQyxRQUFRRCxFQUFFRSxNQUFGLENBQVNmLElBQXZCO0FBQ0EsVUFBTWdCLFFBQVFILEVBQUVFLE1BQUYsQ0FBU0MsS0FBdkI7QUFDQUMsY0FBUUMsR0FBUixDQUFZSixLQUFaLEVBQW1CRSxLQUFuQjtBQUNBLGFBQU8sS0FBS0csUUFBTCxDQUFjO0FBQ25CcEIsc0NBQ0dlLEtBREgsRUFDV0UsS0FEWDtBQURtQixPQUFkLENBQVA7QUFLRDs7OzZCQUNRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFFRSw0QkFBQyxRQUFELElBQVUsY0FBYyxLQUFLTCxZQUE3QixFQUEyQyxPQUFPLEtBQUtoQixLQUFMLENBQVdJLFFBQTdEO0FBRkYsT0FERjtBQU1EOzs7O0VBekNlcUIsTUFBTUMsUzs7QUE0Q3hCLElBQU1DLFdBQVcsU0FBWEEsUUFBVyxDQUFDNUIsS0FBRDtBQUFBLFNBQ2Y7QUFBQTtBQUFBO0FBQ0dFLFVBQU0yQixHQUFOLENBQVUsVUFBQ1QsS0FBRCxFQUFRVSxDQUFSO0FBQUEsYUFBYyxvQkFBQyxVQUFELElBQVksT0FBT1YsS0FBbkIsRUFBMEIsY0FBY3BCLE1BQU1pQixZQUE5QyxFQUE0RCxPQUFPakIsTUFBTStCLEtBQXpFLEVBQWdGLGNBQVlELENBQTVGLEdBQWQ7QUFBQSxLQUFWLENBREg7QUFFRSxtQ0FBTyxNQUFLLFFBQVo7QUFGRixHQURlO0FBQUEsQ0FBakI7O0FBT0EsSUFBTUUsYUFBYSxTQUFiQSxVQUFhLENBQUNoQyxLQUFEO0FBQUEsU0FDakI7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQVFBLFlBQU1vQixLQUFOLENBQVlkO0FBQXBCLEtBREY7QUFFRTtBQUNFLFlBQU1OLE1BQU1vQixLQUFOLENBQVlhLElBRHBCO0FBRUUsWUFBTWpDLE1BQU1vQixLQUFOLENBQVlkLElBRnBCO0FBR0UsYUFBT04sTUFBTStCLEtBQU4sQ0FBWS9CLE1BQU1NLElBQWxCLENBSFQ7QUFJRSxnQkFBVU4sTUFBTWlCO0FBSmxCLE1BRkY7QUFPYTtBQVBiLEdBRGlCO0FBQUEsQ0FBbkI7O0FBY0EsSUFBTWlCLFNBQVMsU0FBVEEsTUFBUztBQUFBLFNBQ2I7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLEdBRGE7QUFBQSxDQUFmOztBQU1BLElBQU1oQyxRQUFRLENBQ1osRUFBQ0ksTUFBTSxNQUFQLEVBQWUyQixNQUFNLE1BQXJCLEVBRFksRUFFWixFQUFDM0IsTUFBTSxPQUFQLEVBQWdCMkIsTUFBTSxNQUF0QixFQUZZLEVBR1osRUFBQzNCLE1BQU0sVUFBUCxFQUFtQjJCLE1BQU0sTUFBekIsRUFIWSxDQUFkO0FBS0EsSUFBTTlCLFFBQVEsQ0FDVixFQUFDRyxNQUFNLE9BQVAsRUFBZ0IyQixNQUFNLE1BQXRCLEVBRFUsRUFFVixFQUFDM0IsTUFBTSxPQUFQLEVBQWdCMkIsTUFBTSxNQUF0QixFQUZVLEVBR1YsRUFBQzNCLE1BQU0sTUFBUCxFQUFlMkIsTUFBTSxNQUFyQixFQUhVLEVBSVYsRUFBQzNCLE1BQU0sT0FBUCxFQUFnQjJCLE1BQU0sTUFBdEIsRUFKVSxFQUtWLEVBQUMzQixNQUFNLEtBQVAsRUFBYzJCLE1BQU0sTUFBcEIsRUFMVSxDQUFkO0FBT0EsSUFBTTdCLFFBQVEsQ0FDVixFQUFDRSxNQUFNLFlBQVAsRUFBcUIyQixNQUFNLE1BQTNCLEVBRFUsRUFFVixFQUFDM0IsTUFBTSxZQUFQLEVBQXFCMkIsTUFBTSxNQUEzQixFQUZVLEVBR1YsRUFBQzNCLE1BQU0sS0FBUCxFQUFjMkIsTUFBTSxNQUFwQixFQUhVLEVBSVYsRUFBQzNCLE1BQU0sWUFBUCxFQUFxQjJCLE1BQU0sTUFBM0IsRUFKVSxDQUFkOztBQU9BRSxTQUFTQyxNQUFULENBQWdCLG9CQUFDLEdBQUQsT0FBaEIsRUFBeUJDLFNBQVNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBekIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZm9ybTE6IHRydWUsXHJcbiAgICAgIGZvcm0yOiBmYWxzZSxcclxuICAgICAgZm9ybTM6IGZhbHNlLFxyXG4gICAgICBmb3JtRGF0YSA6IHtcclxuICAgICAgICBuYW1lIDogJycsXHJcbiAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgICAgICBsaW5lMTogJycsXHJcbiAgICAgICAgbGluZTI6ICcnLCBcclxuICAgICAgICBjaXR5OiAnJywgXHJcbiAgICAgICAgc3RhdGU6ICcnLCBcclxuICAgICAgICB6aXA6ICcnLFxyXG4gICAgICAgIGNyZWRpdENhcmQ6ICcnLCBcclxuICAgICAgICBleHBpcmF0aW9uOiAnJywgXHJcbiAgICAgICAgY3Z2OiAnJywgXHJcbiAgICAgICAgYmlsbGluZ1ppcDogJydcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gIH1cclxuICBoYW5kbGVDaGFuZ2UoZSkge1xyXG4gICAgY29uc3QgZmllbGQgPSBlLnRhcmdldC5uYW1lO1xyXG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIGNvbnNvbGUubG9nKGZpZWxkLCB2YWx1ZSlcclxuICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgZm9ybURhdGE6IHtcclxuICAgICAgICBbZmllbGRdOiB2YWx1ZVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoMT5NdWx0aSBQYXJ0IENoZWNrb3V0PC9oMT5cclxuICAgICAgICA8Rm9ybVZpZXcgaGFuZGxlQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gZm9ybXM9e3RoaXMuc3RhdGUuZm9ybURhdGF9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgRm9ybVZpZXcgPSAocHJvcHMpID0+IChcclxuICA8ZGl2PlxyXG4gICAge2Zvcm0xLm1hcCgoZmllbGQsIGkpID0+IDxJbnB1dEZpZWxkIGZpZWxkPXtmaWVsZH0gaGFuZGxlQ2hhbmdlPXtwcm9wcy5oYW5kbGVDaGFuZ2V9IGZvcm1zPXtwcm9wcy5mb3Jtc30ga2V5PXtgZm9ybSR7aX1gfSAvPil9XHJcbiAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiPjwvaW5wdXQ+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5jb25zdCBJbnB1dEZpZWxkID0gKHByb3BzKSA9PiAoXHJcbiAgPGRpdj5cclxuICAgIDxsYWJlbD57cHJvcHMuZmllbGQubmFtZX08L2xhYmVsPlxyXG4gICAgPGlucHV0IFxyXG4gICAgICB0eXBlPXtwcm9wcy5maWVsZC50eXBlfSBcclxuICAgICAgbmFtZT17cHJvcHMuZmllbGQubmFtZX1cclxuICAgICAgdmFsdWU9e3Byb3BzLmZvcm1zW3Byb3BzLm5hbWVdfVxyXG4gICAgICBvbkNoYW5nZT17cHJvcHMuaGFuZGxlQ2hhbmdlfSBcclxuICAgICAgPjwvaW5wdXQ+PGJyIC8+IFxyXG4gIDwvZGl2PlxyXG4pXHJcblxyXG5cclxuXHJcbmNvbnN0IFJldmlldyA9ICgpID0+IChcclxuICA8ZGl2PlxyXG4gICAgPGgxPlRoYW5rcyBmb3Igc2hvcHBpbmcgd2l0aCB1cyE8L2gxPlxyXG4gIDwvZGl2PlxyXG4pXHJcblxyXG5jb25zdCBmb3JtMSA9IFtcclxuICB7bmFtZTogJ25hbWUnLCB0eXBlOiAndGV4dCd9LCBcclxuICB7bmFtZTogJ2VtYWlsJywgdHlwZTogJ3RleHQnfSwgXHJcbiAge25hbWU6ICdwYXNzd29yZCcsIHR5cGU6ICd0ZXh0J31cclxuXTtcclxuY29uc3QgZm9ybTIgPSBbXHJcbiAgICB7bmFtZTogJ2xpbmUxJywgdHlwZTogJ3RleHQnfSwgXHJcbiAgICB7bmFtZTogJ2xpbmUyJywgdHlwZTogJ3RleHQnfSwgXHJcbiAgICB7bmFtZTogJ2NpdHknLCB0eXBlOiAndGV4dCd9LCBcclxuICAgIHtuYW1lOiAnc3RhdGUnLCB0eXBlOiAndGV4dCd9LCBcclxuICAgIHtuYW1lOiAnemlwJywgdHlwZTogJ3RleHQnfVxyXG5dO1xyXG5jb25zdCBmb3JtMyA9IFtcclxuICAgIHtuYW1lOiAnY3JlZGl0Q2FyZCcsIHR5cGU6ICd0ZXh0J30sIFxyXG4gICAge25hbWU6ICdleHBpcmF0aW9uJywgdHlwZTogJ3RleHQnfSwgXHJcbiAgICB7bmFtZTogJ2N2dicsIHR5cGU6ICd0ZXh0J30sIFxyXG4gICAge25hbWU6ICdiaWxsaW5nWmlwJywgdHlwZTogJ3RleHQnfVxyXG5dO1xyXG5cclxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKSk7Il19