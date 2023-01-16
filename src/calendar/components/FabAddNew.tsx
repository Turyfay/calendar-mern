import { useUiStore } from "../../hooks"
import { useCalendar } from '../../hooks/useCalendar';

export const FabAddNew = () => {
    const { openDateModal } = useUiStore();
    const { onSelect } = useCalendar();

    const handleClickNew = () => {
        onSelect({
            title: '',
            notes: '',
            start: new Date(),
            end: new Date(),
            user: {}
        })
        openDateModal();
    }
  return (
    <button
    onClick={handleClickNew}
    className="btn btn-primary fab"
    >
        <i className="fas fa-plus"></i>
    </button>
  )
}
