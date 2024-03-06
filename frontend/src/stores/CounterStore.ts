import { singleton } from 'tsyringe';

type Listener = () => void;

@singleton()
export default class CounterStore {
  count = 0;

  // 외부 forUpdate 를 등록하는 용도
  // set 을 한 이유는, 다른 컴포넌트에서 같은 forceUpdate 를 등록했을 때 덮어쓰는 것을
  // 방지하기 위함이다.
  listeners = new Set<Listener>();

  // 외부에서 받아온 forUpdate 를 실행하는 용도
  publish() {
    this.listeners.forEach((listener: Listener) => listener());
  }

  // 비지니스 로직
  // 전역같이? 관리되는 클래스의 멤버변수를 업데이트 한 후에,
  // publish 를 통하여 forceUpdate 를 실행하여, 컴포넌트를 강제로 리렌더링한다.
  increase() {
    this.count += 1;
    this.publish();
  }

  // 비지니스 로직
  decrease() {
    this.count -= 1;
    this.publish();
  }

  // 리스너(forceUpdate 함수) 를 등록하기 위한 메서드
  addListener(listener: Listener) {
    this.listeners.add(listener);
  }

  // 리스너(forceUpdate 함수) 를 등록해제하기 위한 메서드
  deleteListener(listener: Listener) {
    this.listeners.delete(listener);
  }
}
