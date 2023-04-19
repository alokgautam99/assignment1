import HeaderCss from "../src/styles/Header.module.css"

const Header = () => {
    return (
        <div className={HeaderCss.container}>
            <div className={HeaderCss.wrapper}>
                <div className={HeaderCss.name}>
                    Aloha
                </div>
                <div className={HeaderCss.rightWrapper}>
                    <div className={HeaderCss.navigation}>
                        <div className={HeaderCss.link}>
                            Home
                        </div>
                        <div className={HeaderCss.link}>
                            Surfing
                        </div>
                        <div className={HeaderCss.link}>
                            Hula
                        </div>
                        <div className={HeaderCss.link}>
                            Vulcano
                        </div>
                    </div>
                    <div className={HeaderCss.bookcta}>
                        <div className={HeaderCss.ctatext}>Book a trip</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;