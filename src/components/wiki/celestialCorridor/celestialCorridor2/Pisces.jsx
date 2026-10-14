import CcBossHeader from "../BossHeader";
import '../ccBoss.css';
import bossImg from '../../../../content/images/celestialCorridor2/pisces.jpg';


const Pisces = () => {
    const teamComp= {healer:"Totem Master / Life Worshipper", debuffer:"Paladin / Rifleteer", dps1:'Blade Master', dps2:'Executioner / Berserker', dps3:'Assassin / Berserker'}
    return (
        <div className="ccBossContainer">
            <CcBossHeader name='Pisces' solo={false} dmg='Holy / Ice' comp={teamComp} img={bossImg}/>
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
                        <p>{language === 'en' ? "Boss can lower Hole and Ice resistances by 40, it is recommended tà have at least 70 of these, and to overcap if needed." : "Pisces peut réduire les résistances Holy et Ice de 40, il est recommandé d'en avoir au moins 70, voir d'overcap au besoin."}</p>
                        <p>{language === 'en' ? "Pisces can put you and your mates to sleep, dodge the AOE with green FX !!!" : "Le boss peut vous dodo, il faut dodge l'AOE avec des FX verts !!!"}</p>
                    </li>
                </ul>
            </div>
        </div>  
    );
}

export default Pisces;