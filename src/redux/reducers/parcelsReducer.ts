import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PARCELS } from '../../data/parcels'
import { IOrderElem, IParcel, IParcelElem } from '../../types'

export const parcelsSlice = createSlice({
  name: 'parcels',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: PARCELS,
  reducers: {
    addParcel: (state: IParcel, action: PayloadAction<{id: string, date: string}>) => {
        state[action.payload.id] = {key: action.payload.id, date: action.payload.date, orders: {}}
    },
    addOrder: (state: IParcel, action: PayloadAction<{parcelId: string, orderId: string, company: string}>) => {
      state[action.payload.parcelId].orders[action.payload.orderId] = {id: action.payload.orderId, company: action.payload.company, isDelivered: false, products: {}}
    },
    deliverOrder: (state: IParcel, action: PayloadAction<{parcelId: string, orderId: string, driverName: string, driverLicensePlate: string}>) => {
      let orderRef = state[action.payload.parcelId].orders[action.payload.orderId]
      orderRef.isDelivered = true
      orderRef.driverName = action.payload.driverName
      orderRef.driverLicensePlate = action.payload.driverLicensePlate
    }
  },
})

export const { addParcel, addOrder, deliverOrder } = parcelsSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectParcels = (state: IParcel): IParcel => state
export const selectParcel = (state: IParcel, id: string): IParcelElem => state[id]
export const selectOrder = (state: IParcel, parcelId: string, orderId: string): IOrderElem => state[parcelId].orders[orderId]

export default parcelsSlice.reducer