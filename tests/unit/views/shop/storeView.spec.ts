import chai, { expect } from "chai";
import { mount, VueWrapper } from "@vue/test-utils";
import BootstrapVue3 from "bootstrap-vue-3";
import StoreView from "@/views/shop/StoreView.vue";
import sinon from "sinon";
import vuex, { Store } from "vuex";
import sinonChai from "sinon-chai";
import { createRouter, createWebHistory, Router } from "vue-router";
import { it } from "mocha";
chai.use(sinonChai);

describe("StoreView.vue", () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let wrapper: VueWrapper<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let mockStore: Store<any>;
  let mockRouter: Router;
  function setWrapper() {
    mockStore = new vuex.Store({
      getters: {
        getCommodities: sinon.stub(),
      },
    });
    mockRouter = createRouter({
      history: createWebHistory(),
      routes: [{ path: "/", name: "root", component: StoreView }],
    });
    wrapper = mount(StoreView, {
      global: {
        plugins: [BootstrapVue3, mockStore, mockRouter],
      },
    });
    mockRouter.push = sinon.stub().returnsArg(0);
  }
  it("When login success", () => {
    setWrapper();
    console.log(wrapper.find("#goods"));
    expect(wrapper.find("#goods")).to.eql("fff");
  });
});
