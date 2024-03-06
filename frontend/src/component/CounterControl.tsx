import useDisPatch from '../hooks/useDispatch';
import useSelector from '../hooks/useSelector';

export default function CounterControl() {
  const dispatch = useDisPatch();
  const count = useSelector((state) => state.count);

  const handleIncrease = () => {
    dispatch({ type: 'increase' });
  };

  const handleDecrease = () => {
    dispatch({ type: 'decrease' });
  };

  return (
    <div>
      <p>{count}</p>
      <button type='button' onClick={handleIncrease}>
        Increase
      </button>
      <button
        type='button'
        onClick={() => dispatch({ type: 'increase', payload: 10 })}
      >
        Increase 10
      </button>

      <button type='button' onClick={handleDecrease}>
        Decrease
      </button>

      <button
        type='button'
        onClick={() => dispatch({ type: 'decrease', payload: 10 })}
      >
        Decrease 10
      </button>
    </div>
  );
}
