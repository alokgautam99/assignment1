import { useEffect, useState } from 'react';
import BottomLeftWrapperCss from '../src/styles/BottomLeftWrapper.module.css';
import BottomLeftCard from './BottomLeftCard';
import { categoriesObj } from './utils';
import useFetch from './customHooks/fetcher';

const BottomLeftWrapper = () => {
    const [response, setResponse] = useState();
    useEffect(()=>{
      const data = useFetch({Endpoint:'v1/categories'});
      data.then((res)=>{setResponse(res)})
    },[])
  
    if(!response || !Object.keys(response).length){
      setResponse(categoriesObj);
    }
    if(!response || !Object.keys(response).length){
        return null;
    }
    console.log(categoriesObj);
    return (
        <div className={BottomLeftWrapperCss.container}>
            <div className={BottomLeftWrapperCss.title}>
                Categories
            </div>
            <div className={BottomLeftWrapperCss.cardWrapper}>
                {response.map((item,index)=>{
                    return (
                        <BottomLeftCard data={item} key={index}/>
                    );
                })}
            </div>
        </div>
    );
}

export default BottomLeftWrapper;