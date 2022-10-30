import chai, { expect } from "chai";
import { flushPromises, mount, VueWrapper } from "@vue/test-utils";
import BootstrapVue3 from "bootstrap-vue-3";
import LoginView from "@/views/member/LoginView.vue";
import sinon from "sinon";
import vuex, { Store } from "vuex";
import sinonChai from "sinon-chai";
import { createRouter, createWebHistory, Router } from "vue-router";
chai.use(sinonChai);

describe("LoginView.vue", () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let wrapper: VueWrapper<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let mockStore: Store<any>;
  let mockRouter: Router;
  function setWrapper() {
    mockStore = new vuex.Store({
      actions: {
        postLogin: sinon.stub(),
      },
    });
    mockRouter = createRouter({
      history: createWebHistory(),
      routes: [{ path: "/", name: "root", component: LoginView }],
    });
    wrapper = mount(LoginView, {
      global: {
        plugins: [BootstrapVue3, mockStore, mockRouter],
        components: {
          "font-awesome-icon": sinon.stub(),
        },
      },
    });
    mockRouter.push = sinon.stub().returnsArg(0);
  }

  // afterEach(() => {
  //   sinon.restore();
  // });
  //      A         A         A
  it("當登入會失敗，進行登入，flag 欄位為填入 fff", async () => {
    // const alert = sinon.stub(window,'alert')
  // let a =   sinon.stub(RegExp, ).returns(true)

    setWrapper();
    wrapper.vm.regTest = sinon.stub().returns(false)

    expect(wrapper.vm.flag).to.eql("");
    await wrapper.find("#login-form").trigger("submit");
    await flushPromises();

    expect(wrapper.vm.flag).to.eql("fff");
  });

  it("When login success", async () => {
    setWrapper();
    wrapper.vm.regTest = sinon.stub().returns(true)

    // await wrapper.find("#email").find(".form-control").setValue("j@j.j");
    // await wrapper.find("#password").find(".form-control").setValue("j");
    

    // mockRouter.push = sinon.stub().returnsArg(0);

    await wrapper.find("#login-form").trigger("submit");
    await flushPromises();

    // expect(mockStore.dispatch).calledOnce; //TODO 路徑導向帳戶
    expect(mockRouter.push).calledOnce; //TODO 路徑導向帳戶
  });
  it("When E-mail input worng", async () => {
    setWrapper();
    console.log(wrapper.vm.login);
    await wrapper.vm.login("j@j.j", "j");


  });
});
