const initialState = 0;
const number = 0;
const changeNumber = (state = { initialState, number }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "STEPS":
      return state + action.payload;
    default:
      return state;
  }
};

export default changeNumber;
