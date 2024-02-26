import RestaurantMenuDtoType from './RestaurantMenuDtoType';

type RestaurantDtoType = {
  id: string;
  name: string;
  category: string;
  menu: RestaurantMenuDtoType[];
};

export default RestaurantDtoType;
