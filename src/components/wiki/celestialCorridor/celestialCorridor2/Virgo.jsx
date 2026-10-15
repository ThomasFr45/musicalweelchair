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
                        <p>1. {language === 'en' ? "Virgo will regularly cast a debuff on the party causing them high damages everytime they hit her, the healer should keep grace totem up or cleanse the party regurlarly" : "Virgo va régulièrement placer un débuff sur le groupe qui leur fait prendre de gros dégâts quand ils la tapent. Il faut que le healer maintienne son grace totem ou qu'il cleanse le groupe rapidement."}</p>
                    </li>
                    <li>
                        <p>2. {language === 'en' ? "She will cast a bombe on you just like Sagi, make sure to get away from your mates." : "Elle utilise des bombes comme Sagi, éloignez-vous des autres si vous avez le débuff."}</p>
                    </li>
                    <li>
                        <p>3. {language === 'en' ? "Starting at 50% HP, she will 2 summon clones from time to time, one takes reduced magical damages, the other takes reduced physical damages, is it recommended to use time totem on the one you kill the slowest (depending on team comp and gears)." : "À partir de 50% HP, elle va invoquer 2 clones, un prend des dégâts magiques réduits, et l'autre prend des dégâts physiques réduits, il est recommendé d'utiliser le time totem sur celui qui prend le plus de temps à tuer (dépend du la composition du groupe et du stuff)."}</p>
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