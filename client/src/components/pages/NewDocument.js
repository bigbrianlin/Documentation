import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NewDocument = () => {
  const navigate = useNavigate();
  const [document, setDocument] = useState({
    title: '',
    content: '',
    type: 'private',
  });

  const { title, content, type } = document;

  const onChange = e =>
    setDocument({ ...document, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/documents', document);
      const id = res.data._id;
      console.log(res.data);

      setDocument({
        title: '',
        content: '',
        type: 'private',
      });

      navigate(`/documents/${id}`);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>Add Document</h2>
      <input
        type='text'
        placeholder='Title'
        name='title'
        value={title}
        onChange={onChange}
        required
      />
      <input
        type='text'
        placeholder='Content'
        name='content'
        value={content}
        onChange={onChange}
        required
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
        <input
          type='submit'
          value='Add Document'
          className='btn btn-primary btn-block'
        />
      </div>
    </form>
  );
};

export default NewDocument;
