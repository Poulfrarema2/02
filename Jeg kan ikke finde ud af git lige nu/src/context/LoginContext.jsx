import { createContext, useState, useEffect } from 'react'


export const LoginContext = createContext()


// HUSK!!!!: Context provider skal tilføjes til main.jsx el.lign.
const LoginContextProvider = ( props ) => {


    const [ user, setUser ] = useState()


    // Simuleret login - men kan nemt kobles på en rigtig signIn-metode med kald til et api, hvor identity og password sendes med
    const signIn = ( identity, password ) => {

        // simuleret login
        // identity kan være email eller password
        if ( identity === "admin" && password === "abc123" ) {
            setUser( identity )
        } else {
            setUser()
        }

    }

    const signOut = () => {
        setUser() // tøm state = ikke logget ind
    }


    return (
        <LoginContext.Provider value={ { signIn, signOut, user } }>
            { props.children }
        </LoginContext.Provider>
    )

}

export default LoginContextProvider