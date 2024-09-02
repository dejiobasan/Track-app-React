import {APIProvider, Map, MapCameraChangedEvent} from '@vis.gl/react-google-maps';
import axios from "axios";

function ViewMap() {
    return(
      axios.get("http://localhost:3000/Data")
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })

        <div>
          <>
            <h1 className="header">Map Displaying Location</h1>
            <APIProvider apiKey={'Your API key here'} onLoad={() => console.log('Maps API has loaded.')}>
              <Map
                defaultZoom={20}
                defaultCenter={{ lat: data.lat, lng: data.lng }}
                onCameraChanged={(ev: MapCameraChangedEvent) => console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)}>
              </Map>
            </APIProvider>
          </>
        </div>
    );
};

export default ViewMap;