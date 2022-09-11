import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  viewAllTypes,
  addInventory,
  viewInventoriesByType,
} from '../store/InventoryType/InventoryTypeSlice';
import CardsList from '../components/Inventory/CardsList';

const HomePage = () => {
  const dispatch = useDispatch();

  const HandleAdd = (idType) => {
    dispatch(addInventory(idType));
  };
  const typeItems = useSelector(viewAllTypes);
  const GetInventoriesByType = (idType) =>
    useSelector(viewInventoriesByType(idType));
  return (
    <div>
      {typeItems.map((typeItem) => {
        const items = GetInventoriesByType(typeItem.id);

        return (
          <div className='mb-2' key={typeItem.id}>
            <h2 className='mb-2'>{typeItem.label}</h2>
            <CardsList
              items={items}
              idType={typeItem.id}
              handleAdd={HandleAdd}
            />
          </div>
        );
      })}
    </div>
  );
};

export default HomePage;
