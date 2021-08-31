import Vuex from "Vuex";
import { mount, createLocalVue } from "@vue/test-utils";
import TodoList from "@/components/organisms/TodoList";

let localVue = createLocalVue();
localVue.use(Vuex);

describe("TodoList", () => {
    let getters;
    let store;

    beforeEach(() => {
        getters = {
            showSortBtn: () => [
                {
                    id: 1,
                    type: "All",
                    isPicked: true,
                },
            ],
        };
        store = new Vuex.Store({ getters });
    });

    test("content present", () => {
        let wrapper = mount(TodoList, { store, localVue });
        expect(wrapper.vm).toBeTruthy();
        expect(wrapper.is(TodoList)).toBeTruthy();
    });
});