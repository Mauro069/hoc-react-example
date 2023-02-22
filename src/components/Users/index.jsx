import styles from "./styles.module.scss";

export const UserList = ({ dataList }) => {
  return (
    <div className={styles.list}>
      {dataList?.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

function UserCard({ user }) {
  const { name, email, phone } = user;

  return (
    <div className={styles.userCard}>
      <h3>{name}</h3>
      <div className={styles.bottom}>
        <span>{email}</span>
        <p>{phone}</p>
      </div>
    </div>
  );
}
