import CcBossHeader from "../BossHeader";
import '../ccBoss.css';
import bossImg from '../../../../content/images/celestialCorridor2/taurus.png';
import MyContext from '../../../../context/MyContext';
import { useContext } from 'react';


const Taurus = () => {
    const { language } = useContext(MyContext);
    const teamComp= {healer:"Totem Master", debuffer:"Wyvern / BP ?", dps1:'Demon Tamer', dps2:'Gravity Manipulator', dps3:'Druid'}
    return (
        <div className="ccBossContainer">
            <CcBossHeader name='Taurus' solo={false} dmg='Strike' comp={teamComp} img={bossImg}/>
            <div className="ccBossConcent">
                <ul className="ccBossMecha">
                    <li>
                        <h3>
                            {language === 'en' ? 'Boss mechanics :' : 'Méchanique du boss :'}
                        </h3>
                    </li>
                    <li>
                        <h3>
                            Notes :
                        </h3>
                    </li>
                    <li>
                        <p>{language === 'en' ? "Taurus can lower Strike resistances by 40, is it recommanded to have at the very least 50, overcap if possible." : "Taurus peut réduire les résis Strike de 40, il est recommandé d'en avoir au moins 50 et d'overcap si possible."}</p>
                    </li>
                    <li>
                        <p>{language === 'en' ? "If boss aggro is stuck on you, let other do the mechanics, running from healer might get you killed pretty fast" : "Si le boss reste en aggro sur vous, laissez les autres faire la mecha, s'éloigner du heal pourrait très vite vous faire mourir."}</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Taurus;