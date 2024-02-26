import Category from './Category';

import CategoryDtoType from '../types/CategoryDtoType';

type CategoriesProps = {
  categories: CategoryDtoType[];
  setFilterCategory: (text: string) => void;
};

export default function Categories({
  categories,
  setFilterCategory
}: CategoriesProps) {
  return (
    <ul style={{ display: 'flex', padding: 0, listStyle: 'none' }}>
      {[{ id: 0, name: '전체' }, ...categories].map(
        (category: CategoryDtoType) => (
          <Category
            key={category.id}
            category={category}
            setFilterCategory={setFilterCategory}
          />
        )
      )}
    </ul>
  );
}
