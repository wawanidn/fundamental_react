import { useState, useEffect } from "react";
import postsData from "../posts.json";
import Article from "../components/Article";
import Search from "../components/Search";

function Homepage() {
  const [posts, setPosts] = useState(postsData);
  const [totalPosts, setTotalPosts] = useState(0);
  const [externalPosts, setExternalPosts] = useState([]);

  const onSearchChange = (value) => {
    const filteredPosts = postsData.filter((item) =>
      item.title.includes(value)
    );
    setPosts(filteredPosts);
    setTotalPosts(filteredPosts.length);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setExternalPosts(json));
  }, []);

  useEffect(() => {
    console.log("ada post baru");
  }, [posts]);

  return (
    <>
      <h1>ini home page</h1>
      <Search onSearchChange={onSearchChange} totalPosts={totalPosts} />
      {posts.map((post, index) => (
        <Article {...post} key={index} />
      ))}
      <hr />
      <h2>External Posts</h2>
      {externalPosts.map((item, index) => (
        <div key={index}>- {item.title}</div>
      ))}
    </>
  );
}

export default Homepage;
