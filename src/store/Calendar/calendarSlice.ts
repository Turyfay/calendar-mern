import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';
export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        events: [{
            _id: new Date().getTime(),
            title: 'Cumpleaños del jefe',
            note: 'Hay que comprar el pastel',
            start: new Date(),
            end: addHours( new Date(), 2),
            user: {
                id: "123",
                name: "David"
            }
        }],
        activeEvent: null,
    },
    reducers: {
        onSetActiveEvent: (state , {payload}) => {
            state.activeEvent = payload;
        },
    }
});

export const { onSetActiveEvent } = calendarSlice.actions;