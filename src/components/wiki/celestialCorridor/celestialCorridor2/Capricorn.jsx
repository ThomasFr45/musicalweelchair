import CcBossHeader from "../BossHeader";
import '../ccBoss.css';
import MyContext from '../../../../context/MyContext';
import { useContext } from 'react';

const Capricorn = () => {
    const { language } = useContext(MyContext);
    const teamComp= {healer:"Totem Master", debuffer:"Shielder", dps1:'Assassin', dps2:'Druid', dps3:'Executioner / Asura / BM?'}
    const bossImg = 'https://placehold.co/600x400';
    return (
        <div className="ccBossContainer">
            <CcBossHeader name='Capricorn' solo={false} dmg='Slash' comp={teamComp} img={bossImg}/>
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
                        <p>{language === 'en' ? "Boss can lower slash resistances by 40, it is recommended to have at least 50." : "Le boss peut réduire les résistances slash de 40, il est recommandé d'en avoir au moins 50."}</p>
                    </li>
                    <li>
                        <p>{language === 'en' ? "Clones deal high damages and always hit twice at the same spot." : "Les clones font de gros dégâts et frappent toujours deyx fois au même emplacement."}</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Capricorn;