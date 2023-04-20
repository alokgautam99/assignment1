import HeaderMwebCss from '../src/styles/HeaderMweb.module.css';
import { useRouter } from 'next/router';

const HeaderMweb = ({hamburger, setHamburger}) => {
    const router = useRouter();
    return (
        <div className={HeaderMwebCss.container}>
            <div className={HeaderMwebCss.logo} onClick={()=>{router.push('/','/')}}/>
            <div className={HeaderMwebCss.hamburger} onClick={()=>{setHamburger(true)}} />
        </div>
    );
}

export default HeaderMweb;
