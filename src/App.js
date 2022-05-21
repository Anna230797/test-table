import React, { useEffect, useState } from "react";
import "./App.css";
import InputItem from "./components/InputItem";
import PostsItem from "./components/PostsItem";
import PaginationItem from "./components/Pagination";

function App() {

  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [currentPosts, setCurrentPosts] = useState([]);
   const [value, setValue] = useState("");

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage((prev) => prev + 1);
  const prevPage = () => setCurrentPage((prev) => prev - 1);
  
  const sortData = (field) => {
    console.log(field);
    const copyData = currentPosts.concat();
    const sortData = copyData.sort((a, b) => {
      return a[field] > b[field] ? 1 : -1;
    });
    setCurrentPosts(sortData);
  };
  
  const search = (data) => {
    return data.filter(
      (item) =>
        item.title.toLowerCase().includes(value) ||
        item.body.toLowerCase().includes(value)
    );
  };
  
  useEffect(() => {
   //получаем индекс последний страницы
  const lastPostsIndex = currentPage * postsPerPage;
  //получаем индекс первой  страницы
  const firstPostsIndex = lastPostsIndex - postsPerPage;
  //получаем индекс текущей страницы
  const currentPostsValue = posts.slice(firstPostsIndex, lastPostsIndex);
  setCurrentPosts(currentPostsValue)
  }, [currentPage, posts]);

  useEffect(() => {
    async function fetchPosts() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
    const data = await response.json();
    setPosts(data);
    }
    fetchPosts();
  }, []);
  return (
    <div className="container">
      <InputItem  setValue={setValue} />

      <PostsItem posts={search(currentPosts)} sortData={sortData} />

      <PaginationItem
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </div>
  );
}

export default App;

// {
//   "userId": 1,
//   "id": 1,
//   "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//   "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
// }
