import { useEffect } from "react";
import Title from "../components/Title";
import Error from "../components/Error";
import Loader from "../components/Loader";
import HTMLReactParser from "html-react-parser/lib/index";
import useRequestData from "../hooks/useRequestData";
import List from "../components/List";

const Haveservice = () => {
  const { makeRequest, isLoading, data, error } = useRequestData();

  useEffect(() => {
    makeRequest("http://localhost:5023/aboutus");
  }, []);

  console.log(data);

  return (
    <div className="flex bg-zinc-100">
      <div className="flex-grow">
        {isLoading && <Loader />}
        {error && <Error />}
        {data && (
          <div className="mx-5">
            <h1 className=" my-4 text-5xl text-lime-500">{data.title}</h1>
            <div className="flex-auto myClass my-4 space-y-4 ps-3	text-slate-700">{HTMLReactParser(data.content)}</div>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-4 rounded my-4 uppercase">
              Se alle ydelser
            </button>
          </div>
        )}
      </div>
      <div className="flex-shrink-0">
        <List />
      </div>
    </div>
  );
};

export default Haveservice;
