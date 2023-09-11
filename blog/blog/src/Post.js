import React from 'react';

const Post = ({title,summary,content,cover,createdAt}) => {
  return (
    <>
       <div className="post">
          <div className="image">
          <img src="https://imgs.search.brave.com/XGSermwPiA0Cp8qFeyJdMhJd21dJFQpicAqsmsiwFxc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9ibG9n/Lmh1YnNwb3QuY29t/L2h1YmZzL1BORy1K/UEcuanBn" alt="" />
          </div>
          <div className="text">
            <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, sed.</h2>
            <p className="info">
              <a href="" className="author">Shubham Gupta</a>
              <time>2023-09-08</time>
            </p>
            <p className="summary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit unde debitis laudantium animi veniam non!
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, ipsa.
            </p>
          </div>
        </div>
    </>
  );
}

export default Post;
