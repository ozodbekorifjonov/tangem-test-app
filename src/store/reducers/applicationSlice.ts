import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCardsListAPI } from '@/api';

export const fetchCardsList = createAsyncThunk(
  'application/fetchVideoGamesList',
  async (searchTerm: string) => {
    return await getCardsListAPI(searchTerm);
  },
);

interface ApplicationState {
  cardsList: any[];
  loading: boolean;
  error: string | null;
  showAlert: boolean;
  showCard: boolean;
}

const initialState: ApplicationState = {
  cardsList: [],
  loading: false,
  error: '',
  showAlert: true,
  showCard: true,
};

const applicationSlice = createSlice({
  name: 'application',
  initialState,
  reducers: {
    closeAlert: (state) => {
      state.showAlert = false;
    },
    closeCard: (state) => {
      state.showCard = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCardsList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCardsList.fulfilled, (state, action) => {
        state.loading = false;
        state.cardsList = action.payload;
      })
      .addCase(fetchCardsList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.message || 'An error occurred';
      });
  },
});

export const { closeAlert, closeCard } = applicationSlice.actions;

export default applicationSlice.reducer;
