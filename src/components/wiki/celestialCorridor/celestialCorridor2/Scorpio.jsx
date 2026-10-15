import CcBossHeader from "../BossHeader";
import '../ccBoss.css';
import bossImg from '../../../../content/images/celestialCorridor2/scorpio.png';
import MyContext from '../../../../context/MyContext';
import { useContext } from 'react';
import scorpio5 from '../../../../content/images/celestialCorridor2/scorpio5.png';
import scorpio4 from '../../../../content/images/celestialCorridor2/scorpio4.png';
import scorpio3 from '../../../../content/images/celestialCorridor2/scorpio3.png';
import scorpioMid from '../../../../content/images/celestialCorridor2/scorpioMid.jpg';


const Scorpio = () => {
    const { language } = useContext(MyContext);
    const teamComp= {healer:"Totem Master", debuffer:"NPC (LA / Rifle / Pala?)", dps1:'Blade Master', dps2:'Executioner / Druid', dps3:'Assassin / Berserker'}
    return (
        <div className="ccBossContainer">
            <CcBossHeader name='Scorpio' solo={false} dmg='Slash' comp={teamComp} img={bossImg}/>
            <div className="ccBossConcent">
                <ul className="ccBossMecha">
                    <li>
                        <h3>
                            {language === 'en' ? 'Boss mechanics :' : 'Méchanique du boss :'}
                        </h3>
                    </li>
                    <li>
                        <p>1. {language === 'en' ? "The boss will summon a scorpion every now and then, making the boss immune to any damages, kill it to continue fighting the boss. The summon will either be immune to physical or magical damages, it is possible to revert the immunity by using the NPC skill (5th)." : "Le boss va invoquer un scorpion de temps en temps qui le rendra immunisé aux dégâts, il faut le tuer pour continuer le combat. L'invocation sera immunisée contre les dégâts magiques ou physiques, pour changer l'immunité il faudra utiliser le 5ème sort du PNJ."}</p>
                    </li>
                    <li>
                        <img src={scorpio5} alt="scorpio5" />
                    </li>
                    <li>
                        <p>2. {language === 'en' ? "The NPC players in the party can some of the stackable debuffs from the PT using skill 3 and 4." : "Le PNJ du groupe peut retirer certains débuffs du groupe avec le skill 3 et 4."}</p>
                    </li>
                    <li>
                        <img src={scorpio4} alt="scorpio4" />
                    </li>
                    <li>
                        <img src={scorpio3} alt="scorpio3" />
                    </li>
                    <li>
                        <p>3. {language === 'en' ? "Starting at 50% HP, the center of the arena becomes a dead zone, staying in there too long gets you killed." : "À partir de 50% HP, le centre de la zone devient une deadzone, y rester vous tue."}</p>
                    </li>
                    <li>
                        <img src={scorpioMid} alt="scorpioMid" />
                    </li>
                    <li>
                        <p>4. {language === 'en' ? "A pillar will appear in the deadzone from time to time, you HAVE to kill it otherwise the party will get wiped. But make sure to get out right after that." : "Un pillier apparaitra de temps en temps dans la deadzone, il faudra le tuer aussi vite que possible sinon le groupe sera wipe. Mais n'oubliez pas de sortir de la zone après."}</p>
                    </li>
                    <li>
                        <h3>
                            Notes :
                        </h3>
                    </li>
                    <li>
                        <p>{language === 'en' ? "Scorpio can lower slash resistances by 40, having 40 to begin with should be enough, feel free to get more if your HP is on the lower end or if DPS is slow." : "Scorpio peut réduire les résis slash de 40, mais commencer le combat avec 40 de résis suffit normalement si vous avez assez d'HP et de DPS."}</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Scorpio;