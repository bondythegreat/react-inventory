import React from 'react';
import { useDispatch } from 'react-redux';
import {
  addAttribute,
  updateTypeLabel,
  setTitleAttribute,
} from '../../store/InventoryType/InventoryTypeSlice';
import { Input } from 'reactstrap';
import AttributeFormDropdown from '../Buttons/AttributeFormDropdown';
import CardItem from './CardItem';

const CardsListType = ({ items, handleRemove, handleAdd }) => {
  const dispatch = useDispatch();
  const handleChangeLabel = (e, item) => {
    dispatch(updateTypeLabel({ item, label: e.target.value }));
  };
  const handleAddAttribute = (idType) => {
    dispatch(addAttribute(idType));
  };
  const updateTitleAttribute = (e, idType) => {
    const payload = { idType, idAttribute: e.target.value };
    dispatch(setTitleAttribute(payload));
  };

  return (
    <div className='items-list d-flex flex-wrap flex-column flex-md-row'>
      {items.map((item) => (
        <CardItem
          title={item.label}
          handleRemove={() => handleRemove(item)}
          key={item.id}
        >
          <div>
            <div className='mb-3'>
              <label>Object Type</label>
              <Input
                type='text'
                className='w-100'
                value={item.label}
                onChange={(e) => handleChangeLabel(e, item)}
              />
            </div>
            <div className='mb-3'>
              <label>Object Title</label>
              <Input
                name='select'
                type='select'
                value={item.titleAttributesId}
                onChange={(e) => updateTitleAttribute(e, item.id)}
              >
                {item.attributes.map((attr, idx) => {
                  return (
                    <option key={idx} value={attr.id}>
                      {attr.label}
                    </option>
                  );
                })}
              </Input>
            </div>
            <div className='mb-3'>
              <label>Fields</label>
              {item.attributes.map((attr, idx) => {
                return (
                  <AttributeFormDropdown
                    key={idx}
                    idType={item.id}
                    attributeObj={attr}
                  />
                );
              })}
            </div>
          </div>

          <button
            type='button'
            className='btn btn-primary btn-add mt-2 w-100'
            onClick={() => handleAddAttribute(item.id)}
          >
            Add Field
          </button>
        </CardItem>
      ))}
      <div className='button-container'>
        <button
          type='button'
          className='btn btn-primary btn-add m-2 px-4'
          onClick={handleAdd}
        >
          Add Type
        </button>
      </div>
    </div>
  );
};

export default CardsListType;
