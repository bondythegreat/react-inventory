import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { viewAllTypes } from '../store/InventoryType/InventoryTypeSlice';
import { Link } from 'react-router-dom';
import { Collapse, NavbarToggler } from 'reactstrap';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const inventoryTypes = useSelector(viewAllTypes);

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light px-2'>
      <Link className='nav-link me-4' to='/'>
        Inventory System
      </Link>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item active'>
            <Link className='nav-link' onClick={closeMenu} to='/'>
              All Types
            </Link>
          </li>
          {inventoryTypes.map((inventoryType) => {
            return (
              inventoryType.label !== '' && (
                <li className='nav-item' key={inventoryType.id}>
                  <Link
                    className='nav-link'
                    onClick={closeMenu}
                    to={`/type/${inventoryType.id}`}
                  >
                    {inventoryType.label}
                  </Link>
                </li>
              )
            );
          })}

          <li className='nav-item'>
            <Link className='nav-link' onClick={closeMenu} to='/manage'>
              Manage Type
            </Link>
          </li>
        </ul>
      </Collapse>
    </nav>
  );
};
export default Navbar;
