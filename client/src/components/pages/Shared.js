import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Shared = () => {
  const navigate = useNavigate();
  const [documents, setDocuments] = useState([]);

  const onClick = documentId => {
    navigate(`/document/${documentId}`);
  };

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
            <p>{document.date}</p>
            <p>{document.userName}</p>
            <button onClick={() => onClick(document._id)}>view</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Shared;
