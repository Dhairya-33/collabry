import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchMyProjectInvites } from "@/services/projectInvite.service";

/* ================= THUNK ================= */

export const getProjectInvites = createAsyncThunk(
  "projectInvites/getMy",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetchMyProjectInvites();
      return res.data;
    } catch (err) {
      return rejectWithValue("Failed to load project invites");
    }
  }
);

/* ================= SLICE ================= */

const projectInvitesSlice = createSlice({
  name: "projectInvites",

  initialState: {
    data: null,
    loading: false,
  },

  reducers: {
    clearProjectInvites: (state) => {
      state.data = null;
      state.loading = false;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getProjectInvites.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProjectInvites.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getProjectInvites.rejected, (state) => {
        state.loading = false;
        state.data = null;
      });
  },
});

export const { clearProjectInvites } = projectInvitesSlice.actions;
export default projectInvitesSlice.reducer;
