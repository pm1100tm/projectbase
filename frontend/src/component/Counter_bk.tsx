import useForceUpdate from '../hooks/useForceUpdate_bk';

const state = {
  count: 0,
};

function increase() {
  state.count += 1;
}

export default function Counter() {
  const forceUpdate = useForceUpdate();

  const handleClick = () => {
    increase();
    forceUpdate();
  };

  return (
    <>
      <div>{state.count}</div>
      <button type='button' onClick={handleClick}>
        Increase
      </button>
    </>
  );
}

// 이렇게 작성해두면, 관심사의 분리가 가능하다.
// useState 와 컴포넌트의 결합도가 느슨해지고, 비지니스 로직만 테스트 코드로 할 수 있고,
// 컴포넌트에서는 오로지 UI에 대한 테스트 또는 함수가 호출되었는지만 테스트한다.
