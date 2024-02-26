import CategoryDtoType from '../types/CategoryDtoType';

type CategoryProps = {
  category: CategoryDtoType;
  setFilterCategory: (text: string) => void;
};

export default function Category({
  category,
  setFilterCategory
}: CategoryProps) {
  const handleClick = () => {
    setFilterCategory(category.name);
  };

  return (
    <li style={{ marginRight: '1rem' }} key={category.id}>
      <button type='button' onClick={handleClick}>
        {category.name}
      </button>
    </li>
  );
}
