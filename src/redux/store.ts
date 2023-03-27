import { configureStore } from '@reduxjs/toolkit'
import parcelsReducer from './reducers/parcelsReducer'
// ...

const store = configureStore({
  reducer: {
    parcels: parcelsReducer,
  },
})

export default store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch