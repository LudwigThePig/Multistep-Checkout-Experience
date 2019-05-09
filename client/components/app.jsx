class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form1: true,
      form2: false,
      form3: false,
      review: false,
      formData : {
        name : '', email: '', password: '', /*form 1*/
        line1: '', line2: '', city: '',  state: '', zip: '', /*form 2*/
        creditCard: '', expiration: '', cvv: '',  billingZip: ''/*form 3*/
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this); 
    this.postData = this.postData.bind(this);
  }

  handleChange(e) {
    const field = e.target.name;
    const value = e.target.value;
    let dummy = this.state.formData;
    dummy[field] = value
    this.setState({
      formData: dummy
    })
  }
  handleSubmit(e) {
    e.preventDefault();
    const part = e.target.id;
    const int = Number(part.slice(-1)) + 1;
    let nextPart = part.slice(0, -1) + int;
    if (int > 3) {
      nextPart = 'review';
      this.postData(this.state.formData);
    }
    this.setState({
      [part]: false,
      [nextPart]: true
    });
  }

  postData(data) {
    console.log(data);
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    return fetch('/checkoutData', options)
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }

  render() {
    if (!this.state.review) {
      return (
        <div>
        <h1>Multi Part Checkout</h1>
        <FormView part={this.state.form1 ? form1 : this.state.form2 ? form2 : form3}
          handleChange={this.handleChange} 
          handleSubmit={this.handleSubmit}
          forms={this.state.formData} />
      </div>
    )
  } else {
    return (
      <div>
        <h1>Multi Part Checkout</h1>
        <Review />
      </div>
    )
  }
  }
}

const FormView = (props) => (
  <div>
    <form className='form-plate' id={props.part.meta.name} onSubmit={props.handleSubmit}>
      {props.part.data.map((field, i) => 
        <InputField field={field} 
        handleChange={props.handleChange} 
        forms={props.forms} 
        key={`form${i}`} />)}
      <input value="next" type="submit"></input>
    </form>
  </div>
);

const InputField = (props) => { 
  return (
    <div>
    <label>{props.field.name}</label>
    <br />
    <input
      type={props.field.type} 
      name={props.field.name}
      value={props.forms[props.name]}
      onChange={props.handleChange}
      required={props.field.required}
      /><br /> 
  </div>
);

}

const Review = () => (
  <div>
    <h1>Thanks for buying stuff!</h1>
  </div>
);

const form1 = {
  meta: {
    name: 'form1'
  },
  data: [
  {name: 'name', type: 'text', required: true}, 
  {name: 'email', type: 'text', required: true}, 
  {name: 'password', type: 'password', required: true}
  ]
};

const form2 = {
  meta: {
    name: 'form2'
  },
  data: [
    {name: 'line1', type: 'text', required: true}, 
    {name: 'line2', type: 'text', required: false}, 
    {name: 'city', type: 'text', required: true}, 
    {name: 'state', type: 'text', required: true}, 
    {name: 'zip', type: 'text', required: true}
  ]
};
const form3 = {
  meta: {
    name: 'form3'
  },
  data: [
    {name: 'creditCard', type: 'text', required: true}, 
    {name: 'expiration', type: 'text', required: true}, 
    {name: 'cvv', type: 'text', required: true}, 
    {name: 'billingZip', type: 'text', required: true}
  ]
};

ReactDOM.render(<App />, document.getElementById("root"));