import React, { useState } from 'react';
import CardsList from '../components/Inventory/CardsList';

const sampleData = [
  {
    id: 1,
    typeId: 1234,
    title: 'helo',
    body: 'body1',
  },
  {
    id: 2,
    typeId: 1234,
    title: 'helo 2',
    body: 'body2',
  },
  {
    id: 3,
    typeId: 1234,
    title: 'helo 3',
    body: 'body3',
  },
];
const HomePage = () => {
  const [items, setItems] = useState(sampleData);
  const handleRemove = (selectedItem) => {
    const finalItems = items.filter((item) => item !== selectedItem);
    setItems(finalItems);
  };
  return (
    <div>
      <CardsList items={items} handleRemove={handleRemove} />
    </div>
  );
};

export default HomePage;
