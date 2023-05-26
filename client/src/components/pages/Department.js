import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

const Department = () => {
  const [documents, setDocuments] = useState([]);
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
            <p>{document.content}</p>
            <p>{document.userName}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Department;
