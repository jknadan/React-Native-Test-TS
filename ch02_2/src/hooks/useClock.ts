import {useState,useEffect} from "react";

export const useClock = () => {
    const [time,setTime] = useState(new Date());
    useEffect(()=>{
        console.log("렌더링?")
        const id = setInterval(()=>{
            setTime(new Date());
        },1000)
        return () => clearInterval(id);
    },[])

    return time
}

