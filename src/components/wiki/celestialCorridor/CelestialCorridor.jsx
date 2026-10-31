import ccPic from "../../../content/images/celestialCorridor/celestialCorridor.png";
import MyContext from '../../../context/MyContext';
import {  useContext } from 'react';
import './celestialCorridor.css';
import celestialCorridor from '../../../content/testShit';
import TodayContent from '../TodayContent';

const CelestialCorridor = () => {
    const { language } = useContext(MyContext);
    return(
        <div>
            <TodayContent content={celestialCorridor}/>
            <div className='dungeonPresentation'>
                <img src={ccPic} alt="ccPic1" className="dungeonPic" />
                {language === "en" ? (
          <p>
            Players can enter Celestial Corridor once they get to Lvl 117,
            however it is highly recommended that you reach at LEAST lvl 120,
            and get some decent gears before attempting it {`(keep in mind that the second part of CC requires you to be level 127 to get inside)`}. The entrance of
            Celestial Corridor is in Aven X: 430, Y: 369. <br /> Celestial
            Corridor contains 12 dungeons, each dungeons having it's own boss,
            and mechanic. They are meant to be challenged by a party of five
            geared players. <br /> You have 3 hours to kill the boss before
            getting kicked out of the dungeon, and in order to get an S+ and get
            your rewards, you need to kill the boss in less than 20 minutes.
          </p>
        ) : (
          <p>
            Celestial Corridor est disponible à partir du niveau 117. Cependant
            il est recommandé d'être au MINIMUM niveau 120, avec de bons
            équipements avant d'y entrer {`Notez qu'il faudra être niveau 127 minimum pour accéder à la deuxième partie de CC`}. L'entrée de la zone se trouve à Aven
            X:430, Y;369. <br /> Celestial Corridor contient 12 donjons. Chacun
            d'entre eux à un boss et une méchanique différente. Ces donjons sont
            prévus pour des groupes de 5 joueurs. <br /> Comme pour Gate of
            Pandemonium, vous avez 3h maximum pour vaincre le boss, après quoi
            vous serez expulsé du donjon. Notez cependant que pour avoir des
            récompenses, il faut tuer le boss en moins de 20 minutes.
          </p>
        )}
            </div>
        </div>
    );
};

export default CelestialCorridor;