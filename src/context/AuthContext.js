import { createContext, useState, useEffect } from 'react'
import jwt_decode from 'jwt-decode'
import { useNavigate } from 'react-router-dom'
import baseurl from 'src/utils/baseurl'
import crypto from 'crypto-js';
import apiKey from "src/utils/apikey"

const baseURL = baseurl()
const AuthContext = createContext()
const currentYear = new Date().getFullYear()

export default AuthContext



export const AuthProvider = ({ children }) => {
  const apikey = apiKey()
  const hash = crypto.SHA256(apikey).toString(); 

  let [authTokens, setAuthTokens] = useState(() =>
    sessionStorage.getItem('authTokens') ? JSON.parse(sessionStorage.getItem('authTokens')) : null,
  )
  let [user, setUser] = useState(() =>
    sessionStorage.getItem('authTokens') ? jwt_decode(sessionStorage.getItem('authTokens')) : null,
  )
  let [loading, setLoading] = useState(true)

  const history = useNavigate()

  let loginUser = async (e) => {
    e.preventDefault()
    let response = await fetch(baseURL + '/website_api/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json','x-api-key' : apikey
      },
      body: JSON.stringify({ email: e.target.email.value, password: e.target.password.value }),
    })
    let data1 = await response.json()
    let data = data1.result
    console.log('data1', data1)
    if (data1.success === 0) {
      alert(data1.message)
    } else if (response.status === 200) {
      
      setAuthTokens(data)
      setUser(jwt_decode(data.access))
      sessionStorage.setItem('authTokens', JSON.stringify(data))
      history('/dashboard')
       
      }
     else {
      alert('Something went wrong!')
    }
  }

  let base16 = '/'
  let uri16 = 'login/'
  let encoded16 = window.btoa(uri16)

  let logoutUser = () => {
    setAuthTokens(null)
    setUser(null)
    sessionStorage.removeItem('authTokens')
    history('/')
  }

  let contextData = {
    user: user,
    authTokens: authTokens,
    setAuthTokens: setAuthTokens,
    setUser: setUser,
    loginUser: loginUser,
    logoutUser: logoutUser,
  }

  useEffect(() => {
    if (authTokens) {
      setUser(jwt_decode(authTokens.access))
    }
    setLoading(false)
    // getcreate_project()
    // console.log(user)
  }, [authTokens, loading])

  return (
    <AuthContext.Provider value={contextData}>{loading ? null : children}</AuthContext.Provider>
  )
}
