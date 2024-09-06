import { defineStore } from "pinia";


export const useTaskStore = defineStore('taskStore',
    {
        state: () => ({
            tasks: [
                {
                    name: 'Atul'
                }
            ],
                title: "Hello"
        })
    })