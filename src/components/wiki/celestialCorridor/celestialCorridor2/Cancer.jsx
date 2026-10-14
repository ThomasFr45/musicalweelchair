import CcBossHeader from "../BossHeader";
import '../ccBoss.css';
import MyContext from '../../../../context/MyContext';
import { useContext } from 'react';
import bossImg from '../../../../content/images/celestialCorridor2/cancer.png';

const Cancer = () => {
    const { language } = useContext(MyContext);
    const teamComp = { healer: "Totem Master", debuffer: "Paladin / DT / Annihilator", dps1: 'Annihilator', dps2: 'Lethal Arrow', dps3: 'Rifleteer' }
    return (
        <div className="ccBossContainer">
            <CcBossHeader name='Cancer' solo={false} dmg='Pierce' comp={teamComp} img={bossImg} />
            <div className="ccBossConcent">
                <ul className="ccBossMecha">
                    <li>
                        <h3>
                            {language === 'en' ? 'Boss mechanics :' : 'Méchanique du boss :'}
                        </h3>
                    </li>
                    <li>
                        <p>
                            {language === 'en' ? 'The boss will summon monsters regularly, making him immune to DMG while they are alive, you should pull them toward the healer who will place his Time Totem to clear them faster.' : "Le boss va régulièrement invoquer des monstres qui le rend immunisé aux dégâts, il faudra les attirer vers la healer pour qu'il place son Time Totem afin d'accélérer la clear."}
                        </p>
                    </li>
                    <li>
                        <p>
                            {language === 'en' ? 'At some point the boss will start shooting arrows toward someone, they stun and deal HUGE damage. Switching to a shield when targeted can help survive. It is recommended not to stack on each other, to avoid stunning others if targeted.' : "À partir d'un moment, le boss va tirer des flêches vers l'un d'entre vous. Elles font de GROS dégâts et stun, équiper un bouclier lorsque vous êtes la cible peut aider à survivre au besoin. Il est recommandé de ne pas vous coller les uns aux autres, afin de ne pas stun les autres si vous êtes la cible."}
                        </p>
                    </li>
                    <li>
                        <p>
                            {language === 'en' ? 'Around 50% hp, the boss will start "summoning" lava under you, dealing heavy damages. Depending on your HP, and how good the healer is, you might have to move to dodge it.' : 'En arrivant à 50% HP, le boss commencera à faire apparaître de la lave sous vos pieds. Elle influge de gros dégâts, en fonction de vos HP et de votre healeur il faudra peut-être en sortir.'}
                        </p>
                    </li>
                    <li>
                        <h3>
                            Notes :
                        </h3>
                    </li>
                    <li>
                        <p>
                            {language === 'en' ? 'You will need high ACC for this boss because of his 20% debuff.' : 'Il vous faudra une précision élevée pour ce boss à cause de son débuff de 20%.'}
                        </p>
                        <p>
                            {language === 'en' ? 'If you stand too close to the boss, your damage will be reduced by 20%.' : 'Si vous êtes trop proche du boss, vos dégâts seront réduits de 20%.'}
                        </p>
                        <p>
                            {language === 'en' ? "Boss can lower pierce resistances by 40, it would be recommended to have at the very least 50, and if possible to overcap (depending on how much HP you have)." : "Le boss peut baisser les résis pierce de 40, il est recommandé d'en avoir minimum 50, et si possible d'overcap (en fonction de vos HP)."}
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Cancer;