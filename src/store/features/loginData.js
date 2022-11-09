import { createSlice } from "@reduxjs/toolkit";

export const loginData = createSlice({
    name: "login",
    initialState: {
        login: false,
        type: "User",
        username: "Nivas Reddy",
    },
    reducers: {
        login: (state) => {
            state.login = true;
        },
        logout: (state) => {
            state.login = false;
        },
        changeMode: (state) => {
            if (state.type === "User") {
                state.type = "Admin";
            } else {
                state.type = "User";
            }
        },
    },
});

export const { login, logout, changeMode } = loginData.actions;
export default loginData.reducer;
