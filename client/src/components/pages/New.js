import React, { useState } from 'react';
import DocumentContext from '../../context/document/documentContext';

const New = () => {
  const [document, setDocument] = useState({
    title: '',
    content: '',
    type: 'private',
  });

  const { title, content, type } = document;

  const onChange = e =>
    setDocument({ ...document, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    DocumentContext.addDocument(document);
    setDocument({
      title: '',
      content: '',
      type: 'private',
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Add Document</h2>
      <input
        type='text'
        placeholder='title'
        name='title'
        value={title}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='content'
        name='content'
        value={content}
        onChange={onChange}
      />
      <h5>Type</h5>
      <input
        type='radio'
        name='type'
        value='private'
        checked={type === 'private'}
        onChange={onChange}
      />
      Private{' '}
      <input
        type='radio'
        name='type'
        value='shared'
        checked={type === 'shared'}
        onChange={onChange}
      />
      Shared
      <div>
        <button
          className='btn waves-effect waves-light'
          type='submit'
          value='Add Document'
        >
          Submit
          <i class='material-icons right'>send</i>
        </button>
      </div>
    </form>
  );
};

export default New;
