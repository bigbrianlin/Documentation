import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import DocumentContext from '../../context/document/documentContext';

const Document = ({ document }) => {
  const documentContext = useContext(DocumentContext);
  const { deleteDocument, setCurrent, clearCurrent } = documentContext;

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [department, setDepartment] = useState('');
  const { id } = useParams();

  const onDelete = () => {
    deleteDocument(id);
    clearCurrent();
  };

  useEffect(() => {
    const fetchDocumentContent = async () => {
      try {
        const res = await axios.get(`/api/documents/${id}`);
        const { title, content, department } = res.data;
        setTitle(title);
        setContent(content);
        setDepartment(department);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDocumentContent();
  }, [id]);

  return (
    <div>
      <h1>{title}</h1>
      <h2>{content}</h2>
      <h3>{department}</h3>
      <button onClick={() => setCurrent(document)}>
        <Link to='/New'>Edit</Link>
      </button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

Document.protoTypes = {
  document: PropTypes.object.isRequired,
};

export default Document;
