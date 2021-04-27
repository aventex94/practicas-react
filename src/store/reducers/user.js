import { SHOW_USERS, SET_USER } from "../actions/types";

const initialState = {
  user: "Matias",
  status: "idle",
  error: null,
};

export default function user(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SHOW_USERS:
      return { ...state, user: payload }; //MODIFICO EL ATRIBUTO DEL STATE Y DEVUELVO LO QUE YA TIENE STATE

    case SET_USER:
      return { ...state, user: payload };

    default:
      return state;
  }
}
