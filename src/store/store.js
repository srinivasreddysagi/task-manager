import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./features/loginData";

export default configureStore({
    reducer: {
        login: loginReducer,
    },
});
