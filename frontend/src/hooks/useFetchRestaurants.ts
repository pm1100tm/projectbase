import { useEffect, useState } from 'react';
import RestaurantDtoType from '../types/RestaurantDtoType';

type useFetchRestaurantsProps = {
  filterText: string;
  filterCategory: string;
};

function useFetchRestaurants({
  filterText,
  filterCategory
}: useFetchRestaurantsProps): RestaurantDtoType[] {
  const [restaurants, setRestaurants] = useState<RestaurantDtoType[]>([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      const url = new URL('http://localhost:3000/restaurants');
      const params = new URLSearchParams();

      params.append('restaurantName', filterText);
      params.append('categoryName', filterCategory);

      url.search = params.toString();

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(
            `Failed to fetch restaurants data. Status: ${response.status}`
          );
        }

        const data: RestaurantDtoType[] = await response.json();
        setRestaurants(data);
      } catch (error) {
        setRestaurants([]);
      }
    };

    fetchRestaurants();
  }, [filterText, filterCategory]);

  return restaurants;
}

export default useFetchRestaurants;
