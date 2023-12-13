import { styles } from "../styles";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { feature1 } from "../assets";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function Feature() {

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });


  useEffect(() => {}, []);

  return (
    <section
      className={`trigger1 w-full xl:min-h-[60vh] relative mx-auto  `}
      ref={ref}
    >
      {inView && (
        <motion.div
          className={`pb-[10vh] w-7xl mx-auto ${styles.paddingX} items-start lg:w-[100vw]`}
        >
          <div className="w-full flex flex-wrap justify-center gap-6">
            
            <div className="border-2 p-[0.1rem] rounded-3xl shadow-2xl">
              <div className="flex flex-col w-[310px] h-full bg-blue-500 rounded-3xl shadow border border-slate-200 p-6 gap-3 md:gap-4">
                <div className="w-[100px] h-[100px] bg-white rounded-[20px]">
                  <img className="feature-image" src={feature1} alt="" />
                </div>
                <div>
                  <h1 className="text-white text-[20px] md:text-[25px] font-normal uppercase">
                    Immutability
                  </h1>
                </div>
                <div>
                  <p className="w-full text-white text-[0.9rem] md:text-[1rem] font-thin capitalize leading-6 md:leading-7">
                    A document once stored on the chain cannot be removed,
                    displaced or edited. This helps protect the integrity of
                    your data.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-[310px]  bg-blue-500 rounded-3xl shadow border border-slate-200 p-6 gap-3 md:gap-4">
              <div className="w-[100px] h-[100px] bg-white rounded-[20px]">
                <img className="feature-image" src={feature1} alt="" />
              </div>
              <div>
                <h1 className="text-white text-[20px] md:text-[25px] font-normal uppercase">
                  Impenetrability
                </h1>
              </div>
              <div>
                <p className="w-full text-white text-[0.9rem] md:text-[1rem] font-thin capitalize leading-6 md:leading-7">
                  On the blockchain, your assets are hack-proof. Its advanced
                  encryption keeps your valuable data safe from unauthorized
                  access.
                </p>
              </div>
            </div>
            <div className="flex flex-col w-[310px]  bg-blue-500 rounded-3xl shadow border border-slate-200 p-6 gap-3 md:gap-4">
              <div className="w-[100px] h-[100px] bg-white rounded-[20px]">
                <img className="feature-image" src={feature1} alt="" />
              </div>
              <div>
                <h1 className="text-white text-[20px] md:text-[25px] font-normal uppercase">
                  Verifiability
                </h1>
              </div>
              <div>
                <p className="w-full text-white text-[0.9rem] md:text-[1rem] font-thin capitalize leading-6 md:leading-7">
                  Chain documents get Miyagi's badge. In "verify now," confirm
                  Miyagi's verification. Post-metadata changes prompt Miyagi
                  denial, saving manual check time.
                </p>
              </div>
            </div>
            <div className="flex flex-col w-[310px] bg-blue-500 rounded-3xl shadow border border-slate-200 p-6 gap-3 md:gap-4">
              <div className="w-[100px] h-[100px] bg-white rounded-[20px]">
                <img className="feature-image" src={feature1} alt="" />
              </div>
              <div>
                <h1 className="text-white text-[20px] md:text-[25px] font-normal uppercase">
                  Time-stamping
                </h1>
              </div>
              <div>
                <p className="w-full text-white text-[0.9rem] md:text-[1rem] font-thin capitalize leading-6 md:leading-7">
                  Chain documents feature a timestamp for verification time and
                  date, ensuring transparency and data integrity.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
}

export default Feature;
