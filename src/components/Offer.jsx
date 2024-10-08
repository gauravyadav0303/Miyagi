import { styles } from "../styles";
import { Offer4, Offer5, Offer6, Image1 } from "../assets";
import { motion } from "framer-motion";
import { box1, box9 } from "../assets";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Power1 } from "gsap";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

gsap.registerPlugin(ScrollTrigger);

function Offer() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1024);
  const [activeBox, setActiveBox] = useState(1);

  useEffect(() => {
    const details = gsap.utils.toArray(
      ".desktopContentSection:not(:first-child)"
    );
    const photos = gsap.utils.toArray(".desktopPhoto:not(:first-child)");

    gsap.set(photos, { yPercent: 101 });

    let mm = gsap.matchMedia();

    mm.add("(min-width: 600px)", () => {
      console.log("desktop");

      gsap.to(".desktopContentSection", {
        scrollTrigger: {
          trigger: ".gallery",
          pin: true,
          start: "top top",
          end: "bottom bottom",
          endTrigger: ".last",
          scrub: 1,
        },
        y: "-350%",
        ease: Power1,
      });
    });
    const updateActiveBox = () => {
      const scrollPosition = window.scrollY + window.innerHeight*3.4;
      const boxIndex = Math.floor(scrollPosition / window.innerHeight) - 4;
      setActiveBox(boxIndex);
    };

    window.addEventListener("scroll", updateActiveBox);

    // gsap.to(".box8", {
    //   scrollTrigger: {
    //     trigger: ".trigger2",
    //     start: "top top",
    //     scrub: 1,
    //   },
    //   x: -500,
    //   y: 200,
    //   z: 200,
    //   ease: Power1,
    //   duration: 2,
    // });

    // gsap.to(".box9", {
    //   scrollTrigger: {
    //     trigger: ".trigger2",
    //     start: "top top",
    //     scrub: 1,
    //   },
    //   x: 300,
    //   y: 200,
    //   z: 200,
    //   ease: Power1,
    //   duration: 2,
    // });

    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", updateActiveBox);
    };
  }, []);

  if (!isLargeScreen) {
    return null;
  }

  return (
    <section className={`trigger2 w-full relative min-h-[100vh] mx-auto`}>
      {/* <motion.img
        className="box box8 absolute top-[10vh] left-[0px] rotate-[-40.33]  hidden md:inline-block"
        src={box1}
        alt="box"
      />
      <motion.img
        className="box box9 absolute top-[60vh] right-[0px] rotate-[-40.33]"
        src={box9}
        alt="box"
      /> */}

      <div className="mt-[50px] md:mt-[100px]">
        <h1
          className={`${styles.heroHeadText}  text-white uppercase text-center`}
        >
          <span className="text-black">
            What does <span className="text-[#9F32B2]">{"<"} We {">"}</span> have to 
             offer?
          </span>
        </h1>
      </div>

      <div
        className={`mt-[50px] md:mt-[100px] xl:mt-[100px] w-full mx-auto xl:pl-[10rem] xl:pr-[10rem] pb-[0rem]`}
      >
        <div className="gallery">
          <div className="right">
            <div className="desktopPhotos  ">
              <div className="desktopPhoto red">
                <div
                  className={`border-2 mt-4 p-4 leading-6 tracking-wide ${
                    activeBox === 1 ? "active-box" : ""
                  } rounded-[20px]`}
                >
                  <h1 className="text-[#9F32B2] text-[22px] mb-4">
                  Managing Micro-Finances
                  </h1>
                  <p className="text-[#807E87] text-[0.95rem]">
                  We manage all your recurring bills—from utilities to subscriptions—ensuring they're paid on time, every time. No more missed payments or late fees; we handle it all, so you don't have to.
                  </p>
                </div>

                <div
                  className={`border-2 mt-8 p-4 leading-6 tracking-wide ${
                    activeBox === 2 ? "active-box" : ""
                  } rounded-[20px]`}
                >
                  <h1 className="text-[#9F32B2] text-[22px] mb-4">
                  Personalized Financial Solutions
                  </h1>
                  <p className="text-[#807E87] text-[0.95rem]">
                  Our services are customized to fit your specific requirements. Whether it's managing multiple accounts or handling complex payment schedules, we provide a solution that's as unique as your financial situation.
                  </p>
                </div>

                <div
                  className={`border-2 mt-8 p-4 leading-6 tracking-wide ${
                    activeBox === 3 ? "active-box" : ""
                  } rounded-[20px]`}
                >
                  <h1 className="text-[#9F32B2] text-[22px] mb-4">
                  Real-Time Tracking
                  </h1>
                  <p className="text-[#807E87] text-[0.95rem]">
                  We automate your bill payments and provide a centralized hub where all your payment receipts are stored. Review and track every transaction in real-time, ensuring you have full visibility and control over your finances.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="left">
            <motion.div className="desktopContent" ref={ref}>
              {inView && (
                <motion.div className="desktopContentSection">
                  {activeBox === 1 && (
                    <motion.img
                      src={Offer6}
                      alt=""
                      className="img img1 rounded-[20px]"
                      initial={{
                        opacity: 0,
                      }}
                      animate={{ opacity: inView ? 1 : 0 }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  )}
                </motion.div>
              )}
              {inView && (
                <motion.div className="desktopContentSection">
                  {activeBox === 2 && (
                    <motion.img
                      src={Offer4}
                      alt=""
                      className="img img2 rounded-[20px]"
                      initial={{
                        opacity: 0,
                      }}
                      animate={{ opacity: inView ? 1 : 0 }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  )}
                </motion.div>
              )}
              {inView && (
                <motion.div className="desktopContentSection last">
                  {activeBox === 3 && (
                    <motion.img
                      src={Offer5}
                      alt=""
                      className="img img3 last rounded-[20px] "
                      initial={{
                        opacity: 0,
                      }}
                      animate={{ opacity: inView ? 1 : 0 }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  )}
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>

        {/* <div className="right w-full mt-[4rem] h-[65vh] overflow-auto ">
          
          <img src={Offer1} alt="" className="img1 h-full rounded-[20px]" />
          <img
            src={Offer2}
            alt=""
            className="img2 rounded-[20px] md:mt-[6rem] h-full lg:mt-[3.5rem]"
          />
          <img
            src={Offer3}
            alt=""
            className="img3 last rounded-[20px] md:mt-[6rem] md:mb-[3rem] h-full lg:mt-[3.5rem]"
          />
        </div> */}
      </div>
    </section>
  );
}

export default Offer;
