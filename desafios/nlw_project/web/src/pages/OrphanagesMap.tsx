import React from 'react'
import {Link} from 'react-router-dom'
import {FiPlus} from 'react-icons/fi'
import {Map, TileLayer} from 'react-leaflet';

import '../styles/pages/orphanages-map.css'
import 'leaflet/dist/leaflet.css'
import mapMarkerImg from '../images/mapmarker.svg'

function OrphanagesMap (){
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy"/>
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>
                <footer>
                    <strong>Ceará</strong>
                    <span>Fortaleza</span>
                </footer>
            </aside>
            
                <Map center={[-3.7228737,-38.5285909]}
                        zoom={17}
                        style={{width:'100%', height:'100%'}}
                >
                <TileLayer url = "https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                {/*<TileLayer url = {'https://api.mapbox.com/stylesv1/mapbox/lightv10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}'}
                />*/}
                </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF"/>
            </Link>
        </div>

    );
}

export default OrphanagesMap;