import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// 1️⃣ Define the shape of your account state
interface AccountState {
  currentUser: { username: string; email: string } | null;
}

// 2️⃣ Define the initial state with that type
const initialState: AccountState = {
  currentUser: null,
};

// 3️⃣ Create the slice with typed payloads
const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<AccountState["currentUser"]>) => {
      state.currentUser = action.payload;
    },
  },
});

// 4️⃣ Export actions and reducer
export const { setCurrentUser } = accountSlice.actions;
export default accountSlice.reducer;
