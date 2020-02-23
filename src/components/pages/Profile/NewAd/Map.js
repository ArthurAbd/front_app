import React from 'react'
import { Map as LeafletMap, TileLayer, Marker } from 'react-leaflet'

const Map = ({changeMapCoord}) => {

    const [markerPos, setMarkerPos] = React.useState(null)

    const onClickHandler = ({latlng}) => {
        const markerPos = [latlng.lat, latlng.lng]
        setMarkerPos(markerPos)
        changeMapCoord(markerPos)
    }

    return (
        <LeafletMap style={{width: '100%', height: '400px', zIndex: '90'}}
            center={[55.75, 37.62]}
            zoom={12}
            maxZoom={18}
            zoomControl={true}
            animate={true}
            easeLinearity={0.35}
            onClick={onClickHandler}
        >
            <TileLayer
                url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            />
            {markerPos && <Marker position={markerPos} />}
        </LeafletMap>
    )
}


export default Map