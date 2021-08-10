import React, { useState, useEffect, usecontext } from 'react'
import { AuthService } from '../services/AuthService'

const AuthContext = React.createContext({
  user: null,
  error: '',
  login: async (email, password) => { },
  logout: async () => { },
})

export const AuthContextProvider = (props) => {
  const [user, setUser] = useState(null)
  const [error, setError] = useState('')

  const login = async (email, password) => {
    const { user, error } = await AuthService.login() // returns either user or error
    setUser(user ?? null)
    setError(error ?? '')
  }

  const logout = async () => {
    await AuthService.logout()
    setUser(null)
    setError('')
  }

  return <AuthContext.Provider
    value={{
      user,
      error,
      login,
      logout
    }}>
    {props.children}
  </AuthContext.Provider>
}

export default AuthContext