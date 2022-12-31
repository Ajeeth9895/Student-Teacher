
import { createSlice } from "@reduxjs/toolkit";


export const userReducer = createSlice({
  name: "users",
  // set initial details 
  initialState: {
    studentData: [
      {
        studentName: "Ajeeth",
        mentorName: "Raj",
      },
      {
        studentName: "Vishnu",
        mentorName: "Balaji",
      },
      {
        studentName: "Kumar",
        mentorName: "Raj",
      }
    ]
  },

   //reducer action function area;
  reducers: {
    addUser:(state,action)=>{
        state.studentData.push(action.payload)
    },
    editUser:(state,action)=>{
        state.studentData.splice(action.payload.index,1,action.payload.data)
    },
    deleteUser:(state,action)=>{
        state.studentData.splice(action.payload.index,1)
    }
  },
});

export const {addUser, deleteUser, editUser} =  userReducer.actions;
export default userReducer.reducer;
