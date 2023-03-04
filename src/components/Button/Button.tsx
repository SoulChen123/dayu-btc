import { Button as AntdButton, ButtonProps } from "antd";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
type IProps = ButtonProps & {
  children?: React.ReactNode;
};
const Button = ({ children = "Login", ...props }: IProps) => {
  const click = async () => {
    if (!window.ethereum) {
      toast.error("请先安装MetaMask");
      return;
    }
    try {
      const account = await ethereum.request({ method: "eth_requestAccounts" });
      console.log(account);
    } catch (err) {
      toast.error((err as { message: string }).message);
    }
  };
  return (
    <AntdButton type="primary" size="large" {...props} onClick={click}>
      {children}
    </AntdButton>
  );
};
export default Button;
