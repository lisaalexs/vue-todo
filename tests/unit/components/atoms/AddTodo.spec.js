import Vuex from "Vuex";
import { mount, createLocalVue } from "@vue/test-utils";
import AddTodo from "@/components/atoms/AddTodo.vue";

let localVue = createLocalVue();
localVue.use(Vuex);

describe("Add a new todo", () => {
    let mutations;
    let store;

    beforeEach(() => {
        mutations = {
            addTodo: jest.fn()
        };
        store = new Vuex.Store({ mutations })
    });

    test("element present", () => {
        let wrapper = mount(AddTodo, { localVue });
        expect(wrapper.vm).toBeTruthy();
        expect(wrapper.is(AddTodo)).toBeTruthy();
    });

    test("add todo to list", async () => {
        const wrapper = mount(AddTodo, { store, localVue });
        await wrapper.find("form").trigger("submit.prevent");
        expect(mutations.addTodo).toHaveBeenCalled();
    });

});