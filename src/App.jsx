import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";

const App = () => {
  const [showContent, setShowContent] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  useGSAP(() => {
    if(!showContent){
      return;
    }

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: -1,
      ease: "Expo.easeInOut"
    })

    gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: -0.8,
      ease: "Expo.easeInOut"
    })

    gsap.to(".character", {
      scale: 0.72,
      x: "-35%",
      bottom: "-95%",
      rotate: 0,
      duration: 2,
      delay: -0.7,
      ease: "Expo.easeInOut"
    })

    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: -0.8,
      ease: "Expo.easeInOut"
    })


    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", {
        x: `${xMove * 0.4}%`,
      });
      gsap.to(".sk", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove * 1.7,
      });
    });
  }, [showContent]);

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
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
              </g>
            </mask>
          </defs>
          <image
            href="./bg_building.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className="main w-full rotate-[-10deg] scale-[1.7]">
          <div className="landing w-full h-screen bg-black relative overflow-hidden">
            <div className="navbar absolute w-full py-10 px-10 z-10">
              <div className="logo flex gap-7">
                <div className="lines flex flex-col gap-1">
                  <div className="line w-8 h-1 bg-white"></div>
                  <div className="line w-5 h-1 bg-white"></div>
                </div>
                <h3 className="text-4xl -mt-2 leading-none  text-white">
                  Rockstar
                </h3>
              </div>
            </div>

            <div className="imagesdiv relative w-full h-screen overflow-hidden">
              <img
                className="absolute sk top-0 left-0 scale-[1.7] rotate-[-20deg] w-full h-full object-cover "
                src="./bg_sky.png"
                alt="Sky Image"
              />

              <img
                className="bg absolute scale-[1.8]  rotate-[-5deg] top-0 left-0 w-full h-full object-cover"
                src="./bg_building.png"
                alt="Background Image"
              />

              <div className="text flex flex-col gap-2 text-white text-8xl absolute top-2 left-1/2 -translate-x-1/2 scale-[1.4] rotate-[-10deg]">
                <h1 className="-ml-32 leading-none">grand</h1>
                <h1 className="ml-20 leading-none">theft</h1>
                <h1 className="-ml-20 leading-none">auto</h1>
              </div>
              <img
                className="character absolute -bottom-[150%] scale-[3] rotate-[-25deg] left-1/2 -translate-x-1/2  "
                src="./bg_girl.png"
                alt="Girl Image"
              />
            </div>
            <div className="btmbar absolute bottom-0 left-0 w-full py-15 px-10  bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-4 items-center text-white">
                <i className="text-2xl ri-arrow-down-line"></i>
                <h3 className="text-xl montserrat">Scroll Down</h3>
              </div>
              <img
                className="absolute top-1/2 left-1/2 -translate-x-1/2 h-10"
                src="./ps5.png"
                alt="PS5 Banner"
              />
            </div>
          </div>

          <div className="w-full h-screen flex  items-center justify-center bg-black">
            <div className="cntr flex text-white w-full h-[80%] ">
              <div className="limg relative w-1/2 h-full" >
                <img 
                className="absolute top-10 "
                src="./girl_imag.png" alt="Animated Girl" />
              </div>
              <div className="rimg w-[30%]">
                <h1 className="text-6xl">Rule the streets...</h1>
                <h1 className="text-6xl">Rewrite the chaos</h1>
                <p className="mt-8 text-[16px] montserrat">Take control of a city on the edge, where every move reshapes the underworld. Command respect, defy the odds, and forge your own legacy.</p>
                <p className="mt-4 text-[16px] montserrat">The city deserves balance, not destruction. Stand against the chaos, restore justice, and bring order where recklessness once ruled. It’s time to build, not break.</p>
                <p className="mt-4 text-[16px] montserrat">The city never sleeps, and neither do its players. Hustle through a world of power, betrayal, and untamed streets—where every choice fuels your rise or seals your fate.</p>
               <a href="https://www.rockstargames.com/VI" target="_blank">
               <button className="bg-lime-500 p-6 mt-5 text-xl text-black rounded-sm hover:bg-lime-600 hover:cursor-pointer">Download Now </button>
               </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
