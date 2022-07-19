
import React from "react";
import Kopf from "../components/Header/Kopf";
import {BHTMensen} from './Berlin/Mensen/BHTMensen';
import {ChariteMensen} from './Berlin/Mensen/ChariteMensen';
import {FUMensen} from './Berlin/Mensen/FUMensen';
import {HTWMensen} from './Berlin/Mensen/HTWMensen';
import {HUMensen} from './Berlin/Mensen/HUMensen';
import {HWRMensen} from './Berlin/Mensen/HWRMensen';
import {HfMMensen} from './Berlin/Mensen/HfMMensen';
import {HfSMensen} from './Berlin/Mensen/HfSMensen';
import {KHSBMensen} from './Berlin/Mensen/KHSBMensen';
import {KHSMensen} from './Berlin/Mensen/KHSMensen';
import {TUMensen} from './Berlin/Mensen/TUMensen';
import {FHPMensen} from './Potsdam/Mensen/FHPMensen';
import {FilmuniMensen} from './Potsdam/Mensen/FilmuniMensen';
import {UPMensen} from './Potsdam/Mensen/UPMensen';


import {
  saveDataInIndexDB,
  getAllDataFromIndexDB,
} from "../components/indexDB/utility.js";


function Test() {
  //weirde Listen befüllung zur Linkausgabe
function getList(){
  var mensaItemList=[]
  for(var i=0;i<HTWMensen.length;i++)
  {
    mensaItemList.push(HTWMensen[i])
  }
  for( i=0;i<BHTMensen.length;i++)
  {
    mensaItemList.push(BHTMensen[i])
  }
  for( i=0;i<ChariteMensen.length;i++)
  {
    mensaItemList.push(ChariteMensen[i])
  }
  for( i=0;i<FHPMensen.length;i++)
  {
    mensaItemList.push(FHPMensen[i])
  }
  for( i=0;i<FUMensen.length;i++)
  {
    mensaItemList.push(FUMensen[i])
  }
  for( i=0;i<HUMensen.length;i++)
  {
    mensaItemList.push(HUMensen[i]) 
  }
  for( i=0;i<HWRMensen.length;i++)
  {
    mensaItemList.push(HWRMensen[i])
  }
  for( i=0;i<HfMMensen.length;i++)
  {
    mensaItemList.push(HfMMensen[i])
  }
  for( i=0;i<HfSMensen.length;i++)
  {
    mensaItemList.push(HfSMensen[i])
  }
  for( i=0;i<KHSBMensen.length;i++)
  {
    mensaItemList.push(KHSBMensen[i])
  }
  for( i=0;i<KHSMensen.length;i++)
  {
    mensaItemList.push(KHSMensen[i])
  }
  for( i=0;i<TUMensen.length;i++)
  {
    mensaItemList.push(TUMensen[i])
  }
  for( i=0;i<FilmuniMensen.length;i++)
  {
    mensaItemList.push(FilmuniMensen[i])
  }
  for( i=0;i<UPMensen.length;i++)
  {
    mensaItemList.push(UPMensen[i])
  }
  return mensaItemList
}

  //indexdb setup
  fetch("https://openmensa.org/api/v2/canteens")
    .then((response) => {
      if (response.status === 200) {
        console.log("Die Verbindung zur API war erfolgreich!");
        return response.json();
      } else {
        console.log("Es konnte keine Verbindung zur API hergestellt werden");
      }
    })
    .then((data) => {
      for (var mensa of data) {
        if (mensa.city === "Berlin" || mensa.city === "Potsdam") {
          saveDataInIndexDB(mensa);
        }
      }
      //get single Mensa
      // const getDataFromDB = async (id) => {
      //   let data = await getDataFromIndexDB(id);
      //   console.log(
      //     "Gewählte ID = " +
      //       id +
      //       " | Name der Mensa = " +
      //       data.mensa.name +
      //       " | Koordinaten = " +
      //       data.mensa.coordinates
      //   );
      //   document.getElementById("Ausgabesinglemensa").innerHTML =
      //     data.mensa.name;
      // };
      // console.log(getDataFromDB(30));

      //get all Mensa
      const getAllDataFromDB = async () => {
        let data = await getAllDataFromIndexDB();
        //links abholen
        var mensaItemList=getList();
    
        var ausgabediv = document.getElementById("Ausgabeallmensa");
        var html = "";
        for (var i = 0; i < data.length; i++) {
          //für jedes element in MensaItemliste
          for(var counter=0;counter<mensaItemList.length;counter++){
            if(data[i].id === mensaItemList[counter].id){
              html +=
              "<div classname='mensa' style={{color: 'black', backgroundColor: 'white'}}>" +
              "<a href='"+ mensaItemList[counter].url+"' style={{color: 'Black', textDecorationLine: 'none'}}>"+
              data[i].name +
              "<br/>" +
              data[i].address +
              "<br/>" +
              "<br/>" +
              "</a></div> "
              ;
            }
          }
        }

        ausgabediv.innerHTML = html;
      };

      console.log(getAllDataFromDB());
    })
    .catch((err) => console.log(err));

  return (
    <div>
      <Kopf>Mensa Übersicht</Kopf>
      <div className="BodyMensaLista" >
        <div className="grau" style={{backgroundColor:"#e5e5e5", height:"100px", width:"100%"}}/>
        <div classname="Info" style={{fontSize: "2.8vh", textAlign: "center", width: "80%", marginLeft: "10%"}}>
          Hier sind alle Mensen der App aufgelistet
          </div>
        <div className="ALLE" style={{textDecoration: "none", color:"black"}}>
        <div id="Ausgabeallmensa" style={{marginTop: "5vh", marginBottom: "10vh", fontSize: "2.1vh"}}/>
        </div>
      </div>
    </div>
  );
}

export default Test;
