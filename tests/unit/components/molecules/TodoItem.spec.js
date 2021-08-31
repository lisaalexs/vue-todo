import Vuex from "vuex";
import { createLocalVue, shallowMount, mount } from "@vue/test-utils";
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



// describe("unit test for TodoItem", () => {
//   const wrapper = shallowMount(TodoItem);
//   test("unit test for TodoItem", () => {
//     expect(wrapper.exists()).toBe(true);
//   });
//   test("unit test for TodoItem", () => {
//     expect(wrapper.findAll("div")).toBeTruthy();
//   });
// });

// describe("unit tests for TodoItem input type checked", () => {
//   test("setChecked", async () => {
//     const wrapper = shallowMount(TodoItem);
//     const checkboxInput = wrapper.find('input[type="checkbox"]');
//     await checkboxInput.setChecked();
//     expect(checkboxInput.element.checked).toBeTruthy();
//   });

//   const todoName = 'Task 1';

//   describe('TodoItem component', () => {
//     test('is a vue instance', () => {
//       const wrapper = mount(TodoItem, { localVue, propsData: { taskTitle: 'Task 1' } });
//       expect(wrapper.isVueInstance()).toBeTruthy();
//       expect(wrapper.is(TodoItem)).toBeTruthy();
//       expect(wrapper.vm.taskTitle).toEqual(todoName)
//     })
//   })
// });

