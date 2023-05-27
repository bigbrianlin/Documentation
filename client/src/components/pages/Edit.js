import React, { useEffect, useState } from 'react';
import {
  updateDocument,
  useDocuments,
  clearCurrent,
} from '../../context/document/DocumentState';

const initialDocument = {
  title: '',
  content: '',
  type: 'private',
};

const Edit = () => {
  const [documentState, documentDispatch] = useDocuments();
  const { current } = documentState;
  const [document, setDocument] = useState(initialDocument);
  useEffect(() => {
    if (current !== null) {
      setDocument(current);
    } else {
      setDocument(initialDocument);
    }
  }, [current]);

  const { title, content, type } = document;

  const onChange = e =>
    setDocument({ ...document, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    updateDocument(documentDispatch, document);
    clearAll();
  };

  const clearAll = () => {
    clearCurrent(documentDispatch);
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>Update Document</h2>
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
        <input
          type='submit'
          value={'Update Document'}
          className='btn btn-primary btn-block'
        />
      </div>
      {current && (
        <div>
          <button className='btn btn-light btn-block' onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default Edit;
