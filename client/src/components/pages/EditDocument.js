import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditDocument = ({ match }) => {
  const [document, setDocument] = useState({
    title: '',
    content: '',
    type: 'private',
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getDocument();
    // eslint-disable-next-line
  }, []);

  const getDocument = async () => {
    try {
      const res = await axios.get(`/api/documents/${id}`);
      setDocument(res.data);
      console.log(res.data);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  const { title, content, type } = document;

  const onChange = e => {
    setDocument({ ...document, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    try {
      await axios.put(`/api/documents/${id}`, document);
      navigate(`/document/${id}`);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Edit Document</h2>
      <input
        type='text'
        placeholder='Title'
        name='title'
        value={title}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Content'
        name='content'
        value={content}
        onChange={onChange}
      />
      <h5>Document Type</h5>
      <input
        type='radio'
        name='type'
        value='private'
        checked={type === 'private'}
        onChange={onChange}
      />{' '}
      Private{' '}
      <input
        type='radio'
        name='type'
        value='shared'
        checked={type === 'shared'}
        onChange={onChange}
      />{' '}
      Shared
      <div>
        <input type='submit' value='Update Document' />
      </div>
    </form>
  );
};

export default EditDocument;
