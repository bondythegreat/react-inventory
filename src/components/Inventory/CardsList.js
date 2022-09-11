import React from 'react';
import { useSelector } from 'react-redux';
import { viewTypeById } from '../../store/InventoryType/InventoryTypeSlice';
import InventoryItem from './InventoryItem';

const CardsList = ({ items, idType, handleAdd }) => {
  const inventoryType = useSelector(viewTypeById(idType));

  return (
    <div className='items-list d-flex flex-wrap flex-column flex-md-row'>
      {items.map((item) => (
        <InventoryItem
          inventoryType={inventoryType}
          item={item}
          key={item.id}
        />
      ))}
      <div className='text-center'>
        <button
          type='button'
          className='btn btn-primary btn-add mt-2'
          onClick={() => handleAdd(idType)}
        >
          Add Item
        </button>
      </div>
    </div>
  );
};

export default CardsList;
