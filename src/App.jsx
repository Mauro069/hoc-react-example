import { useFetchData } from "./Hooks/useFetchData";
import { UserList } from "./components/Users";
import { PostsList } from "./components/Posts";

import Header from "./components/Header";
import { withSearchBar } from "./components/WithSearch/withSearch";

function App() {
  const { data } = useFetchData([
    { name: "users", url: "https://jsonplaceholder.typicode.com/users" },
    { name: "posts", url: "https://jsonplaceholder.typicode.com/posts" },
  ]);

  const UserListWithSearch = withSearchBar(UserList, data?.users, [
    "name",
    "phone",
    "email",
  ]);

  const PostsListWithSearch = withSearchBar(PostsList, data?.posts, [
    "body",
    "title",
  ]);

  return (
    <div>
      <Header />
      <h2>Usuarios</h2>
      {/* <UserList dataList={data?.users} /> */}
      <UserListWithSearch />
      <hr />
      <h2>Posts</h2>
      {/* <PostsList dataList={data?.posts} /> */}
      <PostsListWithSearch />
    </div>
  );
}

export default App;
