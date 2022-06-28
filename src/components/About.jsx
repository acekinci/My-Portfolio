import React from 'react'

function About() {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'> 
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>

            <p className='text-xl mt-20'>
            My name is Ahmet, I was born in İstanbul in 2003. I have been working as a intern front-end developer for 1 years and I
            used, a lot of modern technologies during this time, such as HTML5, CSS3, Bootstrap, Tailwind Css, SCSS and LESS.
            Nowadays, I'm trying to improve my Javascript skills and learning about Loops, Arrays, Objects etc. And also I’m
            interested in React. Besides, I’m a quick learner and researcher, I know that I can find any information with google.
            </p>

            <br />
            <br />
            <br />

            <p className='text-xl'>
            Selamlar. 1 yılı aşkın süredir frontend alanında kendimi geliştirmekteyim. Bu süreçte HTML5, CSS3,  Responsive tasarım, Tailwind Css, SCSS,
             Bootstrap5’te iyi bir yol katettiğimi düşünüyorum. şu anda ise Javascript ve React öğrenmeye yoğun bir şekilde gayret etmekteyim. 
             Daha önce bir ajansta çalışma fırsatım oldu fakat çok fazla iş gelmediğinden yeteri kadar profesyonel tecrübe edinemedim.
             Bu sebeple kendimi daha çok geliştirebileceğim aynı zamanda katkı da sağlayabileceğim bir iş arayışım mevcut. </p>
             
        </div>
    </div>
  )
}

export default About