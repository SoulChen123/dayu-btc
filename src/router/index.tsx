import App from "App";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Text from "pages/Text";
import Welcome from "pages/Welcome";
import Main from "pages/Main";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Main />}>
      <Route path="/text" element={<Text />}></Route>
      <Route path="/" element={<Welcome />}></Route>
    </Route>
  )
);
export default router;
