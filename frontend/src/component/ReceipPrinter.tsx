import _ from 'lodash';

import { moneyformat } from '../utils/common';

import ReceiptDtoType from '../types/ReceiptDtoType';
import RestaurantMenuDtoType from '../types/RestaurantMenuDtoType';
import MenuItem from './MenuItem';

type ReceipPrinterProps = {
  receipt: ReceiptDtoType;
};

export default function ReceipPrinter({ receipt }: ReceipPrinterProps) {
  if (_.isEmpty(receipt)) {
    return <p>[영수증 나오는 곳]</p>;
  }

  const { id, menu, totalPrice } = receipt;

  return (
    <div
      style={{ width: '50%', border: '1px solid black', textAlign: 'center' }}
    >
      <h2>영수증</h2>
      <div>
        <h3>주문번호</h3>
        <p>주문 아이디</p>
      </div>
      <div>
        <h3>주문목록</h3>
        <ul style={{ padding: '0px', listStyle: 'none' }}>
          {menu.map((item: RestaurantMenuDtoType, index: number) => {
            const key = `${item.id}-${index}`;
            return <MenuItem key={key} menuItem={item} />;
          })}
        </ul>
      </div>
      <p>총 가격: ({moneyformat(totalPrice)})원</p>
    </div>
  );
}
