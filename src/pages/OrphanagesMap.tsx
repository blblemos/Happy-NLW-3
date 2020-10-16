import React from 'react';
import {Link} from 'react-router-dom';
import{FiPlus} from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import mapMarckerImg from '../images/map-marker.svg';

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
            </Map>    

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="FFF" />
            </Link>
        </div>
    );
}

export default OrphanagesMap;