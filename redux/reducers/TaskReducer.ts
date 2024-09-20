import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    tasks: [],
    isLoaded: false,
    mount: 0,
    userId: 0,
    done: 0,
    user: undefined,
    pubKey: null,
    priKey: null,
}

export const TaskReducer = createSlice({
    name: 'task',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        setDone: (state, action) => {
            state.done = action.payload
        },
        setMount: (state, action) => {
            
            state.mount = action.payload
        },
        setUserId: (state, action) => {
            state.userId = action.payload
        },
        setTasks: (state, action) => {
            state.tasks = action.payload
            state.isLoaded = true
        },
        setKeyPairs: (state, action) => {
            state.pubKey = action.payload.publicKey
            state.priKey = action.payload.privateKey
        },
        removeKeyPairs: (state, action) => {
            state.pubKey = null
            state.priKey = null
        },
    },
})

export const { setUser, setMount, setDone, setUserId, setTasks, setKeyPairs, removeKeyPairs } = TaskReducer.actions

export default TaskReducer.reducer