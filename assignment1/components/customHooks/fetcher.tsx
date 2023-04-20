
const host = 'https://web-dev.dev.kimo.ai/';

const useFetch = async ({Endpoint}) => {
    try {
        const res = await fetch(`${host}${Endpoint}`);
        const data = await res.json();
        return data;
    }catch (error){
        console.log(error);
    }
}

export default useFetch;
