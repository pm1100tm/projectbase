import MenuItem from './MenuItem';

import useSelectedMenu from '../hooks/useSelectedMenu';

import RestaurantMenuDtoType from '../types/RestaurantMenuDtoType';

type MenuProps = {
  menu: RestaurantMenuDtoType[];
};

export default function Menu({ menu }: MenuProps) {
  const { handleAddMenu } = useSelectedMenu();

  if (!menu.length) {
    return <p>메뉴가 존재하지 않습니다</p>;
  }

  return (
    <ul>
      {menu.map((menuItem: RestaurantMenuDtoType, index: number) => {
        const key = `${menuItem.id}-${index}`;
        return (
          <MenuItem key={key} menuItem={menuItem}>
            <button
              style={{ marginLeft: '.5rem' }}
              name={`#${menuItem.name}`}
              type='button'
              onClick={() => handleAddMenu(menuItem)}
            >
              선택
            </button>
          </MenuItem>
        );
      })}
    </ul>
  );
}
