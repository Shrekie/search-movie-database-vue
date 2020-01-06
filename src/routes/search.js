import SearchResult from "../components/SearchResult";
import Home from "../components/Home";

export default [
  {
    path: "/",
    component: Home
  },
  {
    path: "/:search",
    component: SearchResult
  }
];
