import { configureStore, createSlice } from "@reduxjs/toolkit";



const id =localStorage.getItem("userid")||"" ;
 const user_id = id? JSON.parse(id):"";


const initialState = {
  id: user_id,
  name:"",
  imageurl:"",

};


const userSlice = createSlice({ 
  name: "userdetails",
  initialState,
  reducers: {
    setId: (state, action) => {
      const { id, imageurl, name } = action.payload;
      state.id = id;
      state.imageurl = imageurl;
      state.name = name;
    }
    ,
    logout:(state)=>
    { 
      state.id = "";
      state.imageurl = "";
      state.name = "";
    }
    
  },
});

export const { setId,logout } = userSlice.actions;
export const userReducer = userSlice.reducer;

const store = configureStore({
  reducer: {
    user: userReducer, // ✅ yeh ab sahi hai
  },
});

export default store;
