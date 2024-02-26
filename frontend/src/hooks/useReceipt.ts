import { useLocalStorage } from 'usehooks-ts';

import ReceiptDtoType from '../types/ReceiptDtoType';

const emptyReceipt = {} as ReceiptDtoType;

function useReceipt() {
  const [receipt, setReceipt] = useLocalStorage('receipt', emptyReceipt);

  const handleAddReceipt = (v: ReceiptDtoType) => setReceipt(v);
  const handleRemoveAllReceipt = () => setReceipt(emptyReceipt);

  return { receipt, handleAddReceipt, handleRemoveAllReceipt };
}

export default useReceipt;
