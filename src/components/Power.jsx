import { styles } from "../styles";
import { hand1, hand2, hand3 } from "../assets";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { box13 } from "../assets";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Power1 } from "gsap";
import { useEffect, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

function Power() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setImagesLoaded(true);

      // Here you can add additional animations or actions
      // after both images are loaded.
      // For example, you can unpin the viewport.
       gsap.to(".trigger1", { scrollTrigger: { pin: true } });
    };

    const loadImages = () => {
      const image2 = new Image();
      image2.src = hand2;
      image2.onload = handleLoad;

      const image3 = new Image();
      image3.src = hand3;
      image3.onload = handleLoad;
    };

    loadImages();

    // gsap.to(".box6", {
    //   scrollTrigger: {
    //     trigger: ".trigger1",
    //     start: "top top",
    //     scrub: 1,
    //   },
    //   x: 300,
    //   y: 200,
    //   ease: "power1.inOut",
    //   duration: 2,
    // });

    // gsap.to(".box7", {
    //   scrollTrigger: {
    //     trigger: ".trigger1",
    //     start: "top top",
    //     scrub: 1,
    //   },
    //   x: 600,
    //   y: 200,
    //   ease: "power1.inOut",
    //   duration: 2,
    // });
  }, []);

  return (
    <section
      className={`trigger1 power w-full relative min-h-[80vh] md:min-h-[90vh] mx-auto`}
      ref={ref}
    >
      {/* <motion.img
        className="box box7 absolute top-[80vh] right-[10vw] xl:top-[75vh] xl:right-[20vw] rotate-[-40.33] hidden md:inline-block"
        src={box13}
        alt="box"
      /> */}

      <div className={`w-full flex flex-col md:flex-row justify-between`}>
        <div className="relative w-full flex flex-col items-center md:w-[60%] h-[20rem] md:h-full lg:h-full xl:w-[40%]">
          {inView && (
            <motion.img
              src={hand2}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 2,
                delay: 1,
                ease: [0.25, 1, 0.3, 1],
              }}
              className="hand2 md:mt-[5rem] lg:mt-[0rem] absolute md:left-[-3px] xl:left-[-6px] h-[30vh] md:h-[34vh] lg:h-[68vh] xl:h-[76vh]"
              alt=""
            />
          )}
          {inView && (
            <motion.img
              src={hand3}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 2,
                delay: 2,
                ease: [0.25, 1, 0.3, 1],
              }}
              className="hand3 md:mt-[5rem] lg:mt-[0rem]  absolute md:left-0 h-[35vh] md:h-[40vh] lg:h-[80vh] xl:h-[90vh]"
              alt=""
            />
          )}
        </div>

        <div className="pb-[50px] xl:mr-[0rem] lg:pt-[50px] lg:pb-[50px] xl:pt-[120px] xl:pb-[120px] w-full lg:w-[55%] flex flex-col justify-between lg:flex-row items-center">
          <div className="w-[85%] md:p-6 text-center md:text-left">
            <h1 className="w-full text-[1.7rem] uppercase font-normal">
              “Simplify Your Finances, Maximize Your Time.”
            </h1>
            <div className="flex flex-col gap-10">
              <p className="w-full text-[#807E87] text-[1rem] capitalize font-normal mt-4 leading-7 tracking-wide">
                {"<"}Whether it’s ensuring every transaction is effortlessly managed or giving you a singular view of all your financial commitments, we handle it all—and that’s just the beginning.{">"}
              </p>
              <p className="w-full text-[#807E87] text-[1rem] capitalize font-normal leading-7 tracking-wide">
              Just as <span className="text-[#9F32B2]">Satoshi</span> envisioned a decentralized financial revolution with Bitcoin, we at <span className="text-[#9F32B2]">LOGO</span> aim to revolutionize how you navigate your financial life. By embracing automation and transparency, we’re crafting a future where managing your finances is not just easy, but empowering—reshaping the landscape with the same transformative spirit that <span className="text-[#9F32B2]">Satoshi</span> brought to the world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Power;