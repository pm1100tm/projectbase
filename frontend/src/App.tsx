import Cart from './component/Cart';
import FilterableRestaurantTable from './component/FilterableRestaurantTable';
import ReceipPrinter from './component/ReceipPrinter';

import { useInterval } from 'usehooks-ts';

import useReceipt from './hooks/useReceipt';

export default function App() {
  const { receipt, handleRemoveAllReceipt } = useReceipt();

  useInterval(
    () => {
      if (receipt.id) {
        handleRemoveAllReceipt();
      }
    },
    receipt.id ? 5000 : null
  );

  return (
    <div>
      <h1>푸드코트 키오스크</h1>
      <Cart />
      <FilterableRestaurantTable />
      <ReceipPrinter receipt={receipt} />
    </div>
  );
}
