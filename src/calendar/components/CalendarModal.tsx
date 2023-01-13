import { addHours, differenceInSeconds } from "date-fns";
import { useState } from "react";
import Modal from "react-modal";
import DatePicker, {registerLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from 'date-fns/locale/es';


registerLocale('es',es);


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export const CalendarModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [formValues, setFormValues] = useState({
    title: "David",
    notes: "Enamorado",
    start: new Date(),
    end: addHours(new Date(), 2),
  });

  const onInputChanged = ({ target }: any) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const onCloseModel = () => {
    setIsModalOpen(!isModalOpen);
  };

  const onSubmit = (event: any) =>{
    event.preventDefault();

    const difference = differenceInSeconds(formValues.end, formValues.start);
    if (isNaN(difference) || difference <= 0) {
        console.log("Error en fechas")
    }

    if (formValues.title.length <= 0) return;

    console.log(formValues);
  }

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={onCloseModel}
      style={customStyles}
      className="modal"
      overlayClassName="modal-fondo"
      closeTimeoutMS={200}
    >
      <h1> Nuevo evento </h1>
      <hr />
      <form className="container" onSubmit={onSubmit}>
        <div className="form-group mb-2">
          <label>Fecha y hora inicio</label>
          <DatePicker
            className="form-control"
            selected={formValues.start}
            dateFormat="Pp"
            showTimeSelect
            locale='es'
            timeCaption="Hora"
            onChange={(date: Date) =>
              setFormValues({ ...formValues, start: date })
            }
          />
        </div>

        <div className="form-group mb-2">
          <label>Fecha y hora fin</label>
          <DatePicker
            minDate={formValues.start}
            className="form-control"
            selected={formValues.end}
            dateFormat="Pp"
            showTimeSelect
            locale='es'
            timeCaption="Hora"
            onChange={(date: Date) =>
              setFormValues({ ...formValues, end: date })
            }
          />
        </div>

        <hr />
        <div className="form-group mb-2">
          <label>Titulo y notas</label>
          <input
            type="text"
            className="form-control"
            placeholder="Título del evento"
            name="title"
            autoComplete="off"
            value={formValues.title}
            onChange={onInputChanged}
          />
          <small id="emailHelp" className="form-text text-muted">
            Una descripción corta
          </small>
        </div>

        <div className="form-group mb-2">
          <textarea
            className="form-control"
            placeholder="Notas"
            rows={5}
            name="notes"
            value={formValues.notes}
            onChange={onInputChanged}
          ></textarea>
          <small id="emailHelp" className="form-text text-muted">
            Información adicional
          </small>
        </div>

        <button type="submit" className="btn btn-outline-primary btn-block">
          <i className="far fa-save"></i>
          <span> Guardar</span>
        </button>
      </form>
    </Modal>
  );
};
