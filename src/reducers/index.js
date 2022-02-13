import { CREATE_EVENT, DELETE_ALL_EVENTS, DELETE_EVENT } from "../actions";
// action = {
//   type: "CREATE_EVENT",
//   title: "2020olymipc",
//   body: "2020olympic come on!",
// };
// before
// state = [{
//     id:1,
//     title: "2020olymipc",
//     body: "2020olympic come on!",
// }];

// after
// state =[]

// state = [
//   { id: 1, title: "1", body: "aaaa" },
//   { id: 2, title: "2", body: "abbb" },
//   { id: 3, title: "3", body: "cccc" },
// ];

const events = (state = [], action) => {
  switch (action.type) {
    case CREATE_EVENT:
      const event = { title: action.title, body: action.body };
      const length = state.length;
      const id = length === 0 ? 1 : state[length - 1].id + 1;
      return [...state, { id, ...event }];
    case DELETE_EVENT:
      return state.filter((event) => event.id !== action.id);
    case DELETE_ALL_EVENTS:
      return [];
    default:
      return state;
  }
};

export default events;
