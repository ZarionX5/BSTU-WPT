import { configureStore } from '@reduxjs/toolkit'
import { authApi } from './services/auth'
import { monitoringApi } from './services/monitoring'


export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [monitoringApi.reducerPath]: monitoringApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
  .concat(authApi.middleware)
  .concat(monitoringApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
