import {useRouter} from 'next/router';
import Header from '../../../components/Header';
import HeaderMweb from '../../../components/HeaderMweb';
import HeaderText from '../../../components/HeaderText';
import IndexCss from '../../styles/Index.module.css';
import Footer from '../../../components/Footer';
import PlaceDetail from '../../../components/placeComp/placeDetail';
import Drawer from '../../../components/Drawer';
import { useEffect, useState } from 'react';
import useFetch from '../../../components/customHooks/fetcher';
import placeCss from '../../styles/Place.module.css'

const TravelPage = () => {
    const {query: {place}} = useRouter();
    const [hamburger, setHamburger] = useState(false);
    const [response, setResponse] = useState();
    useEffect(()=>{
    if(place){
      const data = useFetch({Endpoint:`v1/activities/${place}`});
      data.then((res)=>{setResponse(res)})
    }
    },[place])

    if(!response || !Object.keys(response).length){
        return null;
    }
    const {detail} = response;
    return (
        <>
            <HeaderMweb hamburger={hamburger}setHamburger={setHamburger}/>
            <div className={IndexCss.BackgroundWrapper}>
            <Header />
            <div className={IndexCss.TextContainer}>
                <HeaderText />
            </div>
            </div>
            <div className={placeCss.Container}>
                {detail ? <h1>Nothing here...</h1> : <PlaceDetail data={response} />}
            </div>
            <Footer />
            <Drawer hamburger={hamburger}setHamburger={setHamburger} />
        </>
    );
}

export default TravelPage;
