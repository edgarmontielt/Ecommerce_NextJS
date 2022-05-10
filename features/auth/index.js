import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../config/firebase';

export const logIn = createAsyncThunk(
    'auth/login',
    async (credentials, thunkAPI) => {
        try {
            const userCredentials = await signInWithEmailAndPassword(auth, credentials.email, credentials.password)
            return userCredentials.user
        } catch (error) {
            console.log(error);
        }
    }
)

export const signUp = createAsyncThunk(
    'auth/signup',
    async (data, thunkAPI) => {
        try {
            const result = await createUserWithEmailAndPassword(auth, data.email, data.password)
            console.log(result);
            return result.user
        } catch (error) {
            console.log(error);

        }
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
            state.loading = true
        })

        builder.addCase(logIn.rejected, (state, action) => {
            state.logged = false
            state.name = ''
            state.id = ''
            state.loading = false
        })

        builder.addCase(logIn.fulfilled, (state, action) => {
            state.logged = true
            state.name = action.payload.email
            state.id = action.payload.uid
            state.loading = false
        })

        builder.addCase(signUp.pending, (state, action) => {
            state.loading = true
        })

        builder.addCase(signUp.rejected, (state, action) => {
            state.logged = false
            state.name = ''
            state.id = ''
            state.loading = false
        })

        builder.addCase(signUp.fulfilled, (state, action) => {
            state.logged = true
            state.name = action.payload.email
            state.id = action.payload.uid
            state.loading = false
        })
    }
})

export default authSlice.reducer