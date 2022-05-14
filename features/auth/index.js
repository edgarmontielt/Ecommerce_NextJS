import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    updateProfile
} from "firebase/auth";
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
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then(result => {
                updateProfile(result.user, {
                    displayName: data.displayName,
                    photoURL: data.photoURL
                })
            }).catch(error => console.log(error))
        return data
    }
)

const initialState = {
    logged: false,
    name: '',
    profilePic: '',
    id: '',
    loading: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        validate(state, action) {
            state.logged = true
            state.name = action.payload?.displayName
            state.profilePic = action.payload?.photoURL
        },
        logOut(state, action) {
            state.logged = false
            state.name = ''
            state.profilePic = ''
        }
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
            state.name = action.payload.displayName
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
            state.name = action.payload.displayName
            state.id = action.payload.uid
            state.loading = false
        })
    }
})

export const { validate, logOut } = authSlice.actions
export default authSlice.reducer