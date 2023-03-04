declare global {
  import "@emotion/react";
  import { ITheme } from "styles/theme";
  declare module "@emotion/react" {
    type T = DefaultTheme & ITheme;
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    export interface Theme extends T {}
  }
}
