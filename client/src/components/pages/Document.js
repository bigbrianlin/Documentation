// import React, { useState, useEffect, useContext } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import axios from 'axios';
// import DocumentContext from '../../context/document/documentContext';
// import {
//   useDocuments,
//   deleteDocument,
//   setCurrent,
//   clearCurrent,
// } from '../../context/document/DocumentState';

// const Document = ({ document }) => {
//   const documentDispatch = useDocuments()[1];
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');
//   const [department, setDepartment] = useState('');
//   const { id } = useParams();

//   const { _id, name, email, phone, type } = document;

//   const onDelete = () => {
//     deleteDocument(documentDispatch, _id);
//     clearCurrent(documentDispatch);
//   };

//   useEffect(() => {
//     const fetchDocumentContent = async () => {
//       try {
//         const res = await axios.get(`/api/documents/${id}`);
//         const { title, content, department } = res.data;
//         setTitle(title);
//         setContent(content);
//         setDepartment(department);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchDocumentContent();
//   }, [id]);

//   return (
//     <div>
//       <h1>{title}</h1>
//       <h2>{content}</h2>
//       <h3>{department}</h3>
//       <button onClick={() => setCurrent(documentDispatch, document)}>
//         <Link to='/Edit'>Edit</Link>
//       </button>
//       <button onClick={onDelete}>Delete</button>
//     </div>
//   );
// };

// Document.protoTypes = {
//   document: PropTypes.object.isRequired,
// };

// export default Document;
