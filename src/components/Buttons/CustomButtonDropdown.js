import React, { useState } from 'react';
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

const CustomButtonDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <ButtonDropdown
      className='btn-add m-2 px-4'
      isOpen={dropdownOpen}
      toggle={toggleDropdown}
    >
      <DropdownToggle caret color='primary'>
        Add Item
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Header</DropdownItem>
        <DropdownItem disabled>Action</DropdownItem>
        <DropdownItem>Another Action</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Another Action</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
};

export default CustomButtonDropdown;
