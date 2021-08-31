import { mount } from "@vue/test-utils";
import Header from "@/components/organisms/Header.vue";

describe("unit test for ToDoComponent", () => {
    const wrapper = mount(Header);

    test("render a div with title", () => {
        expect(wrapper.find("div")).toBeTruthy();
    });

    test("div must be visible", () => {
        expect(wrapper.isVisible()).toBe(true);
    });
});