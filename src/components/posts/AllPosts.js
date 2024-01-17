import { useEffect, useState } from "react";
import { getAllPosts } from "../../services/allPostsService";
import "./allPosts.css";
// import { TopicsFilter } from "../topics/topicsFilter";
import { getAllTopics } from "../../services/topicsService";

export const AllPostsList = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [topics, setAllTopics] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getAllPosts().then((allPostsArray) => {
      setAllPosts(allPostsArray);
    });
  }, []);

  useEffect(() => {
    getAllTopics().then((topicsArr) => {
      setAllTopics(topicsArr);
    });
  }, []);

  useEffect(() => {
    const foundWords = allPosts.filter((post) => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
    set)
  },[searchTerm, allPosts])

  return (
    <section>
      <h1 className="page-title">All Posts</h1>
      <select
        id="resource"
        className="select"
        onChange={(event) => {
          console.log(event.target.value);
          //   setAllPosts(event.posts);
        }}
      >
        <option value="0">Select Topic...</option>
        {topics.map((topic) => {
          return <option key={topic.id}>{topic.name}</option>;
        })}
      </select>
      <button className="btn">Show All</button>
      <input type="text" placeholder="Search" className="search-bar" onChange={(event) => {
        setSearchTerm(event.target.value)
      }}/>
      <div className="all-posts-list">
        {allPosts.map((postObj) => {
          return (
            <div className="all-posts-list-item" key={postObj.id}>
              <h2>Title: {postObj.title}</h2>
              <h4>Topic: {postObj.topic.name}</h4>
              <div>{postObj.likes.length} likes</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
