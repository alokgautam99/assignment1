import {useRouter} from 'next/router';
import Header from '../../../components/Header';
import HeaderMweb from '../../../components/HeaderMweb';
import HeaderText from '../../../components/HeaderText';
import IndexCss from '../../styles/Index.module.css';
import Footer from '../../../components/Footer';
import PlaceDetail from '../../../components/placeComp/placeDetail';
import Drawer from '../../../components/Drawer';
import { useEffect, useState } from 'react';
import { activitiesObj } from '../../../components/utils';
import useFetch from '../../../components/customHooks/fetcher';
import placeCss from '../../styles/Place.module.css'
import Image from 'next/image';

const TravelPage = () => {
    const {query: {place}} = useRouter();
    const [hamburger, setHamburger] = useState(false);
    const [response, setResponse] = useState();
    useEffect(()=>{
      const data = useFetch({Endpoint:`v1/activities/${place}`});
      data.then((res)=>{setResponse(res)})
    },[])
  
    if(!response || !Object.keys(response).length){
      setResponse(activitiesObj);
    }
    if(!response || !Object.keys(response).length){
        return null;
    }
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
                <PlaceDetail data={response} />
            </div>
            <Drawer hamburger={hamburger}setHamburger={setHamburger} />
        </>
    );
}

export default TravelPage;