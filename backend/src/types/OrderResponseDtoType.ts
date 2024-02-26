import RestaurantMenuDtoType from './RestaurantMenuDtoType';

type OrderResponseDtoType = {
  id: string;
  menu: RestaurantMenuDtoType[];
  totalPrice: number;
};

export default OrderResponseDtoType;
