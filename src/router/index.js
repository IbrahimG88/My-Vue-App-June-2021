import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import RegisterItem from "../components/RegisterItem.vue";
import FormTemplate from "../components/FormTemplate.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/registeritem",
    name: "Register item",
    component: RegisterItem,
  },
  {
    path: "/formtemplate",
    name: "Form Template",
    component: FormTemplate,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
