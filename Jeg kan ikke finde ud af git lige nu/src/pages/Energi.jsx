import { useEffect } from "react";
import Title from "../components/Title";
import Error from "../components/Error";
import Loader from "../components/Loader";
import useRequestData from "../hooks/useRequestData";

const Energi = () => {
  const { makeRequest, isLoading, data, error } = useRequestData();

  useEffect(() => {
    makeRequest(
      "https://api.energidataservice.dk/dataset/Elspotprices?offset=0&start=2024-05-23T00:00&end=2024-05-24T00:00&filter=%7B%22PriceArea%22:[%22DK1%22]%7D&sort=HourUTC%20DESC"
    );
  }, []);

  return (
    <div>
      <Title titleText={"Energi"} />

      {isLoading && <Loader />}
      {error && <Error />}

      <div className="flex flex-wrap gap-1 my-2 justify-left">
        {data &&
          data.records.map((e, i) => (
            <div
              className="m-2 border border-white w-50 bg-lime-700 card-bordered"
              key={"energy" + i}
            >
              <div className="card-body">
                <h2 className="card-title"> {e.SpotPriceDKK.toFixed(2)} DKK</h2>
                <p>Tidspunkt: {new Date(e.HourDK).toLocaleString('da-dk', {year: "2-digit", month: "numeric", day: "numeric", hour: "numeric", minute: "numeric"})}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};


  



export default Energi;
