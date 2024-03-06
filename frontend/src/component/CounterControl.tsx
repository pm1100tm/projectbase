import useCounterStore from '../hooks/useCounterStore';

export default function CounterControl() {
  const store = useCounterStore();

  const handleIncrease = () => {
    store.increase();
  };

  const handleDecrease = () => {
    store.decrease();
  };

  return (
    <div>
      <p>{store.count}</p>
      <button type='button' onClick={handleIncrease}>
        Increase
      </button>
      <button type='button' onClick={handleDecrease}>
        Decrease
      </button>
    </div>
  );
}
