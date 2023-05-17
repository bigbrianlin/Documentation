import React, { useReducer } from 'react';
import uuid from 'uuid';
import DocumentContext from './documentContext';
import documentReducer from './documentReducer';
import {
  GET_DOCUMENTS,
  ADD_DOCUMENT,
  DELETE_DOCUMENT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_DOCUMENT,
  FILTER_DOCUMENTS,
  CLEAR_DOCUMENTS,
  CLEAR_FILTER,
  DOCUMENT_ERROR,
} from '../types';

const DocumentState = props => {
  const initialState = {
    documents: [
      {
        id: 1,
        title: 'Jennie is beautiful',
        content:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis veritatis iusto dolore omnis ratione minima eveniet optio voluptatem, illum repellat consequuntur doloremque nesciunt quas, aliquid cumque a velit id ipsa?',
        department: 'DepartmentA',
        type: 'shared',
      },
      {
        id: 2,
        title: 'IU is beautiful',
        content:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis veritatis iusto dolore omnis ratione minima eveniet optio voluptatem, illum repellat consequuntur doloremque nesciunt quas, aliquid cumque a velit id ipsa?',
        department: 'DepartmentB',
        type: 'private',
      },
      {
        id: 3,
        title: 'Jisoo is beautiful',
        content:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis veritatis iusto dolore omnis ratione minima eveniet optio voluptatem, illum repellat consequuntur doloremque nesciunt quas, aliquid cumque a velit id ipsa?',
        department: 'DepartmentC',
        type: 'shared',
      },
    ],
  };

  const [state, didpatch] = useReducer(documentReducer, initialState);

  // Add Document

  // Delete Document

  // Set Current Document

  // Clear Current Document

  // Update Document

  // Filter Documents

  // Clear Filter

  return (
    <DocumentContext.Provider value={{ documents: state.documents }}>
      {props.children}
    </DocumentContext.Provider>
  );
};

export default DocumentState;
