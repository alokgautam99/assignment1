import HighlightsCardCss from '../src/styles/HighlightsCard.module.css';

const HighlightsCard = () => {
    return (
        <div className={HighlightsCardCss.container}>
            <div className={HighlightsCardCss.image}>
            </div>
            <div className={HighlightsCardCss.infowrapper}>
                <div className={HighlightsCardCss.wrapper}>
                    <div className={HighlightsCardCss.title}>
                        Surfing
                    </div>
                    <div className={HighlightsCardCss.desc}>
                        Volcanic conditions can change at any time. Volcanic conditions can change time.
                    </div>
                </div>
                <div className={HighlightsCardCss.arrowWrapper}>
                    <div className={HighlightsCardCss.arrowContainer}>
                        <div className={HighlightsCardCss.arrow}>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HighlightsCard;