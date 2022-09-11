import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Input } from 'reactstrap';
import {
  removeInventory,
  viewInventoryById,
  updateInventoryAttribute,
} from '../../store/InventoryType/InventoryTypeSlice';
import CardItem from './CardItem';

const InventoryItem = ({ item, inventoryType }) => {
  const dispatch = useDispatch();
  const inventory = useSelector(viewInventoryById(item.id));
  const idTitle = inventoryType.titleAttributesId;
  const title = `${inventoryType.label} - ${
    inventory.attributes[idTitle] || ''
  }`;
  const handleRemove = (item) => dispatch(removeInventory(item));
  const handleChange = (e, item, attrId) => {
    dispatch(updateInventoryAttribute({ item, attrId, value: e.target.value }));
  };
  return (
    <CardItem
      title={title}
      handleRemove={() => handleRemove(item)}
      key={item.id}
    >
      <div>
        {inventoryType.attributes.map((attr) => {
          return (
            <div className='mb-2' key={attr.id}>
              <label>{attr.label}</label>
              <Input
                type={attr.dataType}
                value={inventory.attributes[attr.id]}
                onChange={(e) => handleChange(e, item, attr.id)}
              />
            </div>
          );
        })}
      </div>
    </CardItem>
  );
};

export default InventoryItem;
