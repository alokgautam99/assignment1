import BottomCss from '../src/styles/BottomWrapper.module.css';
import BottomLeftWrapper from './BottomLeftWrapper';
import BottomRightWrapper from './BottomRightWrapper';

const BottomWrapper = () => {
    return (
        <div className={BottomCss.container}>
            <div className={BottomCss.wrapper}>
                <BottomLeftWrapper />
                <BottomRightWrapper />
            </div>
        </div>
    );
}

export default BottomWrapper;