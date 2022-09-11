import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';
import InventoryTypeReducer from './InventoryType/InventoryTypeSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    inventoryType: InventoryTypeReducer,
  },
});
