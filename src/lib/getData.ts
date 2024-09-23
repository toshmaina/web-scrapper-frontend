export const useGetData = async(url:string) =>{
        let error;
        const response = await fetch(url);
        if(!response.ok) error = response.statusText
        const data = await response.json();
       return { data,error}
}