import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  viewInventoriesByType,
  addInventory,
  removeInventory,
} from '../store/InventoryType/InventoryTypeSlice';
import { useParams } from 'react-router-dom';
import CardsList from '../components/Inventory/CardsList';

const TypePage = () => {
  const dispatch = useDispatch();
  let { id } = useParams();
  const items = useSelector(viewInventoriesByType(id));

  const HandleAdd = () => {
    dispatch(addInventory(id));
  };
  return (
    <div>
      <CardsList items={items} idType={id} handleAdd={HandleAdd} />
    </div>
  );
};

export default TypePage;
