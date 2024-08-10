import { styles } from "../styles";
import { Image1 } from "../assets";
import { motion } from "framer-motion";
import { box1, box8, box13 } from "../assets";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Power1 } from "gsap";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger)




function AboutTwo() {

  useEffect(() =>{

    gsap.to(".box5",{
      scrollTrigger:{
        trigger:".trigger1",
        start: "top top",
        scrub:1,
      },
      x:-500,
      y: 200,
      ease:Power1,
      duration: 2
    })
    
    // gsap.to(".box6",{
    //   scrollTrigger:{
    //     trigger:".trigger1",
    //     start: "top top",
    //     scrub:1,
    //   },
    //   x:300,
    //   y: 200,
    //   ease:Power1,
    //   duration: 2
    // })
    
    
    // gsap.to(".box7",{
    //   scrollTrigger:{
    //     trigger:".trigger1",
    //     start: "top top",
    //     scrub:1,
    //   },
    //   x:600,
    //   y: 200,
    //   ease:Power1,
    //   duration: 2
    // })
    
    },[]);

  return (
    <section className={`trigger1 w-full relative min-h-[80vh]  md:min-h-[100vh] mx-auto bg-[]`}>
       {/* <motion.img className="box box5 absolute top-[3vh] left-[0px] xl:top-[10vh] xl:left-[0px] rotate-[-40.33]  hidden xl:inline-block"  
           
           src={box1} alt="box"/>
            <motion.img className="box box6 absolute top-[15vh] right-[0px] xl:top-[25vh] xl:right-[0px] rotate-[-40.33]  hidden md:inline-block"  
           
           src={box8} alt="box"/>
            <motion.img className="box box7 absolute top-[80vh] right-[10vw] xl:top-[80vh] xl:right-[20vw] rotate-[-40.33]  hidden md:inline-block"  
          
           src={box13} alt="box"/> */}
      <div
        className={`mt-[100px] max-w-7xl mx-auto ${styles.paddingX} items-start`}
      >
        <div>
          <h2
            className={`${styles.heroHeadText}  text-white uppercase text-center`}
          >
            <span className="text-black">One Service, All Your Payments Covered</span>
          </h2>
        </div>

        <div className=" flex flex-col justify-between mt-4 md:mt-[4rem] lg:flex-row items-center">
          <div className="image1  md:w-[50%] h-[20rem] md:h-[35vh] lg:h-[50vh] xl:w-[35rem] ">
            <motion.img src={Image1} alt="" 
            
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
            }}
            
            />
          </div>
          <div className="w-full lg:w-[45%] md:p-6 text-center md:text-left">
            {/* <h1 className=" w-full text-[1.7rem] uppercase font-normal">
              Welcome to the era of Decentralistion
            </h1> */}
            <p className=" w-full text-[#807E87] text-[1rem] uppercase font-normal mt-4 leading-7 tracking-wide">
            Our mission is to simplify your life by managing and automating your bill payments. We tailor our services to meet each client's unique needs, ensuring their financial tasks are handled efficiently and effortlessly. With a deep understanding of our clients' requirements, we provide a seamless, stress-free experience that allows them to focus on what matters most. We're passionate about our work, dedicated to continuous improvement, and committed to achieving the highest level of customer satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutTwo;
