import { useLocalStorage } from 'usehooks-ts';

import RestaurantMenuDtoType from '../types/RestaurantMenuDtoType';

function useSelectedMenu() {
  const [selectedMenuItem, setSelectedMenuItem] = useLocalStorage<
    RestaurantMenuDtoType[]
  >('cart', []);

  const handleAddMenu = (menuItem: RestaurantMenuDtoType) => {
    setSelectedMenuItem([...selectedMenuItem, menuItem]);
  };

  const handleRemoveMenu = (menuItem: RestaurantMenuDtoType) => {
    const data: RestaurantMenuDtoType[] = selectedMenuItem.filter(
      (item: RestaurantMenuDtoType) => {
        return item !== menuItem;
      }
    );
    setSelectedMenuItem(data);
  };

  const handleRemoveAllMenu = () => {
    setSelectedMenuItem([]);
  };

  return {
    selectedMenuItem,
    handleAddMenu,
    handleRemoveMenu,
    handleRemoveAllMenu
  };
}

export default useSelectedMenu;
