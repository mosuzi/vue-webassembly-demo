import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

import VueWasm from "vue-wasm";
import debugModule from "/assembly/wasm/debug.wasm";

const init = async () => {
  await VueWasm(Vue, { modules: { debug: debugModule } });
  setImmediate(() => {
    new Vue({
      render: (h) => h(App),
    }).$mount("#app");
  });
};

init();
