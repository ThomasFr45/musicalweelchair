import ccPic from "../../../content/images/celestialCorridor/celestialCorridor.png";
import { Link } from "react-router-dom";
import MyContext from '../../../context/MyContext';
import { useState, useContext } from 'react';
import './celestialCorridor.css';
import testShit from '../../../content/testShit';

const CelestialCorridor = () => {
    const { language } = useContext(MyContext);
    const localTime = new Date();
        const serverTimeZone = "Canada/Eastern"
        const serverTime = new Intl.DateTimeFormat('en-US', {
            timeZone: serverTimeZone,
            dateStyle: 'full',
            timeStyle: 'full',
        }).format(localTime)
        const day = serverTime.split(',')[0];
        const [ selected, setSelected ] = useState(day);
        const handleDaySelection = (clickedDay) => {
            setSelected(clickedDay);
            return;
        };
    return(
        <div>
            <div className='weekContainer'>
                <div className={selected === 'Monday' ? 'weekDaySelected' : 'weekDay'} onClick={() => {
                    handleDaySelection("Monday")
                }}>Monday</div>
                <div className={selected === 'Tuesday' ? 'weekDaySelected' : 'weekDay'} onClick={() => {
                    handleDaySelection("Tuesday")
                }}>Tuesday</div>
                <div className={selected === 'Wednesday' ? 'weekDaySelected' : 'weekDay'} onClick={() => {
                    handleDaySelection("Wednesday")
                }}>Wednesday</div>
                <div className="disabledDay">Thursday</div>
                <div className={selected === 'Friday' ? 'weekDaySelected' : 'weekDay'} onClick={() => {
                    handleDaySelection("Friday")
                }}>Friday</div>
                <div className={selected === 'Saturday' ? 'weekDaySelected' : 'weekDay'} onClick={() => {
                    handleDaySelection("Saturday")
                }}>Saturday</div>
                <div className={selected === 'Sunday' ? 'weekDaySelected' : 'weekDay'} onClick={() => {
                    handleDaySelection("Sunday")
                }}>Sunday</div>
            </div>
            <div className='dayInfos'>
                {selected === 'Thursday' ? language === 'en' ? 'There is no opened bosses today.' : "Aucun boss ouvert aujourd'hui." : <h3>
                    {language === 'en' ? <p className='dayInfosSentence'>Today the following bosses are open :</p> : <p className='dayInfosSentence'>Voici les boss du jour :</p>}
                    {testShit[selected].split('\n').map(boss => {
                        console.log(boss)
                    return(
                            <div className='dayInfosBoss'>
                                <p><Link to={boss}>{boss}</Link></p>
                            </div>
                    )
                })}
                {language === 'en' ? <p className='dayInfosSentence2'>Click on the names for more infos.</p> : <p className='dayInfosSentence2'>Cliquez sur les noms pour plus d'infos.</p>}
                </h3>}
            </div>
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