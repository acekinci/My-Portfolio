import React from 'react'
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg"
import installNode from "../assets/portfolio/installNode.jpg"
import navbar from "../assets/portfolio/navbar.jpg"
import reactParallax from "../assets/portfolio/reactParallax.jpg"
import reactSmooth from "../assets/portfolio/reactSmooth.jpg"
import reactWeather from "../assets/portfolio/reactWeather.jpg"

function Portfolio() {

   const portfolios = [
    {
        id:1,
        src: arrayDestruct,
        linkDemo: "https://acekinci.github.io/spotify-app/",
        linkCode: "https://github.com/acekinci/spotify-app"
    },
    {
        id:2,
        src: installNode,
        linkDemo: "https://acekinci.github.io/countries-api/",
        linkCode: "https://github.com/acekinci/countries-api"
    },
    {
        id:3,
        src: navbar,
        linkDemo: "https://acekinci.github.io/countries-api/",
        linkCode: "https://github.com/acekinci/countries-api"
    },
    {
        id:4,
        src: reactParallax,
        linkDemo: "https://acekinci.github.io/countries-api/",
        linkCode: "https://github.com/acekinci/countries-api"
    },
    {
        id:5,
        src: reactSmooth,
        linkDemo: "https://acekinci.github.io/countries-api/",
        linkCode: "https://github.com/acekinci/countries-api"
    },
    {
        id:6,
        src: reactWeather,
        linkDemo: "https://acekinci.github.io/countries-api/",
        linkCode: "https://github.com/acekinci/countries-api"
    },
   ]

  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
      
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col w-full h-full'>
       <div className='pb-8'>
        <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
        <p className='py-6'>Check out some of my work right here</p>
       </div>

      
       <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
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