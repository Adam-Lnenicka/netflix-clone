import FormikAddMovie from "./components/FormikMovieForms/FormikAddMovie";
import Home from "./pages/Home";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/add-movie",
    exact: true,
    component: FormikAddMovie,
  },
];

export default routes;
