import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchAllProjects,
  fetchManagingProjects,
  fetchContributingProjects,
  fetchArchivedProjects,
} from "@/services/project.service";

/* ================= THUNKS ================= */

export const getAllProjects = createAsyncThunk(
  "projects/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetchAllProjects();
      return res.data;
    } catch (err) {
      return rejectWithValue("Failed to load all projects");
    }
  }
);

export const getManagingProjects = createAsyncThunk(
  "projects/getManaging",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetchManagingProjects();
      return res.data;
    } catch (err) {
      return rejectWithValue("Failed to load managing projects");
    }
  }
);

export const getContributingProjects = createAsyncThunk(
  "projects/getContributing",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetchContributingProjects();
      return res.data;
    } catch (err) {
      return rejectWithValue("Failed to load contributing projects");
    }
  }
);

export const getArchivedProjects = createAsyncThunk(
  "projects/getArchived",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetchArchivedProjects();
      return res.data;
    } catch (err) {
      return rejectWithValue("Failed to load archived projects");
    }
  }
);

/* ================= SLICE ================= */

const projectsSlice = createSlice({
  name: "projects",

  initialState: {
    all: null,
    managing: null,
    contributing: null,
    archived: null,
    loading: false,
  },

  reducers: {
    clearProjects: (state) => {
      state.all = null;
      state.managing = null;
      state.contributing = null;
      state.archived = null;
      state.loading = false;
    },
  },

extraReducers: (builder) => {
  // 1️⃣ SPECIFIC cases first
  builder
    .addCase(getAllProjects.fulfilled, (state, action) => {
      state.all = action.payload;
      state.loading = false;
    })
    .addCase(getManagingProjects.fulfilled, (state, action) => {
      state.managing = action.payload;
      state.loading = false;
    })
    .addCase(getContributingProjects.fulfilled, (state, action) => {
      state.contributing = action.payload;
      state.loading = false;
    })
    .addCase(getArchivedProjects.fulfilled, (state, action) => {
      state.archived = action.payload;
      state.loading = false;
    })

    // 2️⃣ THEN generic matchers
    .addMatcher(
      (a) =>
        a.type.startsWith("projects/") &&
        a.type.endsWith("/pending"),
      (state) => {
        state.loading = true;
      }
    )
    .addMatcher(
      (a) =>
        a.type.startsWith("projects/") &&
        a.type.endsWith("/rejected"),
      (state) => {
        state.loading = false;
      }
    );
}

});

export const { clearProjects } = projectsSlice.actions;
export default projectsSlice.reducer;
