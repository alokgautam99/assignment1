import { useEffect } from 'react';
import HeaderMwebCss from '../src/styles/HeaderMweb.module.css';

const HeaderMweb = ({hamburger, setHamburger}) => {
    return (
        <div className={HeaderMwebCss.container}>
            <div className={HeaderMwebCss.logo}>
                Aloha
            </div>
            <div className={HeaderMwebCss.hamburger} onClick={()=>{setHamburger(true)}}>
            </div>
        </div>
    );
}

export default HeaderMweb;