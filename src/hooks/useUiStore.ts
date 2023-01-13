import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState, onCloseDateModal, onOpenDateModal } from '../store';

export const useUiStore = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { isDateModalOpen } = useSelector((state:RootState) => state.ui);


    const closeDateModal = () => {
        dispatch(onCloseDateModal());
    }

    const openDateModal = () => {
        dispatch(onOpenDateModal());
    }

    return {
        isDateModalOpen,
        closeDateModal,
        openDateModal,
    }
}