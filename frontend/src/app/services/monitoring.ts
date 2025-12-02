import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type {
  BodyLoginAccessTokenApiV1LoginAccessTokenPost as AccessToken,
  TrackingObjectCreate,
  TrackingObjectUpdate,
  TrackingObjectPublic,
  TrackingObjectsPublic,
} from '@/client'


export const monitoringApi = createApi({
  reducerPath: 'monitoringApi',
  tagTypes: ['MonitoringObject'],
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BACKEND_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('access_token')

      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    }
  }),
  endpoints: (builder) => ({
    create: builder.mutation<TrackingObjectPublic, TrackingObjectCreate>({
      query: (data) => ({
        url: '/monitoring/object',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['MonitoringObject'],
    }),
    read: builder.query<TrackingObjectPublic, { id: string }>({
      query: (data) => ({
        url: `/monitoring/object/${data.id}`,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      providesTags: ['MonitoringObject'],
    }),
    readAll: builder.query<TrackingObjectsPublic, { limit?: number, skip?: number }>({
      query: (params) => ({
        url: '/monitoring/objects',
        params: params,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      providesTags: ['MonitoringObject'],
    }),
    update: builder.mutation<TrackingObjectPublic, { id: string, body: TrackingObjectUpdate }>({
      query: (data) => ({
        url: `/monitoring/object/${data.id}`,
        method: 'PUT',
        body: data.body,
      }),
      invalidatesTags: ['MonitoringObject'],
    }),
    delete: builder.mutation<TrackingObjectPublic, { id: string }>({
      query: (data) => ({
        url: `/monitoring/object/${data.id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['MonitoringObject'],
    }),
  }),
})

export const {
  useReadQuery,
  useReadAllQuery,
  useCreateMutation,
  useUpdateMutation,
  useDeleteMutation
} = monitoringApi
