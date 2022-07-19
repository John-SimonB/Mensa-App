import React from 'react';
import {Button} from '../../../components/Button/Button';
import {KHSBMensen} from '../Mensen/KHSBMensen';
import MensaItem from '../../../components/MensaItem';
import { Link } from 'react-router-dom';
import '../../../style/MensaListe.css';
import Kopf from '../../../components/Header/Kopf';

function KHSB() {
  return ( 
  <div className="BodyMensa">
  <Kopf>KHSB</Kopf>
  <div className="Buttons">
  <div className="line">test</div>
      <Link to='/berlin'>
      <Button className='BtnBerlin'
      type='button'
      buttonStyle='btn--Berlin'
      buttonSize='btn--large'
      ><h3 style={{textDecoration: "underline"}}>BERLIN</h3>
      </Button>
      </Link>

      <Link to='/potsdam'>
      <Button className='BtnBerlin'
      type='button'
      buttonStyle='btn--Potsdam'
      buttonSize='btn--large'
      ><h3>POTSDAM</h3>
      </Button>
      </Link>


  </div>
      {/* Liste der Unis wird hier ausgegeben und einzeln auf der Seite angezeigt */}
    <div className='mensaListe'>
      {KHSBMensen.map((mensaItem, key) => {
        return (
          <Link to = {mensaItem.url} style={{color: "Black", textDecorationLine: "none"}}>
          <MensaItem 
            key={key} //ist wichtig gegen Bugs
            image={mensaItem.image} 
            name={mensaItem.name}
            url={mensaItem.url}
            cName={mensaItem.cName}
          />
          </Link>
        );
      })}
    </div>
  </div>
);
}


export default KHSB;
