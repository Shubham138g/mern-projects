import React, { useEffect,useState } from 'react';
import Post from '../Post';

const IndexPage = () => {
  const  [post, setpost] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:4000/post').then(response =>{
      response.json().then(posts =>{
        setpost(posts);
      })
    })
  },[])
  return (
    <>
      {post.length>0 && post.map(post=>{
        <Post {...post}/>
      })}
    </>
  );
}

export default IndexPage;
