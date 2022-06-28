import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from "react-icons/bs"

function SocialLinks() {

  const links = [
    {
        id:1,
        child: (
            <>
                Linkedin <FaLinkedin size={30} />
            </>
        ),
        href: "https://www.linkedin.com/in/ahmet-can-ekinci/",
        style: 'rounded-tr-md'
    },
    {
        id:2,
        child: (
            <>
                GitHub <FaGithub size={30} />
            </>
        ),
        href: "https://github.com/acekinci",
    },
    {
        id:3,
        child: (
            <>
                Mail <HiOutlineMail size={30} />
            </>
        ),
        href: "mailto:acekinci@hotmail.com",
    },
    {
        id:4,
        child: (
            <>
                Resume <BsFillPersonLinesFill size={30} />
            </>
        ),
        href: "/AhmetCanEkinci.pdf",
        style: 'rounded-br-md',
        download: true,
    },
  ]

  return (
    <div className='hidden flex-col top-[35%] left-0 fixed lg:flex'>
        <ul>

        {links.map(({id, child, href, style, download}) => (
           <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-gray-500 hover:ml-[-10px] hover:rounded-md duration-300" + " " + style}>
           <a 
           href={href}
           download={download}
           target='_blank'
           rel='noreffer'
           className="flex justify-between items-center w-full text-white">
             {child}
           </a>
         </li>
        ))}

 
        </ul>
    </div>
  )
}

export default SocialLinks