import {createSlice} from "@reduxjs/toolkit";

export const newSlice = createSlice({
    name:'new',
    initialState:{
        todo : [],
        delete:[]
    },
    reducers:{
      addSlick(state,action){
         state.todo.push(action)
      },
        getDelete(state , action){
            state.delete = state.delete.filter(el => el.id !== action.payload)
        },
    }
})

export const {addSlick, getDelete } = newSlice.actions
export default newSlice.reducer