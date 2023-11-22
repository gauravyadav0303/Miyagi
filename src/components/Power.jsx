import { styles } from "../styles";
import { hand1, hand2, hand3 } from "../assets";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { box13 } from "../assets";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Power1 } from "gsap";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function Power() {

    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.2,
      });
    

  useEffect(() => {
    gsap.to(".box6", {
      scrollTrigger: {
        trigger: ".trigger1",
        start: "top top",
        scrub: 1,
      },
      x: 300,
      y: 200,
      ease: Power1,
      duration: 2,
    });

    gsap.to(".box7", {
      scrollTrigger: {
        trigger: ".trigger1",
        start: "top top",
        scrub: 1,
      },
      x: 600,
      y: 200,
      ease: Power1,
      duration: 2,
    });
  }, []);

  return (
    <section
      className={`trigger1 power w-full relative min-h-[80vh]  md:min-h-[90vh] mx-auto`}
      ref={ref}
    >
      <motion.img
        className="box box7 absolute top-[80vh] right-[10vw] xl:top-[75vh] xl:right-[20vw] rotate-[-40.33]  hidden md:inline-block"
        src={box13}
        alt="box"
      />

      <div className={` w-full flex flex-col md:flex-row justify-between`}>
       
          <div className="relative w-full flex flex-col items-center md:w-[60%] h-[20rem] md:h-full lg:h-full xl:w-[40%]">
            {/* <img src={hand1} className="absolute hidden" alt="" /> */}
            {inView && (
            <motion.img
              src={hand2}
              initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01]
            }}
              className="hand2 md:mt-[5rem] lg:mt-[0rem] absolute md:left-[-3px] xl:left-[-6px] h-[30vh] md:h-[34vh] lg:h-[68vh] xl:h-[76vh]"
              alt=""
            />
             )}
             {inView && (
            <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 2,
              delay: 1.2,
              ease: [0, 0.71, 0.2, 1.01]
            }}
              src={hand3}
              className="hand3 md:mt-[5rem] lg:mt-[0rem]  absolute md:left-0 h-[35vh] md:h-[40vh] lg:h-[80vh] xl:h-[90vh]"
              alt=""
            />
             )}
          </div>
       
        
        <div className="pb-[50px] xl:mr-[0rem] lg:pt-[50px] lg:pb-[50px] xl:pt-[120px] xl:pb-[120px] w-full lg:w-[55%] flex flex-col justify-between lg:flex-row items-center">
          <div className="w-[85%] md:p-6 text-center md:text-left">
            <h1 className=" w-full text-[1.7rem] uppercase font-normal">
              “POWER TO THE PEOPLE”
            </h1>
            <div className="flex flex-col gap-10">
              <p className=" w-full text-[#807E87] text-[1rem] capitalize font-normal mt-4 leading-7 tracking-wide">
                {"<"}Whether it be having an easy-to-use{" "}
                <span className="text-[#5379FE]">Verification</span> and
                <span className="text-[#5379FE]">
                  {" "}
                  Timestamping platform for all your Documents
                </span>{" "}
                or the sheer simplicity of{" "}
                <span className="text-[#5379FE]">
                  Decentralised Data Storage,
                </span>{" "}
                we do it all and this is but the{" "}
                <span className="text-[#5379FE]">tip of ice berg</span> {">"}
              </p>
              <p className=" w-full text-[#807E87] text-[1rem] capitalize font-normal leading-7 tracking-wide">
                Just like <span className="text-[#5379FE]">Satoshi</span>{" "}
                envisioned Bitcoin taking over financial institutions by
                dreaming of a world which is{" "}
                <span className="text-[#5379FE]">fair</span> &
                <span className="text-[#5379FE]">democratised</span>, We at{" "}
                <span className="text-[#5379FE]">Miyagi</span> envision to
                create a similar level of disruption in the cloud storage
                ecosystem by leveraging the fundamentals of BLOCKCHAIN{" "}
                <span className="text-[#5379FE]">Blockchain Technology</span>{" "}
                and core principles of{" "}
                <span className="text-[#5379FE]">Satoshi’s philosophy</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Power;
