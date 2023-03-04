import styled from "@emotion/styled";
import { TeleGram, Twitter } from "assets/img";
import { TELEGRAM_LINK, TWITTER_LINK } from "config";

const FooterWrapper = styled.footer`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  cursor: pointer;
  position: absolute;
  width: 100%;
  bottom: 0;
  z-index: 10;
`;
const Link = styled.a`
  margin-right: 12px;
`;
const Footer = () => {
  return (
    <FooterWrapper>
      <Link href={TELEGRAM_LINK} target="_blank">
        <TeleGram />
      </Link>
      <Link href={TWITTER_LINK} target="_blank">
        <Twitter />
      </Link>
    </FooterWrapper>
  );
};
export default Footer;
