import React from 'react'

// Aufbau eines einzelnen "UniItems" mit Bild und Namen der Uni in einem Kasten
function UniItem({ image, name }) {
    return (
        <div className='uniItem'>
           <div style={{ backgroundImage: `url(${image})` }}> </div>
            <h2> {name} </h2>
        </div>
    );
}

export default UniItem;
