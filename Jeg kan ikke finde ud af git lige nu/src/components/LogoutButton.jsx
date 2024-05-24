import { useContext } from 'react'
import { LoginContext } from "../context/LoginContext"


// logud-button til genbrug de steder, hvor det er relevant
const LogoutButton = () => {

    const { signOut } = useContext( LoginContext )


    return (

        <button onClick={ () => signOut() } className="btn btn-sm btn-primary">Logud</button >
    )
}

export default LogoutButton