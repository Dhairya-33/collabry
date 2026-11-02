import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchOverview } from "@/services/company.service";

/* ================= THUNK ================= */

export const getOverview = createAsyncThunk(
  "overview/getOverview",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetchOverview();
      return res.data; // { admin, manager, employee }
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to load overview"
      );
    }
  }
);

/* ================= SLICE ================= */

const overviewSlice = createSlice({
  name: "overview",

  initialState: {
    data: {
      admin: null,
      manager: null,
      employee: null,
    },
    loading: false,
  },

  reducers: {
    clearOverview: (state) => {
      state.data = {
        admin: null,
        manager: null,
        employee: null,
      };
      state.loading = false;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getOverview.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOverview.fulfilled, (state, action) => {
        state.loading = false;
        console.log("overviewSlice:",action.payload);
        state.data = action.payload; // DIRECT ASSIGN
      })
      .addCase(getOverview.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { clearOverview } = overviewSlice.actions;
export default overviewSlice.reducer;
