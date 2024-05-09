import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
  address: "",
};

const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {
    details: (state, data) => {
      state.firstName = data.payload.firstName;
      state.lastName = data.payload.lastName;
      state.address = data.payload.address;
      state.email = data.payload.email;
      console.log(data.payload);
    },
  },
});

export default detailSlice.reducer;
export const { details } = detailSlice.actions;
