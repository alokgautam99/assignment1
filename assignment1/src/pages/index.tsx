import { useEffect, useState } from 'react';
import BottomWrapper from '../../components/BottomWrapper';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import HeaderMweb from '../../components/HeaderMweb';
import HeaderText from '../../components/HeaderText';
import Highlights from '../../components/Highlights';
import IndexCss from '../styles/Index.module.css';
import Drawer from '../../components/Drawer';

export default function Home() {

  const [hamburger, setHamburger] = useState(false);
  
  return (
    <>
    <HeaderMweb hamburger={hamburger}setHamburger={setHamburger}/>
    <div className={IndexCss.BackgroundWrapper}>
      <Header />
      <div className={IndexCss.TextContainer}>
        <HeaderText />
      </div>
    </div>
    <Highlights />
    <BottomWrapper />
    <Footer />
    <Drawer hamburger={hamburger}setHamburger={setHamburger} />
    </>
  )
}
