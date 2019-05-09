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
    this.goBack = this.goBack.bind(this);
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

  goBack(e) {
    e.preventDefault();
    if (this.state.form2) {
      this.setState({
        form1: true,
        form2: false
      })
    } else if (this.state.form3) {
      this.setState({
        form2: true,
        form3: false
      })
    }
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
    const inputFields = document.getElementsByTagName('input');
    [].forEach.call(inputFields, (field) => {
      if (field.type !== 'submit') {
        return field.value = '';
      }
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
            <input value="Go Back" type="submit" onClick={this.goBack}></input>
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
      title={props.field.title}
      value={props.forms[props.name]}
      onChange={props.handleChange}
      pattern={props.field.pattern}
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
  {name: 'name', type: 'text', title: 'We are on a first name basis ;)', pattern: '[A-Za-z]*', required: true}, 
  {name: 'email', type: 'text', title: 'Must be a valid email address', pattern: '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$',required: true}, 
  {name: 'password', type: 'password', title: 'must be between 1 and 20 characters', pattern: '.{1,20}', required: true}
  ]
};

const form2 = {
  meta: {
    name: 'form2'
  },
  data: [
    {name: 'line1', type: 'text', title: 'Must be a valid street address', pattern: '\\d{1,}\\s*\\w*\\s\\w*[.]{0,}', required: true}, 
    {name: 'line2', type: 'text', title: '', pattern: '.*', required: false}, 
    {name: 'city', type: 'text', title: '', pattern: '\\w*', required: true}, 
    {name: 'state', type: 'text', title: '', pattern: '[A-Za-z]{2}', required: true}, 
    {name: 'zip', type: 'text', title: '', pattern: '\\d{5}', required: true}
  ]
};
const form3 = {
  meta: {
    name: 'form3'
  },
  data: [
    {name: 'creditCard', type: 'text', title: 'Must be a valid credit card with no spaces', pattern: '[0-9]{13,16}', required: true}, 
    {name: 'expiration', type: 'text', title: 'must be in mm/yyyy format', pattern: '\\d{2}[/]\\d{4}', required: true}, 
    {name: 'cvv', type: 'text', title: 'Must be between three and four characters', pattern: '\\d{3,3}', required: true}, 
    {name: 'billingZip', type: 'text', title: 'Must be a 5 digit zip code', pattern: '\\d{5}', required: true}
  ]
};

ReactDOM.render(<App />, document.getElementById("root"));