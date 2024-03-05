"use client"

import { useState } from "react";

// https://codepen.io/zkhiro/pen/qBONzpY?editors=1010
// https://codepen.io/simoberny/pen/WMMqwL
 const PopularCard=()=> {
  //can use ref?
const [cardBodyClass, setBodyClass]= useState<string | null>(null);
  return (
    <div className="relative w-80 bg-white shadow-md rounded overflow-hidden">
    <div className="flex flex-col-reverse h-40 bg-cover bg-center transition-all duration-300 hover:h-72" style={{'backgroundImage': 'url("https://img1.ak.crunchyroll.com/i/spire4/5f9d50bdd044a1579c4cd4abd27052741578512245_full.jpg")',
    'backgroundPosition': 'center',
    'backgroundSize': 'cover'}}
    onMouseOver={()=>setBodyClass("hidden")}
    onMouseLeave={()=>setBodyClass(null)}
    >
      <h2 className="text-black text-2xl font-semibold py-2 px-4 bg-gradient-to-b from-transparent to-white">
        Keep Your Hands Off Eizouken!
      </h2>
    </div>
    <div className={`h-48 overflow-hidden transition duration-300 ${cardBodyClass}`}>
      <p className="text-sm text-gray-600">Adventure, Comedy • 2020</p>
      <h4 className="mt-0 mb-1">Episodes</h4>
      <ol className="list-none list-inside list-episodes">
        <li className="py-1">
          <div>
            <a href="#" className="block text-black hover:translate-x-2 transition-transform">
              <b className="text-sm mr-1">Ep. 1</b> The Greatest World!
            </a>
          </div>
        </li>
        <li className="py-1">
          <div>
            <a href="#" className="block text-black hover:translate-x-2 transition-transform">
              <b className="text-sm mr-1">Ep. 2</b> The Eizouken Takes the Stage!
            </a>
          </div>
        </li>
        <li className="py-1">
          <div>
            <a href="#" className="block text-black hover:translate-x-2 transition-transform">
              <b className="text-sm mr-1">Ep. 3</b> Let's Accomplish Something!
            </a>
          </div>
        </li>
        <li className="py-1">
          <div>
            <a href="#" className="block text-black hover:translate-x-2 transition-transform">
              <b className="text-sm mr-1">Ep. 4</b> Hold That Machete Tight!
            </a>
          </div>
        </li>
      </ol>
    </div>
    <a href="#" className="block text-orange-600 font-bold py-4 text-center card-link-footer transition duration-200 hover:text-white hover:bg-orange-600">See more episodes</a>
  </div>
  
  );
}

export default  PopularCard;