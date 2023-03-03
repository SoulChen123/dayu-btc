import React, { useState } from "react";
import logo from "./logo.svg";
import styled from "@emotion/styled";
import { Button as AntdButton, ConfigProvider, theme as AntdTheme } from "antd";
import theme from "styles/theme";
import useToken from "hooks/useToken";
import Text from "pages/Text";
import algorithm from "styles/algorithm";
let SomeComp = styled.div({
  color: "hotpink",
});

let AnotherComp = styled.div`
  color: ${(props) => props.color};
`;
const Button = styled(AntdButton)``;

function App() {
  const { token } = useToken();
  const [dark, setDark] = useState(false);
  console.log(token);

  return (
    <div className="App">
      <ConfigProvider
        theme={
          dark
            ? {
                algorithm: (designToken, derivativeToken) =>
                  algorithm(dark, designToken, derivativeToken),
              }
            : theme
        }
      >
        <SomeComp
          onClick={() => {
            console.log(token);
            setDark(!dark);
          }}
        >
          切换主题 {dark ? "黑色" : "白色"}
        </SomeComp>
        <AnotherComp>By Soul</AnotherComp>
        <Button>Test</Button>
        <Text />
      </ConfigProvider>
    </div>
  );
}

export default App;
