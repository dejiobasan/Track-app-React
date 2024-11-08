import { APIProvider, Map } from "@vis.gl/react-google-maps";
import axios from "axios";
import { useState } from "react";

function ViewMap() {
  const [Data, setData] = useState([]);
  const ApiKey = process.env.REACT_APP_MAP_API_KEY;

  axios
    .get("http://localhost:3000/Data")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setData(data);
    });
  return (
    <>
      <h1 className="header">Map Displaying Location</h1>
      <APIProvider
        apiKey= { ApiKey }
        onLoad={() => console.log("Maps API has loaded.")}
      >
        <Map
          defaultZoom={20}
          defaultCenter={{ lat: Data.lat, lng: Data.lng }}
        >
        </Map>
      </APIProvider>
    </>
  );
}

export default ViewMap;
