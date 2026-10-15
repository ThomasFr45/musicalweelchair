import CcBossHeader from "../BossHeader";
import '../ccBoss.css';
import bossImg from '../../../../content/images/celestialCorridor2/pisces.jpg';
import MyContext from '../../../../context/MyContext';
import { useContext } from 'react';
import piscesInfo from "../../../../content/images/celestialCorridor2/piscesInfo.jpg";
import piscesStatue from "../../../../content/images/celestialCorridor2/piscesStatue.jpg";
import piscesText1 from "../../../../content/images/celestialCorridor2/piscesText1.jpg";
import piscesText2 from "../../../../content/images/celestialCorridor2/piscesText2.jpg";
import piscesText3 from "../../../../content/images/celestialCorridor2/piscesText3.jpg";



const Pisces = () => {
    const { language } = useContext(MyContext);
    const teamComp = { healer: "Totem Master / Life Worshipper", debuffer: "Paladin / Rifleteer", dps1: 'Blade Master', dps2: 'Executioner / Berserker', dps3: 'Assassin / Berserker' }
    return (
        <div className="ccBossContainer">
            <CcBossHeader name='Pisces' solo={false} dmg='Holy / Ice' comp={teamComp} img={bossImg} />
            <div className="ccBossConcent">
                <ul className="ccBossMecha">
                    <li>
                        <h3>
                            {language === 'en' ? 'Boss mechanics :' : 'Méchanique du boss :'}
                        </h3>
                    </li>
                    <li>
                        <p>
                            1.{" "}
                        {language === "en"
                            ? "There are different stages"
                            : 'Le donjon se déroule en plusieurs "étapes"'}{" "}
                        :
                        </p>
                    </li>
                    <li>
                        <img src={piscesInfo} alt="The Dark Swin Spirit" />
                    </li>
                    <li>
                        <p>2. {language === 'en' ? "There will be 2 statues that will appear in the room, you have to interact with them and talk to the correct one. One of them will have a correct statement." : "Il y aura 2 statues qui vont apparaître dans la salle, il faudra leur interagir avec et parler à la bonne. L'une des deux dira une vérité, il faudra lui 'parler.'"}</p>
                    </li>
                    <li>
                        <img src={piscesStatue} alt="statue" />
                    </li>
                    <li>
                        <p>
                            {language === 'en' ? "Here are some exemples :" : "Voici quelques exemples :"}
                        </p>
                    </li>
                    <li>
                        <img src={piscesText1} alt="1" />
                    </li>
                    <li>
                        <img src={piscesText2} alt="2" />
                    </li>
                    <li>
                        <img src={piscesText3} alt="3" />
                    </li>
                    <li>
                        <h3>
                            Notes :
                        </h3>
                    </li>
                    <li>
                        <p>{language === 'en' ? "Boss can lower Holy and Ice resistances by 40, it is recommended tà have at least 70 of these, and to overcap if needed." : "Pisces peut réduire les résistances Holy et Ice de 40, il est recommandé d'en avoir au moins 70, voir d'overcap au besoin."}</p>
                    </li>
                    <li>
                        <p>{language === 'en' ? "Pisces can put you and your mates to sleep, dodge the AOE with green FX !!!" : "Le boss peut vous dodo, il faut dodge l'AOE avec des FX verts !!!"}</p>
                    </li>
                    <li>
                        <p>{language === 'en' ? "You won't be able to damage the boss while the quiz is up." : "Impossible de faire des dégâts tant que le quiz est pas terminé."}</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Pisces;