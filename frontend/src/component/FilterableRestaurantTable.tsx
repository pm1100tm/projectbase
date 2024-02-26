import { useState } from 'react';

import SearchBar from './SearchBar';
import RestaurantTable from './RestaurantTable';

export default function FilterableRestaurantTable() {
  const [filterText, setFilterText] = useState<string>('');
  const [filterCategory, setFilterCategory] = useState<string>('전체');

  const handleFilterText = (v: string) => {
    setFilterText(v);
  };

  const handleFilterCategory = (v: string) => {
    setFilterCategory(v);
  };

  return (
    <div>
      <SearchBar
        filterText={filterText}
        setFilterText={handleFilterText}
        setFilterCategory={handleFilterCategory}
      />
      <RestaurantTable
        filterText={filterText}
        filterCategory={filterCategory}
      />
    </div>
  );
}
