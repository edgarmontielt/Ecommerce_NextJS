import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../config/firebase';

export const logIn = createAsyncThunk(
    'auth/login',
    async (credentials, thunkAPI) => {
        const userCredentials = await signInWithEmailAndPassword(auth, credentials.email, credentials.password)
        console.log(userCredentials.user);
        return userCredentials.user
    }
)


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        logged: false,
        name: '',
        profilePic: '',
        id: '',
        loading: false,
    },
    reducers: {
        // login(state, action) {
        //     state.logged = true,
        //         state.name = action.payload.name,
        //         state.profilePic = action.payload.profilePic,
        //         state.id = ''
        // }
    },
    extraReducers: (builder) => {

        builder.addCase(logIn.pending, (state, action) => {
            state.logged = false
            state.name = ''
            // state.profilePic = ''
            state.id = ''
            state.loading = true
        })

        builder.addCase(logIn.rejected, (state, action) => {
            state.logged = false
            state.name = ''
            // state.profilePic = ''
            state.id = ''
            state.loading = false
        })

        builder.addCase(logIn.fulfilled, (state, action) => {
            console.log(action.payload);
            state.logged = true
            state.name = action.payload.email
            // state.profilePic = ''
            state.id = action.payload.uid
            state.loading = false
        })
    }
})

export default authSlice.reducer