import RestaurantMenuDtoType from './RestaurantMenuDtoType';

type OrderDtoType = {
  menu: RestaurantMenuDtoType[];
  totalPrice: number;
};

export default OrderDtoType;
