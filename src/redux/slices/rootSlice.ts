import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        club_type: 'hybrid',
        brand: 'Callaway',
        price: "350.00",
        description: "new and improved",
        shaft: 'mitsubishi',
        material: 'graphite',
        color: 'charcoal',
    },
    reducers: {
        chooseClubType: (state, action) => { state.club_type = action.payload},
        choosePrice: (state, action) => { state.price = action.payload},
        chooseBrand: (state, action) => { state.brand = action.payload},
        chooseDescription: (state, action) => { state.description = action.payload},
        chooseShaft: (state, action) => { state.shaft = action.payload},
        chooseMaterial: (state, action) => { state.material = action.payload},
        chooseColor: (state, action) => { state.color = action.payload},
    }
})

// Export Reducer
export const reducer = rootSlice.reducer;
export const { chooseClubType, choosePrice, chooseBrand, chooseColor, chooseDescription, chooseMaterial, chooseShaft } = rootSlice.actions;