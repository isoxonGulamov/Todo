import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: JSON.parse(localStorage.getItem("User")) || []
}

export const todoslice = createSlice(
  {
    name: "todo",
    initialState,
    reducers: {
      addTodo: (state, action) => {
        state.users.push(action.payload)
        localStorage.setItem("User", JSON.stringify(state.users))

      },
      deleteUser: (state, action) => {
      const  newArr =   state.users.filter((el) => el.id !== action.payload)
      localStorage.setItem("User", JSON.stringify(newArr))
       return {...state,users:newArr}  
         
      },
      editUser:(state,action)=>{
         let m =  state.users.map((el)=> (el.id == action.payload.id ? action.payload : el) )
         localStorage.setItem("User",JSON.stringify(m))
         return {...state,users:m}
      }
    }
  }
)

export const { addTodo, deleteUser,editUser } = todoslice.actions
export default todoslice.reducer