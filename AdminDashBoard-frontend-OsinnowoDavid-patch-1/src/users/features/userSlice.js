import { createSlice } from "@reduxjs/toolkit";


const initialState =[{id: '1,', name:'david osinnowo' , email: 'david@gmail'},
    {id: '2,', name:'daniel' , email: 'davidel@gmail'},
    {id: '3,', name:'john', email: 'davidvds@gmail'}];

const userSlice =createSlice({
    name:'user',

    initialState,
    reducers:{
    addUser:(state, action) =>{
        state.push(action.payload)
    }, 
    edituser:(state, action ) =>{
        const {id, name, email}= action.payload;
        const existinguser = state.find(user => user.id === id )
        if (existinguser){
            existinguser.name=name;
            existinguser.email= email;
        }
    },
    deleteUsers:(state, action)=> {
        const {id} = action.payload;
        const existinguser = state.find(user => user.id === id );
        if (existinguser)

            return state.filter(user => user.id !==id)
    }
    }
})
export const {addUser, edituser, deleteUsers} = userSlice.actions;
export default userSlice.reducer