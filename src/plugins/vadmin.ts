import Vue from "vue";
import Example from "@/components/document/example.vue";

const components = {
  example: Example
};

Object.entries(components).forEach(([name, component]) =>
  Vue.component(name, component)
);

export default components;
