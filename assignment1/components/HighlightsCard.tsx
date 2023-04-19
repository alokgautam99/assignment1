import HighlightsCardCss from '../src/styles/HighlightsCard.module.css';
import Image from 'next/image';

const HighlightsCard = ({data}) => {
    const {title,description,image} = data;
    return (
        <div className={HighlightsCardCss.container}>
            <div className={HighlightsCardCss.image}>
                <Image src={image} alt='icon' width={368} height={170} />
            </div>
            <div className={HighlightsCardCss.mwebImage}>
                <Image src={image} alt='icon' width={334} height={170} />
            </div>
            <div className={HighlightsCardCss.infowrapper}>
                <div className={HighlightsCardCss.wrapper}>
                    <div className={HighlightsCardCss.title}>
                        {title}
                    </div>
                    <div className={HighlightsCardCss.desc}>
                        {description}
                    </div>
                </div>
                <div className={HighlightsCardCss.arrowWrapper}>
                    <div className={HighlightsCardCss.arrowContainer}>
                        <div className={HighlightsCardCss.arrow} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HighlightsCard;