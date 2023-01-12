import {Calendar, Views} from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { addHours } from 'date-fns';

//Components
import { NavBar, CalendarEvent, CalendarModal } from "../";
import { localizer, getMessagesES } from '../../helpers';
import { useState } from 'react';

const events = [{
  title: 'Cumpleaños del Jefe',
  notes: 'Ejemplo de notas',
  start: new Date(),
  end: addHours(new Date(), 2),
  user: {
    id: 'kkdmleck4r533cd',
    name: 'David Enamorado'
  }
}]


export const CalendarPage = () => {
  
  const [lastView, setLastView] = useState<any>(localStorage.getItem('lastView') || Views.WEEK)

  const onDoubleClick = (event: any) => {
    console.log({doubleClick: event})
  }

  const onSelect = (event: any) => {
    console.log({click: event})
  }

  const onViewChanged = (event: any) => {
    localStorage.setItem('lastView',event);
  }

  return (
   <>
    <NavBar/>
    <Calendar className='p-2' 
    culture='es' 
    localizer={localizer} 
    events={events} 
    defaultView={lastView}
    startAccessor="start" 
    endAccessor="end" 
    style={{height: 500}}
    messages={getMessagesES()}
    components={{
      event: CalendarEvent
    }}
    onDoubleClickEvent={onDoubleClick}
    onSelectEvent={onSelect}
    onView={onViewChanged}
    />
    <CalendarModal/>
   </>
  )
}
