import { Calendar} from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

//Components
import { NavBar, CalendarEvent, CalendarModal, FabAddNew } from "../";
import { localizer, getMessagesES } from "../../helpers";
import { useCalendar } from "../../hooks";

export const CalendarPage = () => {
  const { events, lastView, onDoubleClick, onSelect, onViewChanged } = useCalendar();

  return (
    <>
      <NavBar />
      <Calendar
        className="p-2"
        culture="es"
        localizer={localizer}
        events={events}
        defaultView={lastView}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "calc( 100vh - 80px )" }}
        messages={getMessagesES()}
        components={{
          event: CalendarEvent,
        }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChanged}
      />
      <CalendarModal />
      <FabAddNew />
    </>
  );
};
