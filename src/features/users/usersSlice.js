import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Mahmoud Tonsy" },
  { id: "1", name: "Badr Mohamed" },
  { id: "2", name: "Omr Moataz" },
];


export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users; ;
export default usersSlice.reducer ; 