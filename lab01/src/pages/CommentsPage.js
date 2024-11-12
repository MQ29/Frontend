import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../data/useFetch';

const CommentsPage = () => {
  const { id } = useParams();
  const [comments] = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
  const [post] = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  return (
    <div>
      <h2>{post?.title}</h2>
      <p>{post?.body}</p>
      <h3>Comments</h3>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <strong>{comment.name}</strong> (<a href={`mailto:${comment.email}`}>{comment.email}</a>)
            <p>{comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentsPage;
