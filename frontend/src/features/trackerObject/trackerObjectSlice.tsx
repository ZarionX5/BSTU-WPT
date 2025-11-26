import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface TrackerObjectState {
  value: number
}

const initialState: TrackerObjectState = {
  value: 0,
}

export const trackerObjectSlice = createSlice({
  name: 'trackerObject',
  initialState: initialState,
  reducers: {

  }
})


export default trackerObjectSlice.reducer;
