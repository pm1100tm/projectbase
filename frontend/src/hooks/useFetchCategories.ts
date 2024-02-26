import { useEffect, useState } from 'react';

import CategoryDtoType from '../types/CategoryDtoType';

function useCategories() {
  const [categories, setCategories] = useState<CategoryDtoType[]>([]);

  useEffect(() => {
    const url = 'http://localhost:3000/categories';
    const fetchCategories = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(
            `Failed to fetch categories data. Status: ${response.status}`
          );
        }

        const data: CategoryDtoType[] = await response.json();
        setCategories(data);
      } catch (error) {
        setCategories([]);
      }
    };

    fetchCategories();
  }, []);

  return categories;
}

export default useCategories;
