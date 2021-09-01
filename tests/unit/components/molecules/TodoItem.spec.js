import Vuex from "vuex";
import { createLocalVue, mount } from "@vue/test-utils";
import TodoItem from "@/components/molecules/TodoItem.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("TodoItem", () => {
  let mutations;
  let store;

  beforeEach(() => {
    mutations = {
      removeTodo: jest.fn(),
      changeTodoStatus: jest.fn(),
    };
    store = new Vuex.Store({ mutations });
  });

  test("element present", () => {
    let wrapper = mount(TodoItem, { localVue });
    expect(wrapper.vm).toBeTruthy();
    expect(wrapper.is(TodoItem)).toBeTruthy();
  });

  test("change status with click", () => {
    let wrapper = mount(TodoItem, { store, localVue });
    wrapper.find('input[type = "checkbox"]').trigger("click");
    expect(mutations.changeTodoStatus).toHaveBeenCalled();
  });

  test("delete task from list", async () => {
    let wrapper = mount(TodoItem, { store, localVue });
    wrapper.findAll("div").at(1).trigger("click");
    expect(mutations.removeTodo).toHaveBeenCalled();
  });
});