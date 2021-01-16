// Get State from the Redux Store
// https://www.freecodecamp.org/learn/front-end-libraries/redux/get-state-from-the-redux-store
// The Redux store object provides several methods that allow you to interact with it. For example, you can retrieve the current state held in the Redux store object with the getState() method.

// The code from the previous challenge is re-written more concisely in the code editor. Use store.getState() to retrieve the state from the store, and assign this to a new variable currentState.

const store = Redux.createStore(
    (state = 5) => state
  );
  
  // Change code below this line
  let currentState = store.getState()