import { configureStore } from "@reduxjs/toolkit";


import counterSlice from "./features/counterSlice";



const store = configureStore({


    reducer:{

        counter:counterSlice.reducer,

    }


})

export default store;


export type RootState = ReturnType<typeof store.getState>
