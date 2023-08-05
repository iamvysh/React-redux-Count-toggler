import {configureStore} from "@reduxjs/toolkit"
import CountSlice from "./CountSlice"



const store=configureStore({

    reducer:{


        count:CountSlice,
    },

})

export default store