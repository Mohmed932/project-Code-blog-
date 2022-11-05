import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetching = createAsyncThunk(
  "notes/Fetching",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch("http://localhost:4000/prodect");
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const posting = createAsyncThunk(
  "notes/posting",
  async (Sending, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch("http://localhost:4000/prodect", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(Sending),
      });
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const deleting = createAsyncThunk(
  "notes/deleting",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await fetch(`http://localhost:4000/prodect/${id}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      });
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  dataing: [],
  error: false,
  loading: false,
};
const getData = createSlice({
  name: "notes",
  initialState,
  extraReducers: {
    // Get Data
    [fetching.pending]: (state) => {
      state.loading = true;
    },
    [fetching.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = false;
      state.dataing = action.payload;
    },
    [fetching.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
    // Post Data
    [posting.pending]: (state) => {
      state.loading = true;
    },
    [posting.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = false;
      state.dataing.unshift(action.payload);
    },
    [posting.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
    // Delete Data
    [deleting.pending]: (state) => {
      state.loading = true;
    },
    [deleting.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = false;
      state.dataing = state.dataing.filter((i) => i.id !== action.payload);
    },
    [deleting.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default getData.reducer;
