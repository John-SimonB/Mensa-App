import React from 'react'
import '../../style/Uniliste.css';
import { Button } from '../../components/Button/Button';
import { UniListePotsdam } from '../../helpers/UniListePotsdam';
import UniItem from '../../components/UniItem';
import { Link } from 'react-router-dom';
import Kopf from '../../components/Header/Kopf';



function potsdam() {
  return (
    <div>
      <Kopf>Potsdam</Kopf>
      <div className="Buttons">
        <div className="line">test</div>
        <Link to='/berlin'>
        <Button className='BtnBerlin'
        type='button'
        buttonStyle='btn--Berlin'
        buttonSize='btn--large'>
          <h3>BERLIN</h3>
        </Button>
        </Link>
        
        <Button className='BtnBerlin'
        type='button'
        buttonStyle='btn--Potsdam'
        buttonSize='btn--large'>
          <h3 style={{textDecoration: "underline"}}>POTSDAM</h3>
        </Button>
        
      </div>


      <div className="BodyUni">
          {/* Liste der Unis wird hier ausgegeben und einzeln auf der Seite angezeigt */}
        <div className='uniListe'>
          {UniListePotsdam.map((uniItem, key) => {
            return (
              <Link to = {uniItem.url} style={{color: "Black", textDecorationLine: "none"}}>
              <UniItem 
                key={key} //ist wichtig gegen Bugs
                image={uniItem.image} 
                name={uniItem.name}
                cName={uniItem.cName}
              />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default potsdam
