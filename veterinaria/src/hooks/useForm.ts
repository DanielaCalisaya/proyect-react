/* este hook le agrega funcionalidad, 
no retornará nada, no escribirá nada, 
asi que su extención final puede ir solo con ts, en vez de tsx*/
import { ChangeEvent, useState } from "react"

export const useForm = <T> (initialState : T) => {

  const [formValues, setFormValues] = useState(initialState) /* destructuring de un array */
    
  const handleChange = ({target} : ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [target.name] : target.value
    })
  };

  const reset = () => setFormValues(initialState)

  return {
    formValues,
    handleChange,
    reset
  }
}