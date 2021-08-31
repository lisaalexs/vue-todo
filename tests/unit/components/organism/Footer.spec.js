import Vuex from "Vuex";
import { mount, createLocalVue } from "@vue/test-utils";
import Footer from "@/components/organisms/Footer.vue";

let localVue = createLocalVue();
localVue.use(Vuex);

describe("Footer", () => {
    let getters;
    let store;

    beforeEach(() => {
        getters = {
            sortBtn: () => [
                {
                    id: 1,
                    type: "All",
                    isPicked: true,
                },
            ],
            todosCompleted: () => [
                {
                    id: 1,
                    task: "Task 1",
                    isChecked: false,
                },
            ],
            todosLength: () => [
                {
                    id: 1,
                    task: "Task 1",
                    isChecked: false,
                },
            ],
        };
        store = new Vuex.Store({ getters });
    });

    test("footer present", () => {
        let wrapper = mount(Footer, { store, localVue });
        expect(wrapper.vm).toBeTruthy();
        expect(wrapper.is(Footer)).toBeTruthy();
    });
});