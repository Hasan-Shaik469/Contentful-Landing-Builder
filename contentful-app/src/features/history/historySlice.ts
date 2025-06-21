import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface HistoryState {
  past: any[];
  present: any;
  future: any[];
}

const initialState: HistoryState = {
  past: [],
  present: null,
  future: [],
};

export const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    undo: (state) => {
      if (state.past.length === 0) return;
      const previous = state.past[state.past.length - 1];
      return {
        past: state.past.slice(0, -1),
        present: previous,
        future: [state.present, ...state.future],
      };
    },
    redo: (state) => {
      if (state.future.length === 0) return;
      const next = state.future[0];
      return {
        past: [...state.past, state.present],
        present: next,
        future: state.future.slice(1),
      };
    },
    setPresent: (state, action: PayloadAction<any>) => {
      if (state.present === action.payload) return;
      return {
        past: [...state.past, state.present],
        present: action.payload,
        future: [],
      };
    },
  },
});

export const { undo, redo, setPresent } = historySlice.actions;
export default historySlice.reducer;