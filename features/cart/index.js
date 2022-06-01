import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { database } from '../../config/firebase';
import { collection, addDoc, getDocs, getDoc } from 'firebase/firestore';

export const addToCart = createAsyncThunk(
     'cart/addToCart', async (data, thunkAPI) => {
          const col = collection(database, 'cart', localStorage.getItem('id'), 'items')
          const res = await addDoc(col, data)
          return data
     }
)

export const recoverCart = createAsyncThunk(
     'cart/recoverCart', async (data, thunkAPI) => {
          const col = collection(database, 'cart', localStorage.getItem('id'), 'items')
          const snapshot = await getDocs(col)

          let products = []
          snapshot.forEach(doc => {
               products.push({ ...doc.data(), id: doc.id })
          })
          return products
     }
)

export const addItemToProduct = createAsyncThunk(
     'cart/addItem', async (idProduct, thunkAPI) => {
          try {
               const state = thunkAPI.getState()
               console.log(idProduct);
               console.log(state.auth.id);
               const col = collection(database, 'cart', state.auth.id, 'items')
               const snapshot = await getDocs(col)
               
               console.log(snapshot);
               snapshot.forEach(item => {
                    const product = item.data()
                    console.log(product)
                    
               })
          } catch (error) {
               console.log(error);
          }
     }
)

const initialState = {
     items: [],
     loading: false
}

const cartSlice = createSlice({
     name: 'cart',
     initialState,
     reducers: {
          removeToCart(state, action) {
               const id = action.payload
               state.items = state.items.filter(item => item.product.id !== id)
          },
          addItem(state, action) {
               const product = action.payload
               state.items.forEach(item => {
                    if (item.product.id === product.product.id) {
                         item.amount += 1
                    }
               })
          },
          removeItem(state, action) {
               const product = action.payload
               state.items.forEach(item => {
                    if (item.product.id === product.product.id) {
                         item.amount -= 1
                    }
               })
          }
     }, extraReducers: (builder) => {
          builder.addCase(addToCart.pending, (state, action) => {
               state.loading = true
          })
               .addCase(addToCart.fulfilled, (state, action) => {
                    state.loading = false
                    state.items = [...state.items, action.payload]
               })

          builder.addCase(recoverCart.pending, (state, action) => {
               state.loading = true
          })
               .addCase(recoverCart.rejected, (state, action) => {
                    state.loading = false
               })
               .addCase(recoverCart.fulfilled, (state, action) => {
                    state.loading = false
                    state.items = action.payload
               })
     }
})

export const { removeToCart, addItem, removeItem } = cartSlice.actions
export default cartSlice.reducer