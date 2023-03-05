import styled from "@emotion/styled";
import { Avatar } from "antd";
import Button from "components/Button/Button";
import { Logo } from "assets/img";
import useWidth from "hooks/useWidth";
const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 40px;
  position: relative;
  z-index: 10;
`;
const Header = () => {
  const width = useWidth();
  console.log(width);
  return (
    <HeaderWrapper>
      <Avatar className="shake-crazy" size={64} icon={<Logo />} draggable />
      <div>
        <Button>Login</Button>
      </div>
    </HeaderWrapper>
  );
};
export default Header;
