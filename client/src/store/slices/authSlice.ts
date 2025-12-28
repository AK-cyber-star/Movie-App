import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { TUser } from "../../types/api.types";
import { REHYDRATE } from "redux-persist";
import type { AnyAction } from "redux";

interface AuthState {
    user: TUser | null;
    token: string | null;
    isLoading: boolean;
}

const initialState: AuthState = {
    user: null,
    token: null,
    isLoading: true,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredentials: (state, action: PayloadAction<{ token: string; user: TUser }>) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoading = false;
            localStorage.setItem("token", state.token);
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.isLoading = false;
            
            localStorage.removeItem("token");
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(REHYDRATE, (state, action: AnyAction) => {
                if (action.payload && action.payload.auth) {
                    state.user = action.payload.auth.user;
                    state.token = action.payload.auth.token;
                }
                state.isLoading = false;
            })
    },
});

export const { setCredentials, logout, setLoading } = authSlice.actions;
export default authSlice.reducer;


