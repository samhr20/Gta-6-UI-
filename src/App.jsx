import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
gsap.registerPlugin(ScrollTrigger);

function App() {

  const [showContent, setShowContent] = useState(false)

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to('#text', {
      rotate: 10,
      duration: 2,
      ease: 'power4.easeInOut',
      transformOrigin: '50% 50%'
    })
      .to('#text', {
        scale: 20,
        duration: 2,
        delay: -1.9,
        ease: 'Expo.easeInOut',
        transformOrigin: '50% 50%',
        opacity: 0,
        onUpdate: function () {
          if (this.progress() >= 0.9) {
            document.querySelector('#svg').remove()
            setShowContent(true)
            this.kill()
          }
        }
      })


  })

  useEffect(() => {

    if (showContent) {

      gsap.to('.main', {
        rotate: 0,
        scale: 1,
        duration: 3,
        delay: -1.2,
        ease: 'Expo.easeInOut'
      })
      gsap.to('.sky', {
        rotate: 0,
        scale: 1.3,
        duration: 3,
        delay: -1.2,
        ease: 'Expo.easeInOut'
      })
      gsap.to('.bg', {
        rotate: 0,
        scale: 1.3,
        duration: 3,
        delay: -1.2,
        ease: 'Expo.easeInOut'
      })
      gsap.matchMedia().add("(min-width: 640px)", () => {
        gsap.to('.character', {
          rotate: 5,
          bottom: '-455px',
          scale: '0.75',
          duration: 2,
          delay: -0.65,
          x: '-50%',
          ease: 'Expo.easeInOut',
        });
      });
      gsap.to('.text', {
        rotate: 0,
        scale: '1.2',
        duration: 2,
        delay: -0.65,
        ease: 'Expo.easeInOut',
      })
      gsap.to('.bottomBar', {
        opacity: 1,
        duration: 2,
        delay: -0.65,
        ease: 'Expo.easeInOut'
      })


      document.querySelector('.landing').addEventListener('mousemove', (e) => {
        const xaxis = (e.clientX / window.innerWidth - .5) * 40

        gsap.to('.text', {
          x: `${xaxis * 0.4}%`,
        })
        gsap.to('.sky', {
          x: `${xaxis * 0.2}%`,

        })
        gsap.to('.bg', {
          x: `${xaxis * 0.2}%`,

        })
      })
    }

    gsap.to('.downloadSection',{
      opacity:1,
      duration:1,
      scrollTrigger:{
        trigger:'.downloadSection',
        scroller:'body',
        start:'top 50%',
        end:'top -15%',
        scrub:4
      }

    })

  }, [showContent])



  return (
    <> 
    {/* LOADER */}
      <div id='svg' className='fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-black flex items-center justify-center'>
        <svg
          viewBox="0 0 1000 800"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <text
                id='text'
                x="50%"
                y="50%"
                fontSize="250"
                textAnchor="middle"
                fill="white"
                dominantBaseline="middle"
                fontFamily="Arial Black"
              >
                VI
              </text>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>

      </div>
      {/* MAIN CONTENT */}
      {showContent && (
        <div className=' main  w-full scale-[1.2] rotate-[-10deg]  '>
          {/* HERO SECTION */}
          <div className='landing w-full h-screen bg-black overflow-hidden relative '>
            {/* NAVBAR */}
            <div className='navbar absolute w-full z-10 text-white top-0 left-0 sm:px-10 sm:py-7 px-4 py-5 '>
              <div className='flex gap-2 sm:gap-7'>
                <div className='lines flex flex-col gap-1'>
                  <div className="line sm:h-[6px] h-[4px] w-[20px] bg-white sm:w-[25px]  "></div>
                  <div className="line sm:h-[6px] h-[4px] w-[15px] bg-white sm:w-[18px]  "></div>
                  <div className="line sm:h-[6px] h-[4px] w-[7px] bg-white sm:w-[10px] "></div>
                </div>
                <h3 className='sm:text-3xl text-2xl -mt-[9px] sm:-mt-[13px]'>ROCKSTAR</h3>
              </div>
            </div>
            {/* IMAGES */}
            <div className='imagesdiv w-full h-screen relative'>
              <img className='sky rotate-[-15deg] scale-[2]  absolute w-full top-0 left-0 h-screen object-cover' src="./sky.png" alt="" />
              <img className='bg  rotate-[-15deg] scale-[2] absolute w-full top-0 left-0 h-screen object-cover ' src="./bg.png" alt="" />
              <div className="text text-white flex flex-col sm:gap-3 absolute top-32 sm:top-20 left-[30%] sm:left-1/2  scale-[2] rotate-[-10deg] ">
                <h1 className="sm:text-8xl text-6xl leading-none sm:-ml-40">grand</h1>
                <h1 className="sm:text-8xl text-6xl leading-none  ml-16 sm:ml-20">theft</h1>
                <h1 className="sm:text-8xl text-6xl  leading-none sm:-ml-48">auto</h1>
              </div>
              <img className='character absolute scale-[0.9] sm:rotate-0 -bottom-[150px] sm:-bottom-[1055px]  sm:-scale-[1.5] left-[10%] sm:left-1/2 sm:-translate-x-1/2 ' src="./girlbg.png" alt="" />
            </div>
            {/* BOTTOM BAR */}
            <div className=' bottomBar opacity-0  text-white absolute bottom-0 left-0 w-full px-4 py-2 sm:px-10 sm:py-4 bg-gradient-to-t from-black to-transparent'>
              <div className='flex items-center  gap-2'>
                <i className="sm:text-3xl  ri-arrow-down-line"></i>
                <h3 className='sm:text-xl text-sm font-bold font-[poppins]'>Scroll </h3>
              </div>
              <img className='absolute bottom-1 h-[30px] right-2 sm:-bottom-[9px] sm:h-[35px] sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2' src="./ps5.png" alt="" />
            </div>
          </div>
          {/* SECOND SECTION */}
          <div className='downloadSection opacity-0 text-white h-screen relative py-9'>
            <div className='flex sm:flex-row flex-col items-center justify-center '>
              <img className=' scale-[0.85] sm:scale-[0.9] top-2.5' src="imag.png" alt="" />
              <div className='sm:px-18 px-6 py-6  sm:w-[40%] sm:py-16'>
                <h3 className='text-5xl sm:text-7xl'>STILL RUNNING , <br /> NOT HUNTING</h3>
                <p className='mt-7 font-[poppins] text-[10px] sm:text-[12px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque repellendus reiciendis itaque aspernatur illum ullam excepturi nemo ipsa est maiores nihil ea sed perferendis rerum aliquam, labore quas pariatur, quos adipisci culpa omnis. Non, eligendi!.</p>
                <p className='mt-3 font-[poppins] text-[10px] sm:text-[12px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque repellendus reiciendis itaque aspernatur illum ullam excepturi nemo ipsa est maiores nihil ea sed perferendis rerum aliquam, labore quas pariatur, quos adipisci culpa omnis. Non, eligendi!.</p>
                <button className='mt-6 sm:ml-2 bg-yellow-500 text-black   w-full sm:w-[75%] text-4xl p-2 rounded-sm'>Download now</button>
              </div>
            </div>
          </div>
        </div>

      )}
    </>

  )
}

export default App
