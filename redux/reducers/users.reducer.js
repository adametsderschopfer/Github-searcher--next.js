import * as t from "../types";

const initialState = {
  users: [],
  currentUser: [],
};

export default function UsersReducer(state = initialState, action) {
  switch (action.type) {
    case t.FILL_SEARCHED_USERS: {
      return { ...state, users: action.users };
    }

    case t.FILL_CURRENT_USER: {
      return { ...state, currentUser: action.currentUser };
    }

    case t.CLEAR_SEARCHE_USERS: {
      return { ...state, users: [] };
    }

    case t.CLEAR_CURRENT_USER: {
      return { ...state, currentUser: [] };
    }

    default: {
      return state;
    }
  }
}
