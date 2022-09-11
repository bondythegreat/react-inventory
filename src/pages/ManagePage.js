import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  //showAttributeTypes,
  viewAllTypes,
  addInventoryType,
  removeInventoryType,
} from '../store/InventoryType/InventoryTypeSlice';
import CardsListType from '../components/Inventory/CardsListType';

const ManagePage = () => {
  const dispatch = useDispatch();
  const HandleRemove = (item) => dispatch(removeInventoryType(item));
  const HandleAdd = () => {
    dispatch(addInventoryType());
  };
  const items = useSelector(viewAllTypes);
  // const attributeTypes = useSelector(showAttributeTypes);
  return (
    <div>
      <CardsListType
        items={items}
        handleRemove={HandleRemove}
        handleAdd={HandleAdd}
      />
    </div>
  );
};

export default ManagePage;
