import React from 'react'

function About() {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'> 
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>

            <p className='text-xl mt-20'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut quia aliquid ullam, modi consequuntur sequi a consequatur. Quis tenetur doloremque sunt odio, deserunt, dignissimos sit aperiam asperiores harum provident laborum accusantium officiis labore ea minus dolores quia nisi ut nesciunt. Deserunt illo optio molestiae consequatur numquam eos in error commodi!
            </p>

            <br />

            <p className='text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In suscipit reiciendis aperiam cumque atque non et quia vero nulla facere nam eum, ipsam porro minima delectus necessitatibus modi facilis tempora quo voluptatibus. Sunt praesentium similique facilis labore a beatae? Recusandae laboriosam vel vitae modi commodi minima excepturi ipsum et veniam.
            </p>
             
        </div>
    </div>
  )
}

export default About