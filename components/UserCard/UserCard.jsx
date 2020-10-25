import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import styles from "./UserCard.module.sass";

function UserCard({ user: { login, avatar_url, ...user } }) {
  const dispatch = useDispatch();

  return (
    <div className={styles.card}>
      <div className={styles.card_img}>
        <img src={avatar_url} alt="" />
      </div>
      <div className={styles.card_username}>{login}</div>
      <center>
        <Link
          href={`/profile/${login}`}
          onClick={() => {
            dispatch({ type: "BlockLoad" });
          }}
        >
          <a className={styles.card_openProfile}>View profile</a>
        </Link>
      </center>
    </div>
  );
}

export default UserCard;
