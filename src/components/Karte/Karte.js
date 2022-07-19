import React from 'react'
import {MapContainer, Marker, TileLayer, Popup} from 'react-leaflet';
import {geolocated} from 'react-geolocated';
import './Karte.css';
import L from 'leaflet';
import ME from './Mensch.png';
import Uni from './MarkerIconRot.png';
import { Link } from 'react-router-dom';
import {Button} from '../Button/Button';

const DEFAULT_LONGITUDE =13.404954;
const DEFAULT_LATITUDE =52.520008;


class Karte extends React.Component {
    
    state = {
        // BERLIN
        HTWTreskow: {
            lat: 52.493072,
            lng: 13.525246,
        },
        HU: {
            lat: 52.517883,
            lng: 13.393655,
        },
        HTWWilhelminenhof: {
            lat: 52.4550187,
            lng: 13.5253585,
        },
        FUII: {
            lat: 52.4521863,
            lng: 13.2894363,
        },
        FU2Pharmazie: {
            lat: 52.45864,
            lng: 13.30593,
        },
        FURechtswissenschaften: {
            lat: 52.4478323,
            lng: 13.2816338,
        },
        Charite: {
            lat: 52.478,
            lng: 13.31223,
        },
        HWRBadensche: {
            lat: 52.485607,
            lng: 13.3381344,
        },
        TUHardenberg: {
            lat: 52.5097479,
            lng: 13.3262225,
        },
        KHSWeisensee: {
            lat: 52.55804,
            lng: 13.4393999,
        },
        TUHerrenhaus: {
            lat: 52.4299794,
            lng: 13.237412,
        },
        HfSErnstBusch: {
            lat: 52.5320981,
            lng: 13.3839222,
        },
        HUNord: {
            lat: 52.52799,
            lng: 13.3818246,
        },
        HTLuxemburger: {
            lat: 52.544558,
            lng: 13.3545556,
        },
        HUOase: {
            lat: 52.4293844,
            lng: 13.5303101,
        },
        HfMCharlotten: {
            lat: 52.5134004,
            lng: 13.3911098,
        },
        FULankwitz: {
            lat: 52.4275018,
            lng: 13.3558306,
        },
        KHSSozialwesen: {
            lat: 52.5325083,
            lng: 13.3830262,
        },
        VEGGIE: {
            lat: 52.5097479,
            lng: 13.3262225,
        },
        TUMarch: {
            lat: 52.5165831,
            lng: 13.32359,
        },
        HUct: {
            lat: 52.5184517,
            lng: 13.3935844,
        },
        HWRAltFriedrichsfelde: {
            lat: 52.5085,
            lng: 13.5257792,
        },
        // POTSDAM
        UlfsCafe: {
            lat: 52.39329310108751,
            lng: 13.131183385848999,
        },
        Erfrischungshalle: {
            lat: 52.394975684614955,
            lng: 13.128699660301207,
        },
        BistroW: {
            lat: 52.3878775,
            lng: 13.1210205,
        },
        UPNeuenPalais: {
            lat: 52.399,
            lng: 13.01494,
        },
        UPGriebnitz: {
            lat: 52.39353534469226,
            lng: 13.127814531326294,
        },
        UPGolm: {
            lat: 52.40791044877864,
            lng: 12.978951930999754,
        },
        FHPotsdam: {
            lat: 52.41384306852332,
            lng: 13.051575422286987,
        },
    }


    MyIcon = L.icon({
        iconUrl: ME,
        iconSize: [60, 45],
        iconAnchor: [12.5, 41],
        popupAnchor: [18, -36]
    });
    
    UniIcon = L.icon({
        iconUrl: Uni,
        iconSize: [35, 40],
        iconAnchor: [12.5, 41],
        popupAnchor: [5.5, -30]
    })


