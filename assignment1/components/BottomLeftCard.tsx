import { useState } from 'react';
import BottomLeftCardCss from '../src/styles/BottomLeftCard.module.css';

const BottomLeftCard = ({data}) => {
    const [openCard, setOpenCard] = useState(false);
    const {name, activities} = data;
const leftCardClicked = () => {
    setOpenCard(!openCard);
    if(openCard){
        document.getElementById(`${name}`).style.transform = "rotate(0deg)";
    }else{
        document.getElementById(`${name}`).style.transform = "rotate(90deg)";
    }
}

    return (
        <div className={BottomLeftCardCss.wrapper}>
            <div className={BottomLeftCardCss.container} onClick={leftCardClicked}>
                <div className={BottomLeftCardCss.title}>
                    {name}
                </div>
                <div className={BottomLeftCardCss.arrow} id={name} />
            </div>
            {openCard ? <div className={BottomLeftCardCss.detail}> 
            <ul>
                {activities.map((item,index)=>{
                    return (
                        <li key={index}>{item.title}</li>
                    );
                })}
            </ul>
                </div>
                : null}
        </div>
    );
}

export default BottomLeftCard;