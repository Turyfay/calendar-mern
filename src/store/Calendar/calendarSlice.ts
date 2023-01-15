import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';
export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        events: [{
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
        newEvent: (state: any) => {
            state.activeEvent.title;
        },
        addEvent: (state: any) => {
            state.activeEvent.title;
        },
        removeEvent: (state: any) => {
            state.activeEvent.title;
        },

    }
});

export const { newEvent, addEvent, removeEvent } = calendarSlice.actions;