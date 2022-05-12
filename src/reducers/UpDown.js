const initialState = [0,''];
const changeTheNmuber = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return [state[0] + action.payload['num'], action.payload['data'].title];
    case "DECREMENT":
      return [state[0] - action.payload['num'], action.payload['data'].title];
    default:
      return state;
  }
};

export default changeTheNmuber;
