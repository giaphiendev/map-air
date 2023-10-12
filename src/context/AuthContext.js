import { createContext, useContext, useReducer, useMemo } from 'react'
import PropTypes from 'prop-types'
import Cookies from 'js-cookie'

const AuthContext = createContext()

AuthContext.displayName = 'Authentication'

function reducer(state, action) {
  switch (action.type) {
    case 'SET_LOGIN': {
      return { ...state, isAuth: action.value }
    }
    case 'SET_ME_VALUE': {
      return { ...state, meData: action.value }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function AuthContextProvider({ children }) {
  const initialState = {
    isAuth: !!Cookies.get('_token_'),
    meData: JSON.parse(localStorage.getItem('meData')) || {},
  }

  const [controller, dispatch] = useReducer(reducer, initialState)

  const value = useMemo(() => [controller, dispatch], [controller, dispatch])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

function useAuthContextController() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuthenticationController should be used inside the AuthContextProvider.')
  }

  return context
}
AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

// Context module functions
const setIsAuth = (dispatch, value) => dispatch({ type: 'SET_LOGIN', value })
const setMeData = (dispatch, value) => dispatch({ type: 'SET_ME_VALUE', value })
export { AuthContextProvider, useAuthContextController, setIsAuth, setMeData }
