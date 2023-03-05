/* @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { useContext } from "react";
import ThemeContext from "provider/ThemeContext";
import "./index.css";
const Wrapper = styled.div<{ mode: string | null }>`
  background: ${({ mode }) =>
    mode === "dark" ? "inherit" : "linear-gradient(60deg, rgba(228, 168, 65,1) 0%, rgba(228, 168, 65,0.5) 100%)"};
  color: ${({ theme }) => theme.colors.black};
  font-size: 48px;
  font-weight: 600;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;
const Welcome = () => {
  const mode = useContext(ThemeContext);
  return (
    <Wrapper mode={mode}>
      <div className="inner-header flex">
        <h1>Dayu BTC</h1>
      </div>
      <div css={{ position: "absolute", width: "100%", bottom: "0" }}>
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className="parallax">
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
        </svg>
      </div>
      <a
        className="twitter-timeline"
        data-width="400"
        data-height="400"
        href="https://twitter.com/BTCdayu?ref_src=twsrc%5Etfw"
      ></a>
    </Wrapper>
  );
};
export default Welcome;
