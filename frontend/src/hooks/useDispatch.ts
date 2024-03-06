import useStore from './useStore';

import { Action } from '../stores/BaseStore';

export default function useDisPatch<Payload>() {
  const store = useStore();
  return (action: Action<Payload>) => store.dispatch(action);
}
