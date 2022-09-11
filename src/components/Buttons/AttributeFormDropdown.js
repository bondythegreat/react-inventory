import React, { useState } from 'react';
import {
  InputGroup,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import {
  showAttributeTypes,
  updateAttribute,
  updateAttributeDataType,
  deleteAttribute,
} from '../../store/InventoryType/InventoryTypeSlice';

const AttributeFormDropdown = ({ idType, attributeObj }) => {
  const dispatch = useDispatch();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const attributeTypes = useSelector(showAttributeTypes);
  const handleUpdateAttribute = (idType, attrObj, e) => {
    dispatch(
      updateAttribute({
        idType,
        idAttribute: attrObj.id,
        label: e.target.value,
      })
    );
  };
  const handleUpdateAttributeDataType = (idType, attrObj, newDataType) => {
    dispatch(
      updateAttributeDataType({
        idType,
        idAttribute: attrObj.id,
        dataType: newDataType,
      })
    );
  };
  const handleDeleteAttribute = (idType, attrObj) => {
    dispatch(
      deleteAttribute({
        idType,
        idAttribute: attrObj.id,
      })
    );
  };

  return (
    <InputGroup className='mb-2 w-100'>
      <input
        value={attributeObj.label}
        type='text'
        onChange={(e) => handleUpdateAttribute(idType, attributeObj, e)}
      />
      <ButtonDropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
        <DropdownToggle caret>{attributeObj.dataType}</DropdownToggle>
        <DropdownMenu>
          {attributeTypes.map((attributeType, idx) => (
            <DropdownItem
              key={idx}
              onClick={() =>
                handleUpdateAttributeDataType(
                  idType,
                  attributeObj,
                  attributeType
                )
              }
            >
              {attributeType}
            </DropdownItem>
          ))}
          <DropdownItem divider />
          <DropdownItem
            onClick={() => handleDeleteAttribute(idType, attributeObj)}
          >
            Delete
          </DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    </InputGroup>
  );
};

export default AttributeFormDropdown;
