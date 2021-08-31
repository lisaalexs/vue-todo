import Vuex from "vuex";
import { createLocalVue, shallowMount, mount } from "@vue/test-utils";
import SortBtn from "@/components/molecules/SortBtn";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("unit test for Buttons", () => {
    let mutations;
    let store;

    beforeEach(() => {
        mutations = {
            changeBtnStatus: jest.fn()
        };
        store = new Vuex.Store({ mutations })
    });
    const wrapper = shallowMount(SortBtn);
    test("does it exist is button", () => {
        expect(wrapper.exists()).toBe(true);
    });
    test("does it exist is button", () => {
        expect(wrapper.findAll("button")).toBeTruthy();
    });
    test("sorting tasks", async () => {
        let wrapper = mount(SortBtn, { store, localVue });
        let changer = wrapper.find("input[type='radio']");
        await changer.trigger("click");
        await changer.trigger("change");
        expect(mutations.changeBtnStatus).toHaveBeenCalled();
    });
});