import vuex from "../../../src/store/modules/todos";

export default {
    state: {
        todos: [{
            id: 1,
            taskTitle: "Task 1",
            isChecked: false,
        },
        {
            id: 2,
            taskTitle: "Task 2",
            isChecked: true,
        },
        {
            id: 3,
            taskTitle: "Task 3",
            isChecked: false,
        }],
        btnData: [
            {
                id: 1,
                type: "All",
                isPicked: true
            },
            {
                id: 2,
                type: "Active",
                isPicked: false
            },
            {
                id: 3,
                type: "Complete",
                isPicked: false
            }
        ],
        type: 'All',
    },
    mutations: vuex.mutations,
    getters: vuex.getters,
    actions: vuex.actions,
};