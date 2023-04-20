import { useEffect } from 'react';
import DrawerCss from '../src/styles/Drawer.module.css';
import { useRouter } from 'next/router';

const Drawer = ({hamburger = false, setHamburger}) => {
    const router = useRouter();
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
                        <div className={DrawerCss.link} onClick={()=>{router.push('/','/'); setHamburger(false);}} >
                            Home
                        </div>
                        <div className={DrawerCss.link} onClick={()=>{router.push('/details/Surfing','/details/Surfing'); setHamburger(false);}} >
                            Surfing
                        </div>
                        <div className={DrawerCss.link} onClick={()=>{router.push('/details/Hula','/details/Hula'); setHamburger(false);}}>
                            Hula
                        </div>
                        <div className={DrawerCss.link} onClick={()=>{router.push('/details/Volcanoes','/details/Volcanoes'); setHamburger(false);}}>
                            Volcanoes
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
