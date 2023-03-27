import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PARCELS_ITEMS, STARTER_PARCELS } from '../../data/parcels'
import { IParcel, IParcels } from '../../types'

export const parcelsSlice = createSlice({
  name: 'parcels',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: STARTER_PARCELS,
  reducers: {
    addParcel: (state: IParcels, action: PayloadAction<{id: string, carrier: string}>) => {
        let newParcel = PARCELS_ITEMS.find((parcel) => parcel.id.$oid === action.payload.id)
        if (newParcel) state.push({...newParcel, carrier: action.payload.carrier})
    },
    setParcelToDelivered: (state: IParcels, action: PayloadAction<{id: string}>) => {
      let index = state.findIndex((parcel) => parcel.id.$oid === action.payload.id)
      state[index].isDelivered = true
    }
  },
})

export const { addParcel } = parcelsSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectParcels = (state: IParcel): IParcel => state
export const selectParcel = (state: IParcels, id: string): IParcel | undefined => state.find((parcel) => parcel.id.$oid === id)

export default parcelsSlice.reducer