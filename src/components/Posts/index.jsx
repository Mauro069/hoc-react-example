import styles from "./styles.module.scss";

export const PostsList = ({ dataList }) => {
  return (
    <div className={styles.list}>
      {dataList?.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

function PostCard({ post }) {
  const { body, title } = post;

  return (
    <div className={styles.postCard}>
      <h3>{title}</h3>
      <span>{body}</span>
    </div>
  );
}
