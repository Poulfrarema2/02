import { useEffect, useState, useContext } from 'react'
import { NavLink, Route } from 'react-router-dom'
import LogoutButton from '../components/LogoutButton'

import { LoginContext } from '../context/LoginContext'

const Navbar = () => {

    // hvis der er en user = logget ind ... hvis ikke = ikke logget ind
    const { user } = useContext( LoginContext )



    useEffect( () => {

        const details = document.querySelectorAll( "details" ) // saml alle details

        // onclick på alle details
        details.forEach( detail => {

            detail.onclick = () => {

                // ved klik på en detail - fjern open fra alle details
                details.forEach( d => d.removeAttribute( "open" ) )

            }
        } );


    }, [] )


    return (

        <nav className="navbar bg-base-100 ">
            <div className="flex-1">
                <a className="text-xl btn btn-ghost">Dataservice</a>
            </div>
            <div className="flex-none">
                <menu className="px-1 menu menu-horizontal">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>

                    <li>
                            <NavLink to="haveservice" >HAVESERVICE</NavLink>
                        </li>

                        <li>
                            <NavLink to="haveservicereviews" >Reviews</NavLink>
                        </li>
                        <li>
                            <NavLink to="vejret" >Vejret</NavLink>
                        </li>
                        <li>
                            <NavLink to="energi" >Engeri</NavLink>
                        </li>
                   

                    {/* Vis kun LOGIN hvis man IKKE er logget ind */ }
                    {
                        !user &&
                        <li>
                            <NavLink to="login" className="mx-2 btn btn-sm btn-success">LOGIN</NavLink>
                        </li>


                        
                    }

                    {/* Vis kun LOGUD og ADMIN-link hvis bruger ikke er logget ind */ }
                    {
                        user &&
                        <>
                            <li>
                                <LogoutButton />
                            </li>
                            <li>
                                <NavLink to="admin">ADMIN</NavLink>
                            </li>
                        </>
                    }

                </menu>
            </div>
        </nav>


    )
}

export default Navbar