import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    value: false,
    data:[],
    templateSelect:1,
    register_data_email:[],
    
  }
  export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
      login: (state) => {
      
        state.value =true

      
      },
      logout: (state) => {
        state.value =false
        state.register_data_email=[]

      },
      set_all_array_data: (state, action) => {
        state.data = action.payload

      },

      switch_template_function:(state,action)=>
        {
          
          state.templateSelect=action.payload

        }
    
  ,

        add_register_email:(state,action)=>
      {
       
        state.register_data_email=[...state.register_data_email,action.payload]
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const {login,logout ,set_all_array_data,switch_template_function,add_register_email} = counterSlice.actions
  
  export default counterSlice.reducer