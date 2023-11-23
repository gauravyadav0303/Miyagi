import { styles } from "../styles";
import { motion } from "framer-motion";
import { box1, box2 } from "../assets";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

function Newsletter() {

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
 
  return (
    <section className="{`w-full relative min-h-[60vh] md:min-h-[60vh] mx-auto`} mb-[4rem] md:mb-[10rem] overflow-hidden ">
      <motion.img
        className="box absolute top-[-10vh] left-[0px] xl:top-[0vh] xl:left-[0px] rotate-[-40.33] "
        animate={{
          y: [0, 24, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
        }}
        src={box1}
        alt="box"
      />
      <motion.img
        className="box absolute bottom-[0vh] right-[-100px] rotate-[-40.33]  hidden md:inline-block"
        animate={{
          y: [0, 24, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
        }}
        src={box2}
        alt="box"
      />
      <div
        className={`md:mt-[200px] max-w-3xl xl:max-w-4xl mx-auto ${styles.paddingX}`} ref={ref}
      >
        {inView && (
        <motion.div className="p-2  text-center flex flex-col justify-center"
        initial={{
          opacity: 0,
         
        }}
        animate={{
          opacity: 1,
        
        }}
        transition={{ duration: 1, delay:0.5 }}>
          <h1 className="text-slate-950 text-[1.5rem] xl:text-[2.3rem] font-normal leading-[34px] uppercase mb-8">
            Decentralise. Simplify. Digitilise.
          </h1>
          <p className="text-zinc-500 text-[1rem] xl:text-[1.2rem] font-normal leading-[30px] text-center">
            We’re a diverse and passionate team that takes ownership of your
            problems and empowers you to execute your plans. We stay light on
            our feet and truly enjoy delivering great work.
          </p>
        </motion.div>
        )}
        {/* 
        <div className=" md:w-full lg:w-[90%] xl:w-[90%] h-[61.1px] bg-gray-200 lg:ml-[3rem] mt-[5rem] flex flex-col justify-between md:flex-row rounded-xl pr-2">
          <div className="text-slate-900 md:w-[30%] text-[1.2rem] font-semibold leading-loose tracking-wide text-center pt-[13px]">
          Newsletter Sign Up
          </div>
          <div className="w-[90%] md:w-[70%] xl:w-[70%] h-[50.07px] mt-4 md:mt-[5px] ml-5 md:ml-8 bg-blue-700 rounded-[5px] flex flex-row justify-between">
            <input className="text-white text-base font-normal leading-loose p-2 bg-blue-700 w-[100%] md:w-[50%] outline-none" placeholder="Enter Your Email here...."></input>
            <motion.button className="w-[107.24px] h-[35.05px] bg-white rounded-[5px] my-2 mr-5"
             whileHover={{ scale: 1.2 }}
             whileTap={{ scale: 0.9 }}
             transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                <span className="text-slate-900 text-sm font-normal">Submit</span>
                </motion.button>
            </div>
        </div> */}
      </div>
      <div className={`mt-[5rem] xl:mt-[10rem] max-w-7xl mx-auto ${styles.paddingX} `}>
        <div className="newsletter-section ">
          <h1 className="title ">Join our Newsletter</h1>
          <div className=" md:relative lg:ml-[13rem] xl:ml-[16rem] flex flex-col  md:flex-row">
            <div className="input-wrapper w-[100%] lg:w-[70%] xl:w-[70%]">
              <label for="newsletter" className="label-text">
                
              </label>
              <input type="text" id="newsletter" className="placeholder-white" placeholder="Enter Your Email here...." />
            </div>
            <div className="flex flex-col items-center">
              <button
                className="join-button md:absolute w-[107.24px] h-[35.05px] bg-white rounded-[5px]  md:top-[0.5rem] md:right-[2rem] lg:left-[24rem] xl:left-[34rem] "
              >
                <span className="text-slate-900 text-sm font-normal">
                  Submit
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
