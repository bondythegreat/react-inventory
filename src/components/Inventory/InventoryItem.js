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
  const handleChange = (e, item, dataType, attrId) => {
    const value = dataType === 'checkbox' ? e.target.checked : e.target.value;
    dispatch(updateInventoryAttribute({ item, attrId, value }));
  };

  return (
    <CardItem
      title={title}
      handleRemove={() => handleRemove(item)}
      key={item.id}
    >
      <div>
        {inventoryType.attributes.map((attr) => {
          let inputProp = {
            value: inventory.attributes[attr.id],
          };

          if (attr.dataType === 'checkbox') {
            inputProp = {
              defaultChecked: inventory.attributes[attr.id],
            };
          }

          return (
            attr.label !== '' && (
              <div className='mb-2' key={attr.id}>
                <label>{attr.label}</label>

                <Input
                  type={attr.dataType}
                  {...inputProp}
                  onChange={(e) =>
                    handleChange(e, item, attr.dataType, attr.id)
                  }
                />
              </div>
            )
          );
        })}
      </div>
    </CardItem>
  );
};

export default InventoryItem;
