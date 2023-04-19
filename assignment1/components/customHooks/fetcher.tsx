
const host = 'https://jsonplaceholder.typicode.com/';

const useFetch = async ({Endpoint}) => {
    try {
        const res = await fetch(`${host}${Endpoint}`);
        const data = await res.json();
        return data;
    }catch (error){
        
    }
}

export default useFetch;