import RestaurantDtoType from '../types/RestaurantDtoType';

import Menu from './Menu';

type RestaurantRowProps = {
  restaurant: RestaurantDtoType;
};

export default function RestaurantRow({ restaurant }: RestaurantRowProps) {
  const { name, category, menu } = restaurant;

  return (
    <tr>
      <td>{name}</td>
      <td>{category}</td>
      <td>
        <Menu menu={menu} />
      </td>
    </tr>
  );
}
