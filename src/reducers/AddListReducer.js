let initialState = {
  userData: [],
};

const changeTodoText = (state = initialState, action) => {
  switch (action.type) {
    case "Listing":
      return { ...state, userData: [...state.userData, action.payload] };
    case "DeleteListing":
      return {
        ...state,
        userData: state.userData.filter((i) => i.id !== action.payload),
        
      };
      case "EditListing":
        let update =  state.userData.map((item)=>item.id !== action.payload.id ? item:action.payload) 
        return {
          ...state,
          userData: update,
        }
        default:
      return state;
  }
};
export default changeTodoText;
