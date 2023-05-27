import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Department = () => {
  const navigate = useNavigate();
  const [documents, setDocuments] = useState([]);

  const onClick = documentId => {
    navigate(`/document/${documentId}`);
  };

  useEffect(() => {
    axios
      .get('/api/department')
      .then(res => {
        setDocuments(res.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  return (
    <div>
      <h1>Department Documents</h1>
      <ul>
        {documents.map(document => (
          <li key={document._id}>
            <h2>{document.title}</h2>
            <p>{new Date(document.date).toLocaleDateString()}</p>
            <p>{document.userName}</p>
            <button onClick={() => onClick(document._id)}>view</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Department;
