import React from 'react'
import Karte from '../components/Karte/Karte.js';
import '../style/karte.css';
import Kopf from '../components/Header/Kopf';

function karte() {

    

    return (
        <div className="Bodykarte">
            <Kopf>Karte</Kopf>
            <div className="Bubblekarte">
            <Karte></Karte>
            </div>
            <div className="Bubblekarte"></div>
            
        </div>
    )
}

export default karte
