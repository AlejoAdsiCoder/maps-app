import { useReducer } from "react";
import { Map, Marker, Popup } from "mapbox-gl";

import { MapContext } from "./MapContext";
import { MapReducer } from "./MapReducer";

// Definirse el estado
export interface MapState {
    isMapReady: boolean;
    map?: Map,
}

const INITIAL_STATE: MapState = {
    isMapReady: false,
    map: undefined
}

interface Props {
    children: JSX.Element | JSX.Element[];
}

export const MapProvider = ({children}:Props) => {

    const [state, dispatch] = useReducer(MapReducer, INITIAL_STATE)

    const setMap = (map: Map) => {

        const myLocationPopup = new Popup()
            .setHTML(`
                <h4>Aqui estoy</h4>
                <p>En algún lugar del mundo
            `)

        new Marker({
            color: '#61dafb'
        })
        .setLngLat( map.getCenter() )
        .setPopup(myLocationPopup)
        .addTo(map);
        dispatch({ type:'setMap', payload: map})
    }
    
  return (
    <MapContext.Provider value={{
        ...state,

        // methods
        setMap,
    }}>
        {children}
    </MapContext.Provider>
  )
}
