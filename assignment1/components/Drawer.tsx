import { useEffect } from 'react';
import DrawerCss from '../src/styles/Drawer.module.css';

const Drawer = ({hamburger = false, setHamburger}) => {
    useEffect(()=>{
        if(hamburger){
            document.getElementById('sideNav').style.width = "365px";
        }else{
            document.getElementById('sideNav').style.width = "0";
        }
    },[hamburger]);
    return (
        <div className={DrawerCss.drawerContainer} id="sideNav">
            <div className={DrawerCss.crossWrapper}>
                <div className={DrawerCss.cross} onClick={() => {setHamburger(false)}} />
            </div>
            <div className={DrawerCss.navWrapper}>
                <div className={DrawerCss.rightWrapper}>
                    <div className={DrawerCss.navigation}>
                        <div className={DrawerCss.link}>
                            Home
                        </div>
                        <div className={DrawerCss.link}>
                            Surfing
                        </div>
                        <div className={DrawerCss.link}>
                            Hula
                        </div>
                        <div className={DrawerCss.link}>
                            Vulcano
                        </div>
                    </div>
                    <div className={DrawerCss.bookcta}>
                        <div className={DrawerCss.ctatext}>Book a trip</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Drawer;