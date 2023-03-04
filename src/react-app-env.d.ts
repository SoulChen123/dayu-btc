/// <reference types="react-scripts" />
interface Window {
  __REDUX_DEVTOOLS_EXTENSION__?: Function;
  ethereum?: {
    isMetaMask?: true;
    request?: (...args: any[]) => Promise<void>;
    on?: (...args: any[]) => void;
    removeListener?: (...args: any[]) => void;
    autoRefreshOnNetworkChange?: boolean;
  };
}
declare const ethereum = {
  isMetaMask: boolean,
  request: (...args: any[]) => Promise<void>,
  on: (...args: any[]) => {},
  removeListener: (...args: any[]) => {},
  autoRefreshOnNetworkChange: boolean
};
