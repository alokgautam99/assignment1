import HeaderTextCss from '../src/styles/HeaderText.module.css';

const HeaderText = () => {
    return (
        <div className={HeaderTextCss.container}>
            <div className={HeaderTextCss.welcome}>
                Welcome
            </div>
            <div className={HeaderTextCss.hawaii}>
                to Hawaii
            </div>
        </div>
    );
}

export default HeaderText;
