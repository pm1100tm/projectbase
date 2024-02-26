import useFetchRestaurants from '../hooks/useFetchRestaurants';
import RestaurantDtoType from '../types/RestaurantDtoType';
import RestaurantRow from './RestaurantRow';

type RestaurantTableProps = {
  filterText: string;
  filterCategory: string;
};

export default function RestaurantTable({
  filterText,
  filterCategory
}: RestaurantTableProps) {
  const filteredRestaurants: RestaurantDtoType[] = useFetchRestaurants({
    filterText,
    filterCategory
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>식당 이름</th>
            <th>종류</th>
            <th>메뉴</th>
          </tr>
        </thead>
        <tbody>
          {filteredRestaurants.map((restaurant: RestaurantDtoType) => (
            <RestaurantRow key={restaurant.id} restaurant={restaurant} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
