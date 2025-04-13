import React, {useEffect, useRef} from 'react'

const ScrollTracker = () => {
    const scrollPosition = useRef(0);
    useEffect(()=>{
        const handleScroll = ()=>{
            scrollPosition.current = window.scrollY;
            console.log("scrolled to:", scrollPosition.current);
        };
        window.addEventListener("scroll", handleScroll);
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
  return(
    
  
    <div style={{height: '200vh', padding: '20px'}}>
        <h2>Scroll down to see scroll position in console!</h2>
      
    </div>
  )
}

export default ScrollTracker
// ধাপ                                       	          ব্যাখ্যা
// scrollPosition = useRef(0)	                           স্ক্রল পজিশন রাখার জন্য একটা ref
// window.addEventListener('scroll', handleScroll)	       প্রতিবার স্ক্রল হলে function চলে
// scrollPosition.current = window.scrollY	               যেখানে স্ক্রল হয়েছে, সেটা আমরা রাখছি .current-এ
// কিন্তু component re-render হচ্ছে না	কারণ আমরা state ব্যবহার করছি না