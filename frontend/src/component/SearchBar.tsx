import Categories from './Categories';
import TextField from './TextField';

import useCategories from '../hooks/useFetchCategories';

type SearchBarProps = {
  filterText: string;
  setFilterText: (text: string) => void;
  setFilterCategory: (text: string) => void;
};

export default function SearchBar({
  filterText,
  setFilterText,
  setFilterCategory
}: SearchBarProps) {
  const categories = useCategories();

  return (
    <div>
      <TextField
        label='검색'
        placeholder='식당 이름'
        text={filterText}
        setText={setFilterText}
      />
      <Categories
        categories={categories}
        setFilterCategory={setFilterCategory}
      />
    </div>
  );
}