    render (){
        const longitude = this.props.coords? this.props.coords.longitude: DEFAULT_LONGITUDE;
        const latitude = this.props.coords? this.props.coords.latitude: DEFAULT_LATITUDE;

        // BERLIN
        const HTWTreskow = [this.state.HTWTreskow.lat, this.state.HTWTreskow.lng];
        const HTWWilhelminenhof = [this.state.HTWWilhelminenhof.lat, this.state.HTWWilhelminenhof.lng];
        
        const HTLuxemburger = [this.state.HTLuxemburger.lat, this.state.HTLuxemburger.lng];

        const HU = [this.state.HU.lat, this.state.HU.lng];
        const HUct = [this.state.HUct.lat, this.state.HUct.lng];
        const HUOase = [this.state.HUOase.lat, this.state.HUOase.lng];
        const HUNord = [this.state.HUNord.lat, this.state.HUNord.lng];

        const FUII = [this.state.FUII.lat, this.state.FUII.lng];
        const FU2Pharmazie = [this.state.FU2Pharmazie.lat, this.state.FU2Pharmazie.lng];
        const FURechtswissenschaften = [this.state.FURechtswissenschaften.lat, this.state.FURechtswissenschaften.lng];
        const FULankwitz = [this.state.FULankwitz.lat, this.state.FULankwitz.lng];
        
        const TUHardenberg = [this.state.TUHardenberg.lat, this.state.TUHardenberg.lng];
        const TUHerrenhaus = [this.state.TUHerrenhaus.lat, this.state.TUHerrenhaus.lng];
        const TUMarch = [this.state.TUMarch.lat, this.state.TUMarch.lng];

        const KHSSozialwesen = [this.state.KHSSozialwesen.lat, this.state.KHSSozialwesen.lng];
        const KHSWeisensee = [this.state.KHSWeisensee.lat, this.state.KHSWeisensee.lng];

        const HWRBadensche = [this.state.HWRBadensche.lat, this.state.HWRBadensche.lng];
        const HWRAltFriedrichsfelde = [this.state.HWRAltFriedrichsfelde.lat, this.state.HWRAltFriedrichsfelde.lng];
        
        const VEGGIE = [this.state.VEGGIE.lat, this.state.VEGGIE.lng];
        const Charite = [this.state.Charite.lat, this.state.Charite.lng];
        const HfSErnstBusch = [this.state.HfSErnstBusch.lat, this.state.HfSErnstBusch.lng];
        const HfMCharlotten = [this.state.HfMCharlotten.lat, this.state.HfMCharlotten.lng];

        // POSTDAM
        const UlfsCafe = [this.state.UlfsCafe.lat, this.state.UlfsCafe.lng];
        const Erfrischungshalle = [this.state.Erfrischungshalle.lat, this.state.Erfrischungshalle.lng];
        const BistroW = [this.state.BistroW.lat, this.state.BistroW.lng];

        const UPNeuenPalais = [this.state.UPNeuenPalais.lat, this.state.UPNeuenPalais.lng];
        const UPGriebnitz = [this.state.UPGriebnitz.lat, this.state.UPGriebnitz.lng];
        const UPGolm = [this.state.UPGolm.lat, this.state.UPGolm.lng];

        const FHPotsdam = [this.state.FHPotsdam.lat, this.state.FHPotsdam.lng];


        return (
            <div className="Karte">
                <MapContainer center={[latitude, longitude]} zoom={12}>
                <TileLayer
                url="https://api.maptiler.com/maps/streets/256/{z}/{x}/{y}.png?key=ZVSIoVAaMvJ4lv2UJE9U"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                ></TileLayer>
                {
                    !this.props.coords?
                    <div className="loading">Die Karte läd...</div>
                    :
                    <Marker
                    position={[latitude, longitude]} icon={this.MyIcon}>
                        <Popup>
                            <h2>Du bist hier!</h2>
                        </Popup>
                    </Marker>
                }
                {/* BERLIN */}
                    <Marker
                    position={HTWTreskow} icon={this.UniIcon}>
                        <Popup>
                            <h2>Hochschule für Technik und Wirtschaft, Mensa - Treskowallee</h2>
                            <Link to='/berlin/HTW/30'><Button>Zum Speiseplan</Button></Link>
                        </Popup>
                    </Marker>
                    <Marker
                    position={HU} icon={this.UniIcon}>
                        <Popup>
                        <h2>Humboldt-Universität</h2>
                        <Link to='/berlin/HU/576'><Button>Zum Speiseplan</Button></Link>
                        </Popup>
                    </Marker>
                    <Marker
                    position={HTWWilhelminenhof} icon={this.UniIcon}>
                        <Popup>
                        <h2>Hochschule für Technik und Wirtschaft - Mensa Wilhelminenhof</h2>
                        <Link to='/berlin/HTW/24'><Button>Zum Speiseplan</Button></Link>
                        </Popup>
                    </Marker>
                    <Marker
                    position={FUII} icon={this.UniIcon}>
                        <Popup>
                        <h2>Technische Universität - Mensa Otto-von-Simson Str.</h2>
                        <Link to='/berlin/FU/27'><Button>Zum Speiseplan</Button></Link>
                        </Popup>
                    </Marker>
                    <Marker
                    position={FU2Pharmazie} icon={this.UniIcon}>
                        <Popup>
                        <h2>Freie Universität - Mensa Pharmazie</h2>
                        <Link to='/berlin/FU/21'><Button>Zum Speiseplan</Button></Link>
                        </Popup>
                    </Marker>
                    <Marker
                    position={FURechtswissenschaften} icon={this.UniIcon}>
                        <Popup>
                        <h2>Freie Universität - Backshop Rechtswissenschaften</h2>
                        <Link to='/berlin/FU/20'><Button>Zum Speiseplan</Button></Link>
                        </Popup>
                    </Marker>
                    <Marker
                    position={Charite} icon={this.UniIcon}>
                        <Popup>
                        <h2>Charité - Mensa, Zahnklinik</h2>
                        <Link to='/berlin/Charite/22'><Button>Zum Speiseplan</Button></Link>
                        </Popup>
                    </Marker>
                    <Marker
                    position={HWRBadensche} icon={this.UniIcon}>
                        <Popup>
                        <h2>Hochschule für Wirtschaft und Recht - Mensa Badensche Str.</h2>
                        <Link to='/berlin/HWR/29'><Button>Zum Speiseplan</Button></Link>
                        </Popup>
                    </Marker>
                    <Marker
                    position={TUHardenberg} icon={this.UniIcon}>
                        <Popup>
                        <h2>Technische Universität - Mensa Hardenberg Str.</h2>
                        <Link to='/berlin/TU/36'><Button>Zum Speiseplan</Button></Link>
                        </Popup>
                    </Marker>
                    <Marker
                    position={KHSWeisensee} icon={this.UniIcon}>
                        <Popup>
                        <h2>Katholische Hochschule Berlin - Mensa Weißensee</h2>
                        <Link to='/berlin/KHS/40'><Button>Zum Speiseplan</Button></Link>
                        </Popup>
                    </Marker>
                    <Marker
                    position={TUHerrenhaus} icon={this.UniIcon}>
                        <Popup>
                        <h2>Technische Universität - Mensa Herrenhaus Düppel</h2>
                        <Link to='/berlin/FU/42'><Button>Zum Speiseplan</Button></Link>
                        </Popup>
                    </Marker>
                    <Marker
                    position={HfSErnstBusch} icon={this.UniIcon}>
                        <Popup>
                        <h2>Hochschule für Schauspielkunst - Mensa Ernst Busch</h2>
                        <Link to='/berlin/HfS/47'><Button>Zum Speiseplan</Button></Link>
                        </Popup>
                    </Marker>
                    <Marker
                    position={HUNord} icon={this.UniIcon}>
                        <Popup>
                        <h2>Humboldt-Universität - Mensa Nord</h2>
                        <Link to='/berlin/HU/48'><Button>Zum Speiseplan</Button></Link>
                        </Popup>
                    </Marker>
                    <Marker
                    position={HTLuxemburger} icon={this.UniIcon}>
                        <Popup>
                        <h2>Hochschule für Technik - Mensa Luxemburger Str.</h2>
                        <Link to='/berlin/HfS/49'><Button>Zum Speiseplan</Button></Link>
                        </Popup>
                    </Marker>
                    <Marker
                    position={HUOase} icon={this.UniIcon}>
                        <Popup>
                        <h2>Humboldt-Universität - Mensa Oase Adlershof</h2>
                        <Link to='/berlin/HU/50'><Button>Zum Speiseplan</Button></Link>
                        </Popup>
                    </Marker>
                    <Marker
                    position={HfMCharlotten} icon={this.UniIcon}>
                        <Popup>
                        <h2>Hochschule für Musik - Mensa Charlotten Str.</h2>
                        <Link to='/berlin/HfM/51'><Button>Zum Speiseplan</Button></Link>
                        </Popup>
                    </Marker>
                    <Marker
                    position={FULankwitz} icon={this.UniIcon}>
                        <Popup>
                        <h2>Freie Universität - Mensa Lankwitz Str.</h2>
                        <Link to='/berlin/FU/52'><Button>Zum Speiseplan</Button></Link>
                        </Popup>
                    </Marker>
                    <Marker
                    position={KHSSozialwesen} icon={this.UniIcon}>
                        <Popup>
                        <h2>Katholische Hochschule - Mensa Sozialwesen</h2>
                        <Link to='/berlin/KHSB/54'><Button>Zum Speiseplan</Button></Link>
                        </Popup>
                    </Marker>
                    <Marker
                    position={VEGGIE} icon={this.UniIcon}>
                        <Popup>
                        <h2>Veggie Mensa Berlin - Vegane Mensa</h2>
                        <Link to='/berlin/TU/563'><Button>Zum Speiseplan</Button></Link>
                        </Popup>
                    </Marker>
                    <Marker
                    position={TUMarch} icon={this.UniIcon}>
                        <Popup>
                        <h2>Technische Universität - Mensa March Str.</h2>
                        <Link to='/berlin/TU/565'><Button>Zum Speiseplan</Button></Link>
                        </Popup>
                    </Marker>
                    <Marker
                    position={HUct} icon={this.UniIcon}>
                        <Popup>
                        <h2>Humboldt-Universität - Backshop "c.t."</h2>
                        <Link to='/berlin/HU/576'><Button>Zum Speiseplan</Button></Link>
                        </Popup>
                    </Marker>
                    <Marker
                    position={HWRAltFriedrichsfelde} icon={this.UniIcon}>
                        <Popup>
                        <h2>Hochschule für Wirtschaft - Backshop Alt-Friedrichsfelde</h2>
                        <Link to='/berlin/HWR/579'><Button>Zum Speiseplan</Button></Link>
                        </Popup>
                    </Marker>
                {/* POTSDAM */}
                <Marker
                    position={UlfsCafe} icon={this.UniIcon}>
                        <Popup>
                        <h2>HPI Cafeteria - Ulfs Cafe</h2>
                        <Link to='/potsdam/UP/112'><Button>Zum Speiseplan</Button></Link>
                        </Popup>
                    </Marker>
                    <Marker
                    position={Erfrischungshalle} icon={this.UniIcon}>
                        <Popup>
                        <h2>Erfrischungshalle</h2>
                        <Link to='/potsdam/UP/234'><Button>Zum Speiseplan</Button></Link>
                        </Popup>
                    </Marker>
                    <Marker
                    position={BistroW} icon={this.UniIcon}>
                        <Link to='/potsdam/FILMUNI/946'><Button>Zum Speiseplan</Button></Link>
                        <Popup>
                        <h2>Bistro W</h2>
                        </Popup>
                    </Marker>
                    <Marker
                    position={UPNeuenPalais} icon={this.UniIcon}>
                        <Popup>
                        <h2>Universität Potsdam - Mensa Am Neuen Palais</h2>
                        <Link to='/potsdam/UP/55'><Button>Zum Speiseplan</Button></Link>
                        </Popup>
                    </Marker>
                    <Marker
                    position={UPGriebnitz} icon={this.UniIcon}>
                        <Popup>
                        <h2>Universität Potsdam - Griebnitzsee</h2>
                        <Link to='/potsdam/UP/62'><Button>Zum Speiseplan</Button></Link>
                        </Popup>
                    </Marker>
                    <Marker
                    position={UPGolm} icon={this.UniIcon}>
                        <Popup>
                        <h2>Universität Potsdam - Golm</h2>
                        <Link to='/potsdam/UP/61'><Button>Zum Speiseplan</Button></Link>
                        </Popup>
                    </Marker>
                    <Marker
                    position={FHPotsdam} icon={this.UniIcon}>
                        <Popup>
                        <h2>Fachhochschule Potsdam - Mensa Kiepenheuerallee</h2>
                        <Link to='/potsdam/FHP/57'><Button>Zum Speiseplan</Button></Link>
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        )
    }
}  
export default geolocated ({
    positionOptions:{
        enableHighAccuracy: false
    },
    userDecisionTimeout: 10000
})(Karte)