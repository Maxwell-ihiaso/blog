import Home from "../pages/Home";
import Post from "../pages/Post";

export interface IRoute {
  path: string;
  name: string;
  element: () => JSX.Element;
}

const defaultPages: IRoute[] = [
  {
    path: "/",
    element: Home,
    name: "home",
  },
  {
    path: "/post",
    element: Post,
    name: "post",
  },
];

const pages: IRoute[] = [...defaultPages];

export default pages;
