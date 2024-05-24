
import React, { useEffect, useState } from "react"; // Import useState
import Error from "../components/Error";
import Loader from "../components/Loader";

import useRequestData from "../hooks/useRequestData";



const Vejret = () => {const { makeRequest, isLoading, data, error } = useRequestData()
useEffect(() => {
makeRequest("https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=69a6ab4bc1dd6117fcdae396f25d02cf" )
}, [])


console.log(data)

return( <section>
  { isLoading && <Loader /> }
  { error && <Error /> }
  
  
  
  
  
  
  </section>)
  }
  
  




  export default Vejret