import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CARRIERS } from '../../data/carriers'
import { ICarrier, ICarriers } from '../../types'

export const carriersSlice = createSlice({
  name: 'carriers',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: CARRIERS,
  reducers: {
    addCarrier: (state: ICarriers, action: PayloadAction<{id: string}>) => {
        let newCarrier = CARRIERS.find((carrier) => carrier.id.$oid === action.payload.id)
        if (newCarrier) state.push(newCarrier)
    },
  },
})

export const { addCarrier } = carriersSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCarriers = (state: ICarriers): ICarriers => state
export const selectCarrier = (state: ICarriers, id: string): ICarrier | undefined => state.find((carrier) => carrier.id.$oid === id)

export default carriersSlice.reducer