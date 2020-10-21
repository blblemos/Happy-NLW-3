import React from 'react';
import {Link} from 'react-router-dom';
import{FiPlus, FiArrowRight} from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import mapMarckerImg from '../images/map-marker.svg';
import mapIcon from '../utils/mapIcons';


import '../styles/pages/orphanages-map.css';


function OrphanagesMap(){
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarckerImg} alt="HAPPY" />

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita </p>
                </header>

                <footer>
                    <strong>Irecê </strong>
                    <span>Bahia</span>
                </footer>
            </aside>

            <Map 
                center={[-11.3071073,-41.8677124]}
                zoom={15}
                style={{width: '100%' , height: '100%'}}
            >
                <TileLayer url="http://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                <Marker 
                    icon={mapIcon}
                    position={[-11.3071073,-41.8677124]}
                >
                    <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                        Lar das Meninas
                        <Link to="/orphanages/1"> <FiArrowRight size={20} color="#FFF"/></Link>
                    </Popup>
                </Marker>
            </Map>    

            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={32} color="FFF" />
            </Link>
        </div>
    );
}

export default OrphanagesMap;