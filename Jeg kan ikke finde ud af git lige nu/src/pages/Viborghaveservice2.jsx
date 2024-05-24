import { useEffect } from 'react'
import Title from '../components/Title'
import Error from '../components/Error'
import Loader from '../components/Loader'

import useRequestData from '../hooks/useRequestData'


const HaveserviceReviews = () => {
   
    const { makeRequest, isLoading, data, error } = useRequestData()


    useEffect( () => {

        makeRequest( "http://localhost:5023/reviews" )

    }, [] )



    return (<div></div>
     
             

            
            
        
    )



}

export default HaveserviceReviews