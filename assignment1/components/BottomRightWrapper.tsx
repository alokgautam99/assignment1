import BottomRightWrapperCss from '../src/styles/BottomRightWrapper.module.css';
import BottomRightCard from './BottomRightCard';

const BottomRightWrapper = () => {
    return (
        <div className={BottomRightWrapperCss.container}>
            <div className={BottomRightWrapperCss.title}>
                Travel Guide
            </div>
            <BottomRightCard />
        </div>
    );
}

export default BottomRightWrapper;