import { useSize } from "ahooks";

const useWidth = () => {
  return useSize(document.body)?.width;
};
export default useWidth;
