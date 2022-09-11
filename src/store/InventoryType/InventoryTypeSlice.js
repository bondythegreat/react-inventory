import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const InventoryTypeSlice = createSlice({
  name: 'inventoryType',
  initialState: {
    attributeTypes: ['date', 'text', 'checkbox', 'number'],
    types: [],
    inventories: [],
  },
  reducers: {
    addInventoryType: (state, action) => {
      const id = uuidv4();
      const newItem = {
        id,
        label: '',
        titleAttributesId: '',
        attributes: [],
      };
      state.types.push(newItem);
    },
    updateTypeLabel: (state, action) => {
      const { item, label } = action.payload;
      const selectedType = state.types.find(
        (inventoryType) => inventoryType.id === item.id
      );

      if (selectedType) {
        selectedType.label = label;
      }
    },
    removeInventoryType: (state, action) => {
      const selectedType = action.payload;
      const newTypes = state.types.filter(
        (item) => item.id !== selectedType.id
      );

      state.types = newTypes;
    },
    addAttribute: (state, action) => {
      const idType = action.payload;
      const inventoryType = state.types.find((item) => item.id === idType);
      const attributeType = state.attributeTypes[1]; // default: text

      if (inventoryType) {
        const idAttribute = uuidv4();
        const newAttributes = [
          ...inventoryType.attributes,
          { id: idAttribute, label: '', dataType: attributeType },
        ];
        inventoryType.attributes = newAttributes;
        // set this attribute as default title if empty
        inventoryType.titleAttributesId =
          inventoryType.titleAttributesId === ''
            ? idAttribute
            : inventoryType.titleAttributesId;
        debugger;
      }
    },
    updateAttribute: (state, action) => {
      const { idType, idAttribute, label } = action.payload;
      const inventoryType = state.types.find((item) => item.id === idType);
      const inventoryAttr = inventoryType.attributes.find(
        (item) => item.id === idAttribute
      );
      inventoryAttr.label = label;
    },
    setTitleAttribute: (state, action) => {
      const { idType, idAttribute } = action.payload;
      const inventoryType = state.types.find((item) => item.id === idType);

      inventoryType.titleAttributesId = idAttribute;
    },
    updateAttributeDataType: (state, action) => {
      const { idType, idAttribute, dataType } = action.payload;
      const inventoryType = state.types.find((item) => item.id === idType);
      const inventoryAttr = inventoryType.attributes.find(
        (item) => item.id === idAttribute
      );
      inventoryAttr.dataType = dataType;
    },
    deleteAttribute: (state, action) => {
      const { idType, idAttribute } = action.payload;

      const inventoryType = state.types.find((item) => item.id === idType);
      const finalAttributes = inventoryType.attributes.filter(
        (item) => item.id !== idAttribute
      );
      inventoryType.attributes = finalAttributes;
    },
    addInventory: (state, action) => {
      const idType = action.payload;
      const inventoryType = state.types.find((item) => item.id === idType);

      if (inventoryType) {
        const attributeLabelIds = inventoryType.attributes.map((item) => {
          return item.id;
        });

        const newItem = {
          id: uuidv4(),
          idType,
          attributes: {},
        };

        // map array of attributeLabels into object as keys
        let obj = attributeLabelIds.reduce((ac, a) => ({ ...ac, [a]: '' }), {});
        newItem.attributes = obj;
        state.inventories.push(newItem);
      }
    },
    removeInventory: (state, action) => {
      const inventoryItem = action.payload;
      const finalInventories = state.inventories.filter(
        (item) => item.id !== inventoryItem.id
      );

      state.inventories = finalInventories;
    },
    updateInventoryAttribute: (state, action) => {
      const { item, attrId, value } = action.payload;

      const selectedInventory = state.inventories.find(
        (inventory) => inventory.id === item.id
      );
      selectedInventory.attributes[attrId] = value;
    },
  },
});

// Selector
export const showAttributeTypes = (state) => state.attributeTypes;
export const viewAllTypes = (state) => state.types;
export const viewTypeById = (id) => (state) =>
  state.types.find((item) => item.id === id);
export const viewAllInventories = (state) => state.inventories;
export const viewInventoryById = (id) => (state) =>
  state.inventories.find((item) => item.id === id);
export const viewInventoriesByType = (idType) => (state) =>
  state.inventories.filter((item) => item.idType === idType);

// Action creators are generated for each case reducer function
export const {
  addInventoryType,
  removeInventoryType,
  updateTypeLabel,
  addAttribute,
  updateAttribute,
  setTitleAttribute,
  updateAttributeDataType,
  deleteAttribute,
  addInventory,
  removeInventory,
  updateInventoryAttribute,
} = InventoryTypeSlice.actions;

export default InventoryTypeSlice.reducer;
