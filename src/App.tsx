import React, { useState } from "react";
import styled from "@emotion/styled";
import { ConfigProvider } from "antd";
import theme from "styles/lightTheme";
import algorithm from "styles/algorithm";
import ThemeContext from "provider/ThemeContext";
import { localStorage } from "utils/storage";
import { RouterProvider } from "react-router-dom";
import router from "router";
import { ThemeProvider } from "@emotion/react";
import darkTheme from "styles/darkTheme";
import "styles/reset.css";
import { ToastContainer } from "react-toastify";
const SomeComp = styled.div({
  color: "hotpink"
});
const Wrapper = styled.div`
  background: ${({ theme }) => theme.background.white};
  position: relative;
  z-index: 10;
`;
function App() {
  const [dark, setDark] = useState<string>(localStorage.get("theme") || "dark");
  return (
    <ThemeProvider theme={dark === "dark" ? darkTheme : theme}>
      <ThemeContext.Provider value={dark}>
        <Wrapper className="App">
          <ConfigProvider
            theme={
              dark === "dark"
                ? {
                    algorithm: (designToken, derivativeToken) =>
                      algorithm(dark === "dark" ? true : false, designToken, derivativeToken)
                  }
                : theme
            }
          >
            <SomeComp
              onClick={() => {
                setDark((d: string) => (d === "dark" ? "light" : "dark"));
                localStorage.set("theme", dark === "dark" ? "light" : "dark");
              }}
            >
              切换主题 {dark === "dark" ? "黑色" : "白色"}
            </SomeComp>
            <RouterProvider router={router} />
            <ToastContainer position="top-right" autoClose={3000} closeButton={false} />
          </ConfigProvider>
        </Wrapper>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
