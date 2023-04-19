import BottomLeftWrapperCss from '../src/styles/BottomLeftWrapper.module.css';
import BottomLeftCard from './BottomLeftCard';

const BottomLeftWrapper = () => {
    return (
        <div className={BottomLeftWrapperCss.container}>
            <div className={BottomLeftWrapperCss.title}>
                Categories
            </div>
            <div className={BottomLeftWrapperCss.cardWrapper}>
                <BottomLeftCard />
                <BottomLeftCard />
                <BottomLeftCard />
            </div>
        </div>
    );
}

export default BottomLeftWrapper;