import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import * as parkDate from "../data/Comedores.json";
import latas from '../latas.svg';
import '../index.css';


const Mapbox = () => {
    const [viewport, setViewport] = useState({
        latitude: -34.692113,
        longitude:-58.730991,
        width: "50vw",
        height: "50vh",
        zoom: 11.2,
    });
    const [selectedPark, setSelectedPark] = useState(null);

    useEffect(() => {
        const listener = e => {
            if (e.key === "Escape") {
                setSelectedPark(null);
            }
        };
        window.addEventListener("keydown", listener);

        return () => {
            window.removeEventListener("keydown", listener);
        };
    }, []);

    return (
        <div className="map">
            <ReactMapGL
                {...viewport}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                mapStyle="mapbox://styles/mapbox/streets-v10"
                onViewportChange={viewport => {
                    setViewport(viewport);
                }}
            >
                {parkDate.features.map(park => (
                    <Marker
                        key={park.properties.PARK_ID}
                        latitude={park.geometry.coordinates[1]}
                        longitude={park.geometry.coordinates[0]}
                    >
                        <button
                            className="marker-btn"
                            onClick={e => {
                                e.preventDefault();
                                setSelectedPark(park);
                            }}
                        >
                            <img src={latas} alt="Alimento no perecedero" />
                        </button>
                    </Marker>
                ))}

                {selectedPark ? (
                    <Popup
                        latitude={selectedPark.geometry.coordinates[1]}
                        longitude={selectedPark.geometry.coordinates[0]}
                        onClose={() => {
                            setSelectedPark(null);
                        }}
                    >
                        <div>
                            <h2>{selectedPark.properties.NAME}</h2>
                            <p>{selectedPark.properties.DESCRIPTIO}</p>
                        </div>
                    </Popup>
                ) : null}
            </ReactMapGL>
        </div>
    );

};
export default Mapbox;