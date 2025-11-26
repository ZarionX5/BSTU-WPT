import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {
  type BodyLoginAccessTokenApiV1LoginAccessTokenPost as AccessToken,
  type UserPublic,
  type UserRegister,
} from '@/client'
import { formDataBodySerializer } from '@/client/client'


export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8000/api/v1',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('access_token')

      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    }
  }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    register: builder.mutation<UserPublic, UserRegister>({
      query: (data) => ({
        url: '/users',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['User'],
    }),

    login: builder.mutation<{ access_token: string }, AccessToken>({
      query: (formData) => ({
        url: '/login/access-token',
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        body: new URLSearchParams({
          password: formData.password,
          username: formData.username
        }),
      }),
    }),

    getCurrentUser: builder.query<UserPublic, void>({
      query: () => '/users/me',
      providesTags: ['User'],
    }),
  }),
})

export const {
  useRegisterMutation,
  useLoginMutation,
  useGetCurrentUserQuery
} = authApi
