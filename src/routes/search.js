import Result from "../components/Result";
import Home from "../components/Home";
import NotFound from "../components/NotFound";

export default [
  {
    path: "/",
    component: Home
  },
  {
    path: "/search/:searchValue",
    component: Result,
    props: true
  },
  {
    path: "*",
    component: NotFound
  }
];
