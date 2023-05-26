import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Shared = () => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    axios
      .get('/api/shared')
      .then(res => {
        setDocuments(res.data);
      })
      .catch(error => {
        console.error(error);
      });
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <h1>Shared Documents</h1>
      <ul>
        {documents.map(document => (
          <li key={document._id}>
            <h2>{document.title}</h2>
            <p>{document.content}</p>
            <p>{document.userName}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Shared;
