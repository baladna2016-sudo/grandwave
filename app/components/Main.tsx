"use client"
import { useState, useEffect } from "react";

export default function Main(){
 const images =[
    "https://picsum.photos/800/400?random=1",
    "https://picsum.photos/800/400?random=2",
    "https://picsum.photos/800/400?random=3",
 ];
 const [current, setCurrent] = useState(0);

 useEffect ( () => {
    const timer = setInterval(() => {
        setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
 }, [] );

 return(
    <main className="flex flex-col items-center justify-center p-10 text-center">
        <h1 className="text-4*l front-bold mb-4">ابدأ غير حياتك معانا</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2*1">احنا بنقدملك موقع احترافى سريع و متجاوب مع كل الأجهزة معمول ب Next.js عشان يكون أسرع من أى موقع ووردبريس</p>
    </main>
 )
    
}