import {Calendar} from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { addHours } from 'date-fns';

//Components
import { NavBar, CalendarEvent } from "../";
import { localizer, getMessagesES } from '../../helpers';

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
  /* const eventStyleGetter = (event: any, start: any, end: any, isSelected: any) =>{
    console.log({event,  start, end, isSelected});
  } */
  
  return (
   <>
    <NavBar/>
    <Calendar className='p-2' 
    culture='es' 
    localizer={localizer} 
    events={events} 
    startAccessor="start" 
    endAccessor="end" 
    style={{height: 500}}
    messages={getMessagesES()}
    components={{
      event: CalendarEvent
    }}
    />
   </>
  )
}
