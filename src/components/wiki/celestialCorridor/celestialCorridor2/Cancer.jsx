import CcBossHeader from "../BossHeader";
import '../ccBoss.css';
import MyContext from '../../../../context/MyContext';
import { useContext } from 'react';

const Cancer = () => {
    const { language } = useContext(MyContext);
    const teamComp = { healer: "Totem Master", debuffer: "Paladin / DT / Annihilator", dps1: 'Annihilator', dps2: 'Celestial Arrow', dps3: 'Rifleteer' }
    const bossImg = 'https://placehold.co/600x400';
    return (
        <div className="ccBossContainer">
            <CcBossHeader name='Cancer' solo={false} dmg='Pierce' comp={teamComp} img={bossImg} />
            <div className="ccBossConcent">
                <ul className="ccBossMecha">
                    <li>
                        <h4>
                            {language === 'en' ? 'Usefull informations :' : 'Informations utiles :'}
                        </h4>
                        <p>
                            {language === 'en' ? 'You will need high ACC for this boss because of his 20% debuff.' : 'Il vous faudra une précision élevée pour ce boss à cause de son débuff de 20%.'}
                        </p>
                        <p>
                            {language === 'en' ? 'If you stand too close to the boss, your damage will be reduced by 20%.' : 'Si vous êtes trop proche du boss, vos dégâts seront réduits de 20%.'}
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Cancer;