import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
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
        userName: 'Brian Lin',
        title: 'Jennie is beautiful',
        content:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis veritatis iusto dolore omnis ratione minima eveniet optio voluptatem, illum repellat consequuntur doloremque nesciunt quas, aliquid cumque a velit id ipsa?',
        department: 'DepartmentA',
        type: 'shared',
      },
      {
        id: 2,
        userName: 'Brian Lin',
        title: 'IU is beautiful',
        content:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis veritatis iusto dolore omnis ratione minima eveniet optio voluptatem, illum repellat consequuntur doloremque nesciunt quas, aliquid cumque a velit id ipsa?',
        department: 'DepartmentB',
        type: 'private',
      },
      {
        id: 3,
        userName: 'Brian Lin',
        title: 'Jisoo is beautiful',
        content:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis veritatis iusto dolore omnis ratione minima eveniet optio voluptatem, illum repellat consequuntur doloremque nesciunt quas, aliquid cumque a velit id ipsa?',
        department: 'DepartmentC',
        type: 'shared',
      },
    ],
  };

  const [state, dispatch] = useReducer(documentReducer, initialState);

  // Add Document
  const addDocument = document => {
    document.id = uuidv4();
    dispatch({ type: ADD_DOCUMENT, payload: document });
  };

  // Delete Document

  // Set Current Document

  // Clear Current Document

  // Update Document

  // Filter Documents

  // Clear Filter

  return (
    <DocumentContext.Provider
      value={{ documents: state.documents, addDocument }}
    >
      {props.children}
    </DocumentContext.Provider>
  );
};

export default DocumentState;
