import MenuItem from './MenuItem';
import OrderButton from './OrderButton';

import useSelectedMenu from '../hooks/useSelectedMenu';
import useCreateOrder from '../hooks/useCreateOrder';

import RestaurantMenuDtoType from '../../../backend/src/types/RestaurantMenuDtoType';

import ReceiptDtoType from '../types/ReceiptDtoType';
import useReceipt from '../hooks/useReceipt';

export default function Cart() {
  const { selectedMenuItem, handleRemoveMenu, handleRemoveAllMenu } =
    useSelectedMenu();

  const { createOrder } = useCreateOrder();
  const { handleAddReceipt } = useReceipt();

  const handleClickOrder = async () => {
    if (!selectedMenuItem.length) {
      return;
    }
    const receipt: ReceiptDtoType = await createOrder(selectedMenuItem);
    handleAddReceipt(receipt);
    handleRemoveAllMenu();
  };

  return (
    <div className='cart' style={{ marginBottom: '3rem' }}>
      <h2>점심 바구니</h2>
      <ul style={{ width: '20%' }}>
        {selectedMenuItem.map(
          (menuItem: RestaurantMenuDtoType, index: number) => {
            const key = `${menuItem.id}-${index}`;
            return (
              <MenuItem key={key} menuItem={menuItem}>
                <button
                  style={{ marginLeft: '.5rem' }}
                  name={`#${menuItem.name}`}
                  type='button'
                  onClick={() => handleRemoveMenu(menuItem)}
                >
                  취소
                </button>
              </MenuItem>
            );
          }
        )}
      </ul>
      <OrderButton
        selectedMenuItem={selectedMenuItem}
        handleClick={handleClickOrder}
      />
    </div>
  );
}
