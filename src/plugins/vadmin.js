import Vue from "vue";

const components = {
  example: () => import("@/components/document/example")
};

Object.entries(components).forEach(([name, component]) =>
  Vue.component(name, component)
);

export default components;
