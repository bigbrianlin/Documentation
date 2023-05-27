import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const DocumentDetail = props => {
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

  if (!document) {
    return <div>Loading...</div>;
  }

  const handleEdit = () => {
    navigate(`/document/${id}/edit`);
  };

  const handleDelete = () => {
    axios
      .delete(`/api/documents/${id}`)
      .then(() => {
        navigate('/', { replace: true });
      })
      .catch(error => {
        console.error(error);
      });
  };

  // const user = props.value.state.user;
  // const isOwner = user && document.user === user._id;
  // const isShared = document.type === 'shared';
  // const isDepartment = user && document.department === user.department;

  return (
    <div>
      <h2>{document?.title}</h2>
      <p>{document?.content}</p>
      <p>{document?.department}</p>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>

      {/* {isOwner && (
        <>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>{' '}
        </>
      )}

      {!isOwner && isDepartment && <button onClick={handleEdit}>Edit</button>} */}
    </div>
  );
};

export default DocumentDetail;
