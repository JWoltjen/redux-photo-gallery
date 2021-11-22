import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const getPhotos = createAsyncThunk(
    
)
export const gallerySlice = createSlice({
    name: 'gallery', 
    initialState: {
        photos: [], 
        isLoading: false, 
    }
}); 

export default gallerySlice.reducer; 