// Remove an Item from an Array
// https://www.freecodecamp.org/learn/front-end-libraries/redux/remove-an-item-from-an-array

// Time to practice removing items from an array. The spread operator can be used here as well. Other useful JavaScript methods include slice() and concat().

// The reducer and action creator were modified to remove an item from an array based on the index of the item. Finish writing the reducer so a new state array is returned with the item at the specific index removed.

const immutableReducer = (state = [0,1,2,3,4,5], action) => {
    switch(action.type) {
      case 'REMOVE_ITEM':
        // Don't mutate state here or the tests will fail
        let newArr = [...state]
        newArr.splice(action.index,1)
        return newArr
      default:
        return state;
    }
  };
  
  const removeItem = (index) => {
    return {
      type: 'REMOVE_ITEM',
      index
    }
  }
  
  const store = Redux.createStore(immutableReducer);