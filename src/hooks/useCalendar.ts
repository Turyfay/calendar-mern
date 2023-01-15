import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useUiStore } from ".";
import { useState } from "react";
import { Views } from "react-big-calendar";


export const useCalendar = () => {
  const [lastView, setLastView] = useState<any>(
    localStorage.getItem("lastView") || Views.WEEK
  );

  const { events, activeEvent } = useSelector((store: RootState) => store.calendar);
  const { openDateModal } = useUiStore();

  const onDoubleClick = (event: any) => {
    openDateModal();
  };
  
  const onSelect = (event: any) => {
    console.log({event});
  }
  const onViewChanged = (event: any) => {
    localStorage.setItem("lastView", event);
  };
  return {
    events,
    activeEvent,
    onDoubleClick,
    lastView,
    onViewChanged,
    onSelect
  };
};
