import * as t from "../types";
import { http_request } from "../../utils/http-request";

export function userSearchingAction(username) {
  return async (dispatch) => {
    dispatch({ type: t.CLEAR_SEARCHE_USERS });
    dispatch({ type: t.LOADER_START });

    const users = await http_request(`search/users?q=${username}&`);

    dispatch({ type: t.LOADER_STOP });

    if (users && users.items.length) {
      dispatch({ type: t.FILL_SEARCHED_USERS, users: users.items });
    }
  };
}

export function clearUsers() {
  return (dispatch) => {
    dispatch({ type: t.CLEAR_SEARCHE_USERS });
  };
}
