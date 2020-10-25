import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../components/SearchBar";
import { userSearchingAction, clearUsers } from "../redux/actions/actions";

function SearchBarContainer({ style }) {
  const [username, setUsername] = useState("");
  const [searchingUsername, setSearchingUsername] = useState("");
  const { isLoading } = useSelector((state) => state.interface);
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  function inputHandler(e) {
    if (e.target.value.length) {
      setUsername(e.target.value);
    } else {
      dispatch(clearUsers());
      setUsername("");
    }
  }

  async function enterHandler(e) {
    e.preventDefault();
    
    if (searchingUsername === username) {
      return;
    }

    setSearchingUsername(username);

    dispatch(userSearchingAction(username));
  }

  return (
    <SearchBar
      loading={isLoading}
      handlers={{ inputHandler, enterHandler }}
      value={username}
      style={style}
    />
  );
}

export default SearchBarContainer;
