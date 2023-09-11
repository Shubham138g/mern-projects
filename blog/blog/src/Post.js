import React from 'react';
import {formatISO9075} from 'date-fns';

const Post = ({title,summary,content,cover,createdAt}) => {
  return (
    <>
       <div className="post">
          <div className="image">
          <img src="https://imgs.search.brave.com/XGSermwPiA0Cp8qFeyJdMhJd21dJFQpicAqsmsiwFxc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9ibG9n/Lmh1YnNwb3QuY29t/L2h1YmZzL1BORy1K/UEcuanBn" alt="" />
          </div>
          <div className="text">
            <h2>{title}</h2>
            <p className="info">
              <a href="" className="author">Shubham Gupta</a>
              <time>{formatISO9075(new Date(createdAt))}</time>
            </p>
            <p className="summary">{summary}  </p>
          </div>
        </div>
    </>
  );
}

export default Post;
