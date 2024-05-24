import { useEffect } from 'react'
import Title from '../components/Title'
import Error from '../components/Error'

import useRequestData from '../hooks/useRequestData'
import Loader from './Loader'


const List = () => {
   
    const { makeRequest, isLoading, data, error } = useRequestData()
    

    useEffect( () => {

      
        makeRequest("http://localhost:5023/services?limit=2");

    }, [] )

console.log(data)

    return (
        <div>

            

            { isLoading && <Loader /> }
            { error && <Error /> }
            {data && data &&(
            <div className=" flex flex-wrap gap-2  ">
            {data.map(service => (
                
              <div key={service._id} className="service-item-3   card w-96  text-slate-700">
                <div className="card-body">
                
                <figure><img className="object-scale-down" src={'  http://localhost:5023/images/' + service.image} alt={service.title} /></figure>
                <h2 className='card-title '>{service.title}</h2>
                <p>{service.content}</p></div>
              </div>
            ))}
          </div>

            
            
        )}
        
        </div>
    )



}

export default List