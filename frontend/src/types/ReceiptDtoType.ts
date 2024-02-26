import RestaurantMenuDtoType from './RestaurantMenuDtoType';

interface ReceiptDtoType {
  id: string;
  menu: RestaurantMenuDtoType[];
  totalPrice: number;
}

export default ReceiptDtoType;
