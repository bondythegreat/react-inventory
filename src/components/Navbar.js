import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { viewAllTypes } from '../store/InventoryType/InventoryTypeSlice';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleClickMenu = () => {
    setMobileMenu(!mobileMenu);
  };
  const showClass = mobileMenu ? 'show' : '';

  const inventoryTypes = useSelector(viewAllTypes);

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light px-2'>
      <Link className='nav-link me-4' to='/'>
        Inventory System
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
        onClick={toggleClickMenu}
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      <div
        className={`collapse navbar-collapse ${showClass}`}
        id='navbarSupportedContent'
      >
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item active'>
            <Link className='nav-link' to='/'>
              All Types
            </Link>
          </li>
          {inventoryTypes.map((inventoryType) => {
            return (
              inventoryType.label !== '' && (
                <li className='nav-item' key={inventoryType.id}>
                  <Link className='nav-link' to={`/type/${inventoryType.id}`}>
                    {inventoryType.label}
                  </Link>
                </li>
              )
            );
          })}

          <li className='nav-item'>
            <Link className='nav-link' to='/manage'>
              Manage Type
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
