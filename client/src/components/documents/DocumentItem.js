import React from 'react';

const DocumentItem = ({ document }) => {
  const { id, title, content, department, type, userName } = document;

  return (
    <ul className='collection with-header'>
      <li className='collection-item'>
        <div>
          {title} {department} {userName}
          <a href='' className='secondary-content'>
            <i className='material-icons'>send</i>
          </a>
        </div>
      </li>
    </ul>
  );
};

export default DocumentItem;
