import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCompanyMembers } from "@/services/company.service";

/* ================= THUNK ================= */

export const getCompanyMembers = createAsyncThunk(
  "members/getCompanyMembers",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetchCompanyMembers();
      return res.data; // { totalMembers, members[] }
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to load company members"
      );
    }
  }
);

/* ================= SLICE ================= */

const membersSlice = createSlice({
  name: "members",

  initialState: {
    data: null,   // backend response
    loading: false,
  },

  reducers: {
    clearMembers: (state) => {
      state.data = null;
      state.loading = false;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getCompanyMembers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCompanyMembers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload; // DIRECT ASSIGN
      })
      .addCase(getCompanyMembers.rejected, (state) => {
        state.loading = false;
        state.data = null;
      });
  },
});

export const { clearMembers } = membersSlice.actions;
export default membersSlice.reducer;
