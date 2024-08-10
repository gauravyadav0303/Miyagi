import { motion } from "framer-motion";
import { styles } from "../styles";
import { box1, box4 } from "../assets";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Power1 } from "gsap";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function StorageBanner() {
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
        className="box box2 absolute top-[3vh] right-[100px] xl:top-[15vh] xl:right-[10.47px] rotate-[-40.33]"
        src={box4}
        alt="box4"
      /> */}

      <div className={` mx-auto ${styles.paddingX}`}>
        <div>
          <h1
            className={`${styles.heroHead2Text}  text-white uppercase text-center`}
          >
            <span className="text-black">
            WE ARE <span className="text-[#9F32B2]">{"<"}LOGO{">"}</span> <br/> Our strengths
            </span>
          </h1>
        </div>
      </div>

      <div
        className={`mt-[40px] w-full md:max-w-[44rem]  lg:max-w-6xl mx-auto ${styles.paddingX} flex flex-row items-start`}
      >
        <div className=" mx-auto flex flex-col gap-6 text-center">
        <div className="text-[#807E87] text-[0.95rem] md:text-[1.1rem] font-normal leading-6 md:leading-7 ">
            The functioning of each organization is based on various types of processes. By analyzing them, we select appropriate tools, simplifying their implementation, and thus reducing the costs.
            </div>{" "}
            <div className="text-[#807E87] text-[0.95rem] md:text-[1.1rem] font-normal leading-6 md:leading-7 ">
            Our mission is to offer a full spectrum of business support services. We offer accounting and consulting. For us, work is a passion, only with this sense we can develop and provide services at the highest level.
            </div>{" "}
            <div className="text-[#807E87] text-[0.95rem] md:text-[1.1rem] font-normal leading-6 md:leading-7 ">
            We put emphasis on understanding the needs and business of customers, thanks to which the scope of our services is as individual as possible. In this way, we maximize the efficiency of our work and ensure a high level of customer satisfaction. We are available and open to questions from customers. We are committed to work, and we implement new projects with enthusiasm. Customer satisfaction is our goal.
            </div>{" "}
          </div>
        </div>
    </section>
  );
}

export default StorageBanner;
