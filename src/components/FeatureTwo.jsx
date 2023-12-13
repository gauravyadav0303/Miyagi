import { styles } from "../styles";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { feature1 } from "../assets";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function FeatureTwo() {
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
            <div className="p-[0.1rem] border-2 rounded-3xl">
              <div className="flex flex-col w-[310px] h-[390px] md:h-[455px] bg-blue-500 rounded-3xl shadow border border-slate-200 p-6 gap-3 md:gap-4">
                <div className="w-[100px] h-[100px] bg-white rounded-[20px]">
                  <img className="feature-image" src={feature1} alt="" />
                </div>
                <div>
                  <h1 className="text-white text-[20px] md:text-[25px] font-normal uppercase">
                    Unrivaled Data Ownership
                  </h1>
                </div>
                <div>
                  <p className="w-full text-white text-[0.9rem] md:text-[1rem] font-thin capitalize leading-6 md:leading-7">
                    Your data is unequivocally yours. With decentralization, you
                    maintain complete ownership and control, eliminating the
                    possibility of external entities accessing or manipulating
                    your information without your consent.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-[310px] h-[350px] md:h-[455px] bg-blue-500 rounded-3xl shadow border border-slate-200 p-6 gap-3 md:gap-4">
              <div className="w-[100px] h-[100px] bg-white rounded-[20px]">
                <img className="feature-image" src={feature1} alt="" />
              </div>
              <div>
                <h1 className="text-white text-[20px] md:text-[25px] font-normal uppercase">
                  Enhanced Privacy Control
                </h1>
              </div>
              <div>
                <p className="w-full text-white text-[0.9rem] md:text-[1rem] font-thin capitalize leading-6 md:leading-7">
                  Your data is shielded from intrusive data mining practices,
                  placing you in control of who accesses your information and
                  how it's utilized.
                </p>
              </div>
            </div>
            <div className="flex flex-col w-[310px] h-[350px] md:h-[455px] bg-blue-500 rounded-3xl shadow border border-slate-200 p-6 gap-3 md:gap-4">
              <div className="w-[100px] h-[100px] bg-white rounded-[20px]">
                <img className="feature-image" src={feature1} alt="" />
              </div>
              <div>
                <h1 className="text-white text-[20px] md:text-[25px] font-normal uppercase">
                  Cryptographic Citadel
                </h1>
              </div>
              <div>
                <p className="w-full text-white text-[0.9rem] md:text-[1rem] font-thin capitalize leading-6 md:leading-7">
                  Elevate your security with our top-tier cryptographic
                  shielding, ensuring an impregnable fortress around your
                  valuable data.
                </p>
              </div>
            </div>
            <div className="flex flex-col w-[310px] h-[350px] md:h-[455px] bg-blue-500 rounded-3xl shadow border border-slate-200 p-6 gap-3 md:gap-4">
              <div className="w-[100px] h-[100px] bg-white rounded-[20px]">
                <img className="feature-image" src={feature1} alt="" />
              </div>
              <div>
                <h1 className="text-white text-[20px] md:text-[25px] font-normal uppercase">
                  Decentralized Data Fragmentation
                </h1>
              </div>
              <div>
                <p className="w-full text-white text-[0.9rem] md:text-[1rem] font-thin capitalize leading-6 md:leading-7">
                  Embracing decentralization, your data is fragmented and stored
                  across diverse nodes. This not only enhances security but also
                  minimizes the risk of a single point of failure.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
}

export default FeatureTwo;
