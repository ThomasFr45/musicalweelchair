import CcBossHeader from "../BossHeader";
import '../ccBoss.css';
import bossImg from '../../../../content/images/celestialCorridor2/virgo.png';
import MyContext from '../../../../context/MyContext';
import { useContext } from 'react';

const Virgo = () => {
    const { language } = useContext(MyContext);
    const teamComp= {healer:"Totem Master", debuffer:"Druid", dps1:'Blade Master', dps2:'Executioner / Rifleteer', dps3:'Assassin / Berserker'}
    return (
        <div className="ccBossContainer">
            <CcBossHeader name='Virgo' solo={false} dmg='Lightning / Dark' comp={teamComp} img={bossImg}/>
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
                        <p>{language === 'en' ? "Virgo can lower Lightning and Dark resistances by 40. it would be recommended to have at least 70 of those, and to overcap slightly if possible." : "Virgo peut réduire les résis Lightning et Dark de 40, il est recommandé d'en avoir au moins 70 et d'overcap légèrement si possible."}</p>
                        <p>{language === 'en' ? "Healer should place grace totem on boss and prepare to keep both time totems up on both clones when they are up if possible." : "Le healer doit placer son grace totem et si possible maintenir les deux time totems sur les emplacement des clones."}</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Virgo;