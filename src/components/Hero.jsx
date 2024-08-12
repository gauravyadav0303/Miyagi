import { motion } from "framer-motion";
import { styles } from "../styles";
import { box1, box2, box3, box4 } from "../assets";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Power1 } from "gsap";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  useEffect(() => {
    // gsap.to(".box1", {
    //   scrollTrigger: {
    //     trigger: ".trigger",
    //     start: "top top",
    //     scrub: 1,
    //   },
    //   x: -500,
    //   y: 200,

    //   ease: Power1,
    //   duration: 2,
    // });

    // gsap.to(".box2", {
    //   scrollTrigger: {
    //     trigger: ".trigger",
    //     start: "top top",
    //     scrub: 1,
    //   },
    //   x: -500,
    //   y: 200,

    //   ease: Power1,
    //   duration: 2,
    // });

    // gsap.to(".box3", {
    //   scrollTrigger: {
    //     trigger: ".trigger",
    //     start: "top top",
    //     scrub: 1,
    //   },
    //   x: 600,
    //   y: 200,

    //   ease: Power1,
    //   duration: 2,
    // });

    // gsap.to(".box4", {
    //   scrollTrigger: {
    //     trigger: ".trigger",
    //     start: "top top",
    //     scrub: 1,
    //   },
    //   x: 200,
    //   y: 200,

    //   ease: Power1,
    //   duration: 2,
    // });
  }, []);

  return (
    <section
      className={`trigger background relative w-full min-h-[100vh] pt-[270px] pb-[100px] md:pt-[270px] md:pb-[270px] md:min-h-[100vh] mx-auto `}
    >
      {/* <motion.img
        className="box box1 absolute top-[5vh] left-[0px] xl:top-[10vh] hidden md:inline-block xl:left-[0px] rotate-[-40.33]"
        src={box1}
        alt="box"
      />
      <motion.img
        className="box box2 absolute top-[75vh] left-[200.47px] hidden md:inline-block md:top-[75vh] md:left-[200.47px] rotate-[-40.33]"
        src={box2}
        alt="box"
      />

      <motion.img
        className="box box3 absolute top-[80vh] right-[0px] md:hidden  xl:inline-block  xl:top-[80vh] xl:right-[300.47px] rotate-[-40.33]"
        src={box3}
        alt="box"
      />

      <motion.img
        className="box box4 absolute top-[3vh] right-[100px] xl:top-[15vh] xl:right-[10.47px] rotate-[-40.33]"
        src={box4}
        alt="box4"
      /> */}

      <div className={` mx-auto ${styles.paddingX}`}>
        
          <h1
            className={`${styles.heroHead2Text}  text-white uppercase text-center`}
          >
            <span className="text-black">
              {"<"}Our <span className="text-[#9F32B2]">PHILOSOPHY</span>
              {">"}
            </span>
          </h1>
        
      </div>

      <div
        className={`mt-[40px] w-full md:max-w-[44rem]  lg:max-w-5xl mx-auto ${styles.paddingX} flex flex-row items-start`}
      >
        <div className=" mx-auto flex flex-col gap-[2rem]">
          <div className={`text-center ${styles.heroSubText}`}>
            {"<"}If we had to explain to{" "}
            <span className="text-[#9F32B2]">US</span> in the simplest of
            terms, We are a <br className="hidden lg:inline-block"/> company which gives the access of all your finances and micro-finances at one place.{">"}
          </div>
          <div className="text-center text-[#807E87] text-[1.1rem] font-normal leading-7 md:leading-7 ">
          In a world where the routine of life can drown out the melody of freedom, we strive to bring harmony to your financial rhythm. We offer a symphony of simplicity, where every transaction—from the mundane to the crucial—flows seamlessly, allowing you to reclaim your time and focus on what truly resonates. Much like a timeless song, our service is designed to lift the burden, so you can dance through life with ease and grace, free from the dissonance of everyday tasks.
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
