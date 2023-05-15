/*
 * src -->hook-->usetitle.js
 * import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title= `${title} - Dragon News`;
    },[title])
}
 export default useTitle;
 * 
 * and call from page: useTitle("Home");
 */ 

 