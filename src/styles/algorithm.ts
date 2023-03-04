import { SeedToken } from "antd/es/theme/internal";
import { MapToken } from "antd/es/theme/interface";
import { theme } from "antd";
import darkTheme from "./darkTheme";
const algorithm = (dark: boolean, designToken: SeedToken, derivativeToken?: MapToken | undefined) => {
  const mapToken = {
    ...theme.darkAlgorithm(designToken, derivativeToken)
  };
  if (dark) {
    console.log({ ...mapToken, ...darkTheme });
    return { ...mapToken, ...darkTheme };
  }
  return mapToken;
};
export default algorithm;
