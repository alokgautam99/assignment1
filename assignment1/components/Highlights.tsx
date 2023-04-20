import { useEffect, useState } from 'react';
import HighlightsCss from '../src/styles/Highlights.module.css';
import HighlightsCard from './HighlightsCard';
import useFetch from './customHooks/fetcher';

const Highlights = () => {
    const [response, setResponse] = useState();
    useEffect(()=>{
      const data = useFetch({Endpoint:'v1/highlights'});
      data.then((res)=>{setResponse(res)})
    },[])
  
    if(!response || !Object.keys(response).length){
        return null;
    }
    const {detail} = response;
    if(detail){
        return null;
    }

    return (
        <div className={HighlightsCss.container}>
            <div className={HighlightsCss.wrapper}>
                <div className={HighlightsCss.title}>
                    Highlights
                </div>
                <div className={HighlightsCss.cardwrapper}>
                    {response.map((item,index)=>{
                        return (
                            <HighlightsCard data={item} key={index}/>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Highlights;
