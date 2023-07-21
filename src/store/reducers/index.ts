// state of app (initial state)
// function accepts 2 args (state app, action)

const initialState = {
  counter: 999,
};

export const counterReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "INCREASE":
      return { ...state, counter: state.counter + 1 };
    case "DECREASE":
      return { ...state, counter: state.counter - 1 };
    case "INCREASE_BY_AMOUNT":
      return { ...state, counter: state.counter + action.payload };
    default:
      return state;
  }
};
