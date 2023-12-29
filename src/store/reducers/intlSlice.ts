import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EN, RU } from '../../const';
import RUSSIAN from '../../lang/ru.json';
import ENGLISH from '../../lang/en.json';

type Message = {
  type: number;
  value: string;
};

interface GenericState<T> {
  locale: string;
  messages: Record<string, T>;
}

const getLanguageData = (locale: string): Record<string, Message[]> =>
  locale === RU ? RUSSIAN : ENGLISH;

const initialState: GenericState<Message[]> = {
  locale: localStorage.getItem('lang') || EN,
  messages: getLanguageData(localStorage.getItem('lang') || EN),
};

const intlSlice = createSlice({
  name: 'intl',
  initialState,
  reducers: {
    selectLocale: (state, action: PayloadAction<string>) => {
      const newLocale = action.payload;
      state.locale = newLocale;
      state.messages = getLanguageData(newLocale);
    },
    selectLang: (state, action: PayloadAction<Record<string, Message[]>>) => {
      state.messages = action.payload;
    },
  },
});

export const { selectLocale, selectLang } = intlSlice.actions;
export default intlSlice.reducer;
