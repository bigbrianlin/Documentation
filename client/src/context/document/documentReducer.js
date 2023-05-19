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

// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case ADD_DOCUMENT:
      return {
        ...state,
        document: [...state.documents, action.payload],
      };
    default:
      return state;
  }
};
