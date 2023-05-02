import { createContext, useContext, useState } from "react"

export const LoginContext = createContext({})
export const useLogin = () => useContext(LoginContext)

export const LoginProvider = ({ children }) => {
    const [loginData, setLoginData] = useState({
        username: 'Bocchi',
        email: 'bocchi@gmail.com'
    })

    return (
        <LoginContext.Provider value={{ loginData, setLoginData }}>
            {children}
        </LoginContext.Provider>
    )

}