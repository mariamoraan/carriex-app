import { createSlice } from '@reduxjs/toolkit'
import { CARRIERS } from '../../data/carriers'
import { ICarrier, ICarriers } from '../../types'

export const carriersSlice = createSlice({
  name: 'carriers',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: CARRIERS,
  reducers: {

  },
})

// Other code such as selectors can use the imported `RootState` type
export const selectCarriers = (state: ICarriers): ICarriers => state
export const selectCarrier = (state: ICarriers, id: string): ICarrier | undefined => state.find((carrier) => carrier.id.$oid.toLocaleUpperCase() === id.toLocaleUpperCase())

export default carriersSlice.reducer