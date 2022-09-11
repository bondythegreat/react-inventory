import React from 'react';
import CardItem from './CardItem';
import CustomButtonDropdown from '../Buttons/CustomButtonDropdown';

const CardsList = ({ items, handleRemove, idType, handleAdd }) => {
  return (
    <div className='items-list d-flex flex-wrap flex-column flex-md-row'>
      {items.map((item) => (
        <CardItem
          title={item.title}
          handleRemove={() => handleRemove(item)}
          key={item.id}
        >
          <div>{item.body}</div>
        </CardItem>
      ))}
      <div className='button-container'>
        <CustomButtonDropdown />
      </div>
    </div>
  );
};

export default CardsList;
