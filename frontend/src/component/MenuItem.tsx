import { HTMLAttributes } from 'react';

import { moneyformat } from '../utils/common';

import RestaurantMenuDtoType from '../types/RestaurantMenuDtoType';

type MenuItem = {
  menuItem: RestaurantMenuDtoType;
} & HTMLAttributes<Element>;

export default function MenuItem({ menuItem, children }: MenuItem) {
  return (
    <li style={{ display: 'flex', listStyle: 'none', paddingBlock: '.5rem' }}>
      <span style={{ margin: '0 auto' }}>
        {menuItem.name}({moneyformat(menuItem.price)}원)
      </span>
      {children}
    </li>
  );
}
