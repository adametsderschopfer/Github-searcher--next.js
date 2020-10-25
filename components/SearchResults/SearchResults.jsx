import UserCard from "../UserCard/UserCard";
import styles from "./SearchResults.module.sass";

export default function SearchResults({ users }) {
  return (
    <>
      

      <div className={styles.SearchResultContainer}>
        <hr className="horizontalLine" />

        {users &&
          users.map((user, idx) => (
            <UserCard key={idx + user.id + Date.now} user={user} />
          ))}
      </div>
    </>
  );
}
