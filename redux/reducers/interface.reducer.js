import * as t from "../types";

const initialState = {
  isLoading: false,
};

export default function InterfaceReducer(state = initialState, action) {
  switch (action.type) {
    case t.LOADER_START: {
      return { ...state, isLoading: true };
    }

    case t.LOADER_STOP: {
      return { ...state, isLoading: false };
    }


    default: {
      return state;
    }
  }
}
