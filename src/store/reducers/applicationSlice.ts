import {
  Action,
  createAsyncThunk,
  createSlice,
  PayloadAction,
  ThunkAction,
} from '@reduxjs/toolkit';
import { getCardsListAPI } from '@/api';
import { RootState } from '@/types/types';

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
}

const initialState: ApplicationState = {
  cardsList: [],
  loading: false,
  error: '',
  showAlert: true,
};

const applicationSlice = createSlice({
  name: 'application',
  initialState,
  reducers: {
    closeAlert: (state) => {
      state.showAlert = false;
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

export const { closeAlert } = applicationSlice.actions;

export default applicationSlice.reducer;

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
