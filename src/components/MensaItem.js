import React from 'react'

// Aufbau eines einzelnen "MensaItems" mit Bild und Namen der Mensa in einem Kasten
function MensaItem({ image, name }) {
    return (
        <div className='mensaItem'>
           <div style={{ backgroundImage: `url(${image})` }}> </div>
            <h2> {name} </h2>
        </div>
    );
}

export default MensaItem;