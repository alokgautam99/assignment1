import BottomRightCardCss from '../src/styles/BottomRightCard.module.css';

const BottomRightCard = () => {
    return (
        <div className={BottomRightCardCss.container}>
            <div className={BottomRightCardCss.leftWrapper}>
                <div className={BottomRightCardCss.info}>
                    <div className={BottomRightCardCss.title}>
                        Hadwin Malone
                    </div>
                    <div className={BottomRightCardCss.desc}>
                        Guide since 2012
                    </div>
                </div>
                <div className={BottomRightCardCss.contact}>
                    <div className={BottomRightCardCss.text}>
                        Contact    
                    </div> 
                </div>
            </div>
            <div className={BottomRightCardCss.rightWrapper}>
                
            </div>
        </div>
    );
}

export default BottomRightCard;