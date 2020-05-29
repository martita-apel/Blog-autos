import Vue from "vue";
import Router from "vue-router";
const Inicio = () => import("./components/Inicio");
const SobreMi = () => import("./components/SobreMi");
const Blog = () => import("./components/Blog");
import Post from "./components/Post";
const Contacto = () => import("./components/Contacto");
import NotFound from "./components/NotFound";
import NuevoPost from "./components/NuevoPost";
import Administrador from "./components/Administrador";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Inicio,
      alias: ["/home", "/inicio", "/portada"],
    },
    { path: "/sobremi", component: SobreMi, alias: ["/acerca"] },
    {
      path: "/administrador/:admin",
      component: Administrador,
      props: (route) => ({
        admin: route.params.admin,
      }),
    },

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
    {
      path: "/contacto",
      component: Contacto,
      alias: ["/contactame"],
    },
    { path: "*", component: NotFound },
  ],
});
