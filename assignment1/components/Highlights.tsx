import HighlightsCss from '../src/styles/Highlights.module.css';
import HighlightsCard from './HighlightsCard';
const Highlights = () => {
    return (
        <div className={HighlightsCss.container}>
            <div className={HighlightsCss.wrapper}>
                <div className={HighlightsCss.title}>
                    Highlights
                </div>
                <div className={HighlightsCss.cardwrapper}>
                    <HighlightsCard />
                    <HighlightsCard />
                    <HighlightsCard />
                </div>
            </div>
        </div>
    );
}

export default Highlights;