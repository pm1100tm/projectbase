import { useEffect } from 'react';
import useForceUpdate from '../hooks/useForceUpdate';

let count = 0;

export default function Counter() {
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    console.log('test');
  });

  const handleClick = () => {
    count += 1;
    forceUpdate();
  };

  return (
    <div>
      <p>{count}</p>
      <button type='button' onClick={handleClick}>
        Increase
      </button>
    </div>
  );
}
