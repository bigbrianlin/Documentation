import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const User = () => {
  const navigate = useNavigate();
  const [documents, setDocuments] = useState([]);

  const onClick = documentId => {
    navigate(`/document/${documentId}`);
  };

  useEffect(() => {
    axios
      .get('/api/documents')
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
      <h1>User Documents</h1>
      <ul>
        {documents.map(document => (
          <li key={document._id}>
            <h2>{document.title}</h2>
            <p>{document.content}</p>
            <p>{document.userName}</p>
            <button onClick={() => onClick(document._id)}>view</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default User;
