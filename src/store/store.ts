import { configureStore } from "@reduxjs/toolkit";
import { uiSlice } from './ui/uiSlice';
import { calendarSlice } from './Calendar/calendarSlice';

export const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        calendar: calendarSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;