import { FormEvent, Dispatch, SetStateAction } from "react"
import { useForm } from "../hooks/useForm"
import { InputForm } from "./input-form"

export interface FormValues {
  mascota : string;
  duenio : string;
  email : string;
  raza : string
}

export const Formulario = ({setPacientes} : {setPacientes : Dispatch<SetStateAction<FormValues[]>>}) => {

  const {formValues, handleChange} = useForm<FormValues>({ /* destructuring de un objeto */
    mascota : "",
    duenio : "",
    email : "",
    raza : ""
  });

  const handleSubmit = (e : FormEvent) => {
    e.preventDefault();

    setPacientes((prev : FormValues[]) => {
      return [...prev, formValues]
    });
  }

  return (
    <div className="md:w-1/2 lg:w-2/5"> {/* medias queries */}
        <h2 className="font-bold text-3xl mb-10 text-center">Registrar <span className="text-indigo-700 font-bold">Nuevo Paciente</span></h2>
        <form
          className="bg-white shadow-lg rounded-lg py-10 px-5 mb-10"
          onSubmit={handleSubmit}
        >
            <InputForm
              label="Mascota"
              name="mascota"
              type="text"
              placeholder="Nombre de la mascota"
              onChange={handleChange}
            />
            <InputForm
              label="Raza"
              name="raza"
              type="text"
              placeholder="Raza de la mascota"
              onChange={handleChange}
            />
             <InputForm
              label="Dueño"
              name="duenio"
              type="text"
              placeholder="Nombre y apellido del dueño"
              onChange={handleChange}
            />
             <InputForm
              label="Email"
              name="email"
              type="text"
              placeholder="Email de contacto"
              onChange={handleChange}
            />
            <button
              className="text-white bg-indigo-600 w-full p-3 uppercase font-bold hover:bg-indigo-800 transition-all">Agregar paciente
            </button>
        </form>
    </div>
  )
}
