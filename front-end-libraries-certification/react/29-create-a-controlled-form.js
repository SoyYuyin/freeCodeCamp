// Create a Controlled FormPassed
// https://www.freecodecamp.org/learn/front-end-libraries/react/create-a-controlled-form

// The last challenge showed that React can control the internal state for certain elements like input and textarea, 
// which makes them controlled components. This applies to other form elements as well, including the regular HTML form element.
// The MyForm component is set up with an empty form with a submit handler. The submit handler will be called when the form is submitted.
// We've added a button which submits the form. You can see it has the type set to submit indicating it is the button 
// controlling the form. Add the input element in the form and set its value and onChange() attributes like the last challenge. 
// You should then complete the handleSubmit method so that it sets the component state property submit to the current input 
// value in the local state.  
// Note: You also must call event.preventDefault() in the submit handler, to prevent the default form submit behavior which 
// will refresh the web page.
// Finally, create an h1 tag after the form which renders the submit value from the component's state. You can then type in the 
// form and click the button (or press enter), and you should see your input rendered to the page.




// The onChange attribute of the input tag is  updating the 'input' property of state, everytime we type a new characeter.
// We are saving it into the 'submit' property of state only when we submit the form. 
//It is then displayed in the H1 tag below

class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        submit: ''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({
        input: event.target.value
      });
    }
  
    handleSubmit(event) {
      // Change code below this line
      event.preventDefault()
      this.setState(state=>({submit:state.input}))
      // Change code above this line
    }
  
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            {/* Change code below this line */}
            <input value = {this.state.input} onChange={this.handleChange} ></input>
            {/* Change code above this line */}
            <button type='submit'>Submit!</button>
          </form>
          {/* Change code below this line */}
          <h2>Current input (state.input) is: {this.state.input}</h2>
          <h1>Submitted input (state.submit) is: {this.state.submit}</h1>
          {/* Change code above this line */}
        </div>
      );
    }
  }