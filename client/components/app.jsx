class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form1: true,
      form2: false,
      form3: false,
      formData : {
        name : '',
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
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const field = e.target.name;
    const value = e.target.value;
    console.log(field, value)
    return this.setState({
      formData: {
        [field]: value
      }
    })
  }
  render() {
    return (
      <div>
        <h1>Multi Part Checkout</h1>
        <FormView handleChange={this.handleChange} forms={this.state.formData} />
      </div>
    )
  }
}

const FormView = (props) => (
  <div>
    {form1.map((field, i) => <InputField field={field} handleChange={props.handleChange} forms={props.forms} key={`form${i}`} />)}
    <input type="submit"></input>
  </div>
);

const InputField = (props) => (
  <div>
    <label>{props.field.name}</label>
    <input 
      type={props.field.type} 
      name={props.field.name}
      value={props.forms[props.name]}
      onChange={props.handleChange} 
      ></input><br /> 
  </div>
)



const Review = () => (
  <div>
    <h1>Thanks for shopping with us!</h1>
  </div>
)

const form1 = [
  {name: 'name', type: 'text'}, 
  {name: 'email', type: 'text'}, 
  {name: 'password', type: 'text'}
];
const form2 = [
    {name: 'line1', type: 'text'}, 
    {name: 'line2', type: 'text'}, 
    {name: 'city', type: 'text'}, 
    {name: 'state', type: 'text'}, 
    {name: 'zip', type: 'text'}
];
const form3 = [
    {name: 'creditCard', type: 'text'}, 
    {name: 'expiration', type: 'text'}, 
    {name: 'cvv', type: 'text'}, 
    {name: 'billingZip', type: 'text'}
];

ReactDOM.render(<App />, document.getElementById("root"));