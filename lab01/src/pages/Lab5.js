import React, { useReducer, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../data/useFetch';
import TableHeader from '../components/TableHeader';
import TableDataReducer from '../data/TableDataReducer';

const Lab5 = () => {
  const [posts] = useFetch("https://jsonplaceholder.typicode.com/posts");
  const [users] = useFetch("https://jsonplaceholder.typicode.com/users");
  const [comments] = useFetch("https://jsonplaceholder.typicode.com/comments");

  const initialTableData = posts.map((p) => ({
    user: users.find((u) => u.id === p.userId),
    post: p,
    comments: comments.filter((c) => c.postId === p.id),
  }));

  const [tableData, dispatch] = useReducer(TableDataReducer, initialTableData);

  useEffect(() => {
    dispatch({ type: "reset", initialData: initialTableData });
  }, [initialTableData, dispatch]);

  return (
    <div>
      <h2>Lab5 - Posts Table</h2>
      <table className="table">
        <TableHeader onSort={(type) => dispatch({ type, initialData: initialTableData })} />
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>
                <Link to={`/lab5/users/${row.user?.id}`}>{row.user?.name}</Link>
              </td>
              <td>
                <details>
                  <summary>{row.post.title}</summary>
                  <p>{row.post.body}</p>
                </details>
              </td>
              <td>
                <Link to={`/lab5/posts/${row.post.id}/comments`}>{row.comments.length}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Lab5;
