import {Calendar} from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { addHours } from 'date-fns';

//Components
import { NavBar } from "../components/NavBar";
import { localizer, getMessagesES } from '../../helpers';


const events = [{
  title: 'Title',
  notes: 'Ejemplo de notas',
  start: new Date(),
  end: addHours(new Date(), 2)
}]

export const CalendarPage = () => {
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
    />
   </>
  )
}
