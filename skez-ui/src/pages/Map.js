// Where the map will be located
import React, { useState } from "react";
import "./App.css"

import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
    Annotation,
    ZoomableGroup
} from "react-simple-maps";

import ReactTooltip from "react-tooltip"

const geoURL =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";


function Map(){
    return(
        <div className="Map" style={{
            width: "100%",
            height: "100%",
            display:"flex",
            flexDirection:"column",
            justifyContent: "center",
            alignItems: "center"
        }}>

            <h1>Avalability Map</h1>
            <div style={{ width: "1400px", borderStyle: "double"}}>
                <ComposableMap data-tip="">
                    <Geographies geography={geoURL}>
                        {({geographies}) =>
                            geographies.map((geo) =>(
                                <Geography key={geo.rsmKey} geography={geo} />
                            ))
                        }
                    </Geographies>
                </ComposableMap>
            </div>
        </div>
    );
}
export default Map;