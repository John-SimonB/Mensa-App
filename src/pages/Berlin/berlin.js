import React from 'react';
import {Button} from '../../components/Button/Button';
import { UniListeBerlin } from '../../helpers/UniListeBerlin';
import UniItem from '../../components/UniItem';
import { Link } from 'react-router-dom';
import '../../style/Uniliste.css';
import Kopf from '../../components/Header/Kopf';



function Berlin() {

    return (
      <div>
        <Kopf>Berlin</Kopf>
        <div className="Buttons">
          <div className="line">test</div>
          <Button className='BtnBerlin'
          type='button'
          buttonStyle='btn--Berlin'
          buttonSize='btn--large'>
            <h3 style={{textDecoration: "underline"}}>BERLIN</h3>
          </Button>

          <Link to='/potsdam'>
          <Button className='BtnBerlin'
          type='button'
          buttonStyle='btn--Potsdam'
          buttonSize='btn--large'>
            <h3>POTSDAM</h3>
          </Button>
          </Link>
        </div>


        <div className="BodyUni">
            {/* Liste der Unis wird hier ausgegeben und einzeln auf der Seite angezeigt */}
          <div className='uniListe'>
            {UniListeBerlin.map((uniItem, key) => {
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

export default Berlin
