import React from 'react'
import spotify from "../assets/portfolio/Spotify.png"
import countries from "../assets/portfolio/contries.png"
import todo from "../assets/portfolio/todo.png"
import heyu from "../assets/portfolio/heyu.png"
import priva from "../assets/portfolio/priva.png"
import admin from "../assets/portfolio/Admin.png"

function Portfolio() {

   const portfolios = [
    {
        id:1,
        src: spotify,
        linkDemo: "https://acekinci.github.io/spotify-app/",
        linkCode: "https://github.com/acekinci/spotify-app"
    },
    {
        id:2,
        src: countries,
        linkDemo: "https://acekinci.github.io/countries-api/",
        linkCode: "https://github.com/acekinci/countries-api"
    },
    {
        id:3,
        src: todo,
        linkDemo: "https://acekinci.github.io/to-do-list-2/",
        linkCode: "https://github.com/acekinci/to-do-list-2"
    },
    {
        id:4,
        src: heyu,
        linkDemo: "https://acekinci.github.io/Heyu/",
        linkCode: "https://github.com/acekinci/Heyu"
    },
    {
        id:5,
        src: priva,
        linkDemo: "https://acekinci.github.io/Priva/",
        linkCode: "https://github.com/acekinci/Priva"
    },
    {
        id:6,
        src: admin,
        linkDemo: "https://acekinci.github.io/Admin-page/",
        linkCode: "https://github.com/acekinci/Admin-page"
    },
   ]

  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
      
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col w-full h-full'>
       <div className='pb-8 mt-48 items-center sm:items-start text-center sm:text-left'>
        <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
        <p className='py-6'>Check out some of my work right here</p>
       </div>

      
       <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-0 sm:px-12'>
       {
        portfolios.map(({id, src,linkDemo,linkCode}) => (
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
             <img src={src} alt="" className='rounded-md duration-300 hover:scale-105' />
             <div className='flex items-center justify-center'>
                 <button className='w-1/2 px-6 py-3 m-4 hover:scale-105'><a href={linkDemo}>Demo</a></button>
                 <button className='w-1/2 px-6 py-3 m-4 hover:scale-105'><a href={linkCode}>Code</a></button>
             </div>
            </div>
        ))
       }
       </div>
      </div>
    
    </div>
  )
}

export default Portfolio