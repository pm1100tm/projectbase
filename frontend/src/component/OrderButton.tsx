import { calculateTotalPrice, moneyformat } from '../utils/common';

import RestaurantMenuDtoType from '../types/RestaurantMenuDtoType';

type OrderButtonProps = {
  selectedMenuItem: RestaurantMenuDtoType[];
  handleClick: () => void;
};

export default function OrderButton({
  selectedMenuItem,
  handleClick
}: OrderButtonProps) {
  const priceList: number[] = selectedMenuItem.map(
    (item: RestaurantMenuDtoType) => item.price
  );
  const totalPrice: number = calculateTotalPrice(priceList);

  return (
    <button type='button' onClick={handleClick}>
      합계: {moneyformat(totalPrice)}원 주문
    </button>
  );
}
