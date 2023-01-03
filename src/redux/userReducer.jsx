
import { createSlice } from "@reduxjs/toolkit";


export const userReducer = createSlice({
  name: "users",
  
  // set initial values
  initialState: {
    studentData: [
      {
        studentName: "Ajeeth",
        email:"ajeeth@yahoo.com",
        mentorName: "Raj",
        batch:"B38WET"
      },
      {
        studentName: "Vishnu",
        email:"vishnu@gmail.com",
        mentorName: "Balaji",
        batch:"B38WET"
      },
      {
        studentName: "Kumar",
        email:"kumar@yahoo.com",
        mentorName: "Raj",
        batch:"B38WET"
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
