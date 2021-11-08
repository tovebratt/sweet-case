export default function reduce(state, action) {
  console.log("reducer", state);
  console.log("action name", action.name);

  switch(action.type) {
    case "SET_APPLICATION":
      return {
        ...state, name: action.name
      }

      default:
        return state;
  }
}

