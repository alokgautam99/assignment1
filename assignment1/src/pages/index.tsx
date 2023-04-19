import BottomWrapper from '../../components/BottomWrapper';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import HeaderText from '../../components/HeaderText';
import Highlights from '../../components/Highlights';
import IndexCss from '../styles/Index.module.css';

export default function Home() {
  return (
    <>
    <div className={IndexCss.BackgroundWrapper}>
      <Header />
      <div className={IndexCss.TextContainer}>
        <HeaderText />
      </div>
    </div>
    <Highlights />
    <BottomWrapper />
    <Footer />
    </>
  )
}
