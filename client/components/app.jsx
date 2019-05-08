class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form1: true,
      form2: false,
      form3: false,
    }
  }
  render() {
    return (
      <div>
        <h1>Multi Part Checkout</h1>
        {this.state.form1 ? <Form1 /> : this.state.form2 ? <Form2 /> : this.state.form3 ? <Form3 /> : <Review />}
      </div>
    )
  }
}


class Form1 extends React.Component {
  constructor(props) {
    super(props);
  }
  handleForm(e) {
    e.preventDefault();
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleForm}>
          <input type="text"></input>
          <input type="submit"></input>
        </form>
      </div>
    )
  }
}
class Form2 extends React.Component {
  constructor(props) {
    super(props);
  }

  handleForm(e) {
    e.preventDefault();
  }

  render(){
    return(
      <div>
      <form onSubmit={this.handleForm}>
        <input type="text"></input>
        <input type="submit"></input>
      </form>
    </div>
      )
    }
  }

  class Form3 extends React.Component {
    constructor(props) {
      super(props);
    }
    
    handleForm(e) {
      e.preventDefault();
    }

    render() {
      return (
        <div>
          <form onSubmit={this.handleForm}>
            <input type="text"></input>
            <input type="submit"></input>
          </form>
        </div>
      )
    }
  }



const Review = () => (
  <div>
    <h1>Thanks for shopping with us!</h1>
  </div>
)

  // F1 collects name, email, and password for account creation.
  // F2 collects ship to address (line 1, line 2, city, state, zip code) and phone number.
  // F3 collects credit card #, expiry date, CVV, and billing zip code.

ReactDOM.render(<App />, document.getElementById("root"));