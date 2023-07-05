import { useContext } from 'react'
import { UserContext } from '../context/UserProvider'

const useUser = () => {
  return useContext(UserContext) /* retornar la ejecucion del useContext */

}

export default useUser;