import React from 'react';

const DocumentItem = ({ document }) => {
  const { id, title, content, department, type, userName } = document;

  return (
    <ul class='collection with-header'>
      <li class='collection-item'>
        <div>
          {title} {department} {userName}
          <a href='' class='secondary-content'>
            <i class='material-icons'>send</i>
          </a>
        </div>
      </li>
    </ul>
  );
};

export default DocumentItem;
