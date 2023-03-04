import styled from "@emotion/styled";
import Button from "components/Button/Button";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 40px;
  position: relative;
  z-index: 10;
`;
const Header = () => {
  return (
    <HeaderWrapper>
      <div>Logo</div>
      <div>
        <Button>Login</Button>
      </div>
    </HeaderWrapper>
  );
};
export default Header;
