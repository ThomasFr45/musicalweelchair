import './todayContent.css';
import { useState, useContext } from 'react';
import myContext from '../../context/MyContext';
import { Link } from "react-router-dom";

const todayContent = (items) => {
    const { language } = useContext(myContext);
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
    return (
        <div>
            <div className='weekContainer'>
                <div className={items.content["Monday"] === 'N/A' ? 'disabledDay' : selected === 'Monday' ? 'weekDaySelected' : 'weekDay'} onClick={items.content["Monday"] === 'N/A' ? '' : () => {
                    handleDaySelection("Monday")
                }}>Monday</div>
                <div className={items.content["Tuesday"] === 'N/A' ? 'disabledDay' : selected === 'Tuesday' ? 'weekDaySelected' : 'weekDay'} onClick={items.content["Tuesday"] === 'N/A' ? '' : () => {
                    handleDaySelection("Tuesday")
                }}>Tuesday</div>
                <div className={items.content["Wednesday"] === 'N/A' ? 'disabledDay' : selected === 'Wednesday' ? 'weekDaySelected' : 'weekDay'} onClick={items.content["Wednesday"] === 'N/A' ? '' : () => {
                    handleDaySelection("Wednesday")
                }}>Wednesday</div>
                <div className={items.content["Thursday"] === 'N/A' ? 'disabledDay' : selected === 'Thursday' ? 'weekDaySelected' : 'weekDay'} onClick={items.content["Thursday"] === 'N/A' ? '' : () => {
                    handleDaySelection("Thursday")
                }}>Thursday</div>
                <div className={items.content["Friday"] === 'N/A' ? 'disabledDay' : selected === 'Friday' ? 'weekDaySelected' : 'weekDay'} onClick={items.content["Friday"] === 'N/A' ? '' : () => {
                    handleDaySelection("Friday")
                }}>Friday</div>
                <div className={items.content["Saturday"] === 'N/A' ? 'disabledDay' : selected === 'Saturday' ? 'weekDaySelected' : 'weekDay'} onClick={items.content["Saturday"] === 'N/A' ? '' : () => {
                    handleDaySelection("Saturday")
                }}>Saturday</div>
                <div className={items.content["Sunday"] === 'N/A' ? 'disabledDay' : selected === 'Sunday' ? 'weekDaySelected' : 'weekDay'} onClick={items.content["Sunday"] === 'N/A' ? '' : () => {
                    handleDaySelection("Sunday")
                }}>Sunday</div>
            </div>
            <div className='dayInfos'>
                {items.content[selected] === 'N/A' ? language === 'en' ? 'There is no opened bosses today.' : "Aucun boss ouvert aujourd'hui." : <h3>
                    <p className='dayInfosSentence'>Today the following bosses are open :</p>
                    {items.content[selected].split('\n').map(boss => {
                    return(
                        <div className='dayInfosBoss'>
                            <p><Link to={boss}>{boss}</Link></p>
                        </div>
                    )
                })}
                </h3>}
            </div>
        </div>
    )
};
// weekDaySelected
export default todayContent;