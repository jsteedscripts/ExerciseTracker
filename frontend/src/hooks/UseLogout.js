import { useAuthContext } from "./UseAuthContext"
import { UseWorkoutsContext} from "./UseWorkoutsContext"

export const useLogout = () => {
    const { dispatch } = useAuthContext()
    const { dispatch: workoutsDispatch } = UseWorkoutsContext()
    const logout = () => {
        // remove user from storage
        localStorage.removeItem('user')

        // dispatch logout action
        dispatch({type: 'LOGOUT'})
        workoutsDispatch({type: 'SET_WORKOUTS', payload: null})
    }
    return {logout}
}