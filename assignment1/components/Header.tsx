import { useRouter } from "next/router";
import HeaderCss from "../src/styles/Header.module.css"

const Header = () => {
    const router = useRouter();
    return (
        <div className={HeaderCss.container}>
            <div className={HeaderCss.wrapper}>
                <div className={HeaderCss.name} onClick={()=>{router.push('/','/')}}/>
                <div className={HeaderCss.rightWrapper}>
                    <div className={HeaderCss.navigation}>
                        <div className={HeaderCss.link} onClick={()=>{router.push('/','/')}}>
                            Home
                        </div>
                        <div className={HeaderCss.link} onClick={()=>{router.push('/details/Surfing','/details/Surfing')}}>
                            Surfing
                        </div>
                        <div className={HeaderCss.link} onClick={()=>{router.push('/details/Hula','/details/Hula')}}>
                            Hula
                        </div>
                        <div className={HeaderCss.link} onClick={()=>{router.push('/details/Volcanoes','/details/Volcanoes')}}>
                            Volcanoes
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
