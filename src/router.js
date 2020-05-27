import Vue from "vue";
import Router from "vue-router";
import Inicio from "./components/Inicio";
import SobreMi from "./components/SobreMi";
import Blog from "./components/Blog";
import Post from "./components/Post";
import Contacto from "./components/Contacto";
import NotFound from "./components/NotFound";
import NuevoPost from "./components/NuevoPost";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Inicio,
    },
    { path: "/sobremi", component: SobreMi },
    {
      path: "/blog/:post",
      component: Blog,
      children: [
        {
          path: "post",
          component: Post,
          name: "post",
        },
      ],
    },
    { path: "/nuevopost", component: NuevoPost },
    { path: "/contacto", component: Contacto },
    { path: "*", component: NotFound },
  ],
});
