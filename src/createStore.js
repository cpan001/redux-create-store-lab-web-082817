import candyReducer from "./reducers/candyReducer";
import countReducer from "./reducers/countReducer";

export default function createStore(reducer) {
  // add your code here
  let state;

  function dispatch(action) {
    state = reducer(state, action);
    render();
  }

  dispatch({ type: "@@INIT" });

  function getState() {
    return state;
  }

  return { dispatch, getState };
}

function render() {
  // const container = document.getElementById("container");
}

let candyStore = createStore(candyReducer);
let countStore = createStore(countReducer);
