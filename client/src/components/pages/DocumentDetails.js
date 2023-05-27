import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../context/auth/AuthState';

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

  // Get userID
  const [userProfile, setUserProfile] = useState(null);
  const [state] = useAuth();
  const userID = state.user && state.user._id;
  const isAuthenticated = state.isAuthenticated;

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        if (userID) {
          const response = await axios.get(`/api/users/${userID}`);
          setUserProfile(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserProfile();
  }, [userID]);

  if (!document || !userProfile) {
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

  const isOwner = () => {
    if (userProfile.user && document.user === userProfile.user._id) {
      return true;
    }
    return false;
  };

  const isDepartment = () => {
    if (
      userProfile.user &&
      document.department === userProfile.user.department
    ) {
      return true;
    }
    return false;
  };

  return (
    <div>
      <h2>{document.title}</h2>
      <p>{document.content}</p>
      <p>{document.department}</p>
      <p> {document.userName} </p>

      {isAuthenticated && isOwner() ? (
        <>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>{' '}
        </>
      ) : isAuthenticated && isDepartment() ? (
        <button onClick={handleEdit}>Edit</button>
      ) : null}
    </div>
  );
};

export default DocumentDetail;
