import React from 'react';

const CardItem = ({ title, children, handleRemove }) => {
  return (
    <div className='card m-2'>
      <div className='card-header d-flex'>
        <span className='w-100'>{title}</span>
        <button
          type='button'
          className='btn-close ms-2'
          aria-label='Close'
          onClick={handleRemove}
        ></button>
      </div>
      <div className='card-body'>{children}</div>
    </div>
  );
};

export default CardItem;
