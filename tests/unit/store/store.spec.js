import Vuex from "vuex";
import { createLocalVue } from "@vue/test-utils";
import storeConfig from "./store.cfg.js";

const localVue = createLocalVue();
localVue.use(Vuex);
const store = new Vuex.Store(storeConfig);

describe("store testing", () => {
    it("return all tasks count", () => {
        expect(store.getters.todosLength).toBe(3);
    });
    it("return all sort btns", () => {
        expect(store.getters.sortBtn.length).toBe(3);
    });
    it("return completed todos", () => {
        expect(store.getters.todosCompleted).toBe(1);
    });
    test("getter showSortBtn shows todos according to the filter", () => {
        store.state.type = "All";
        expect(store.getters.showSortBtn.length).toBe(store.state.todos.length);
        store.state.type = "Active";
        expect(store.getters.showSortBtn.length).toBe(2);
        store.state.type = "Complete";
        expect(store.getters.showSortBtn.length).toBe(1);
    });

    test("mutation 'removeTodo' delete one chosen todo", () => {
        const id = store.state.todos[0].id;
        store.commit("removeTodo", id);
        expect(store.state.todos.length).toBe(2);
    });
    test("mutation 'addTask' add new task", () => {
        const newTodo = "newTask";
        store.commit("addTodo", newTodo);
        expect(store.state.todos[0].taskTitle).toBe(newTodo);
        expect(store.state.todos[0].isChecked).toBe(false);
        expect(store.state.todos[0].id).toBeTruthy();
    });
    test("mutation 'changeBtnStatus' change radio button status", () => {
        const title = store.state.btnData[1].type;
        const isPicked = store.state.btnData[1].isPicked;
        store.commit("changeBtnStatus", title);
        expect(store.state.btnData[1].isPicked).toBe(isPicked);
    });
    test("mutation 'changeTodoStatus' change checkbox status", () => {
        const task = "newTask";
        store.commit("addTodo", task);
        const id = store.state.todos[0].id;
        const isChecked = store.state.todos[0].isChecked;
        store.commit("changeTodoStatus", id);
        expect(store.state.todos[0].isChecked).toBe(!isChecked);
    });
    test("getFromStorage", () => {
        store.dispatch("getFromStorage");
        expect(store.state.todos.length).toBe(4);
    });
});