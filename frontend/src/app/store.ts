import { configureStore } from '@reduxjs/toolkit'
import '../features/trackerObject/TrackerObjectSlice'
import { trackerObjectSlice } from '../features/trackerObject/TrackerObjectSlice'


export const store = configureStore({
  reducer: {
    trackerObject: trackerObjectSlice.reducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
