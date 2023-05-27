import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const DocumentDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [document, setDocument] = useState(null);

  useEffect(() => {
    const fetchDocument = async () => {
      try {
        const response = await axios.get(`/api/documents/${id}`);
        setDocument(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDocument();
  }, [id]);

  const handleEdit = () => {
    navigate(`/documents/${id}/edit`);
  };

  const handleDelete = () => {
    axios
      .delete(`/api/documents/${id}`)
      .then(() => {
        navigate('/documents');
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2>{document?.title}</h2>
      <p>{document?.content}</p>
      <p>{document?.department}</p>

      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DocumentDetail;
