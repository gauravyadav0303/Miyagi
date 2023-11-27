import { styles } from "../styles";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { box1, box2, box3, box4 } from "../assets";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Power1 } from "gsap";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function Esign() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    gsap.to(".box8",{
      scrollTrigger:{
        trigger:".trigger3",
        start: "top top",
        scrub:1,
      },
      x:-500,
      y: 200,
    
      ease:Power1,
      duration: 2
    })
  }, []);

  return (
    <section
      className={`trigger3 w-full min-h-[100vh] md:pt-[10vh] pb-[10vh] relative mx-auto `}
      ref={ref}
    >
       <motion.img className="box box8 absolute top-[5vh] left-[0px] xl:top-[10vh] hidden md:inline-block xl:left-[0px] rotate-[-40.33]"  
         
         src={box1} alt="box"/>
      <div
        className={`mt-[40px] md:mt-[70px] w-full md:max-w-[44rem]  lg:max-w-5xl mx-auto ${styles.paddingX1} flex flex-row items-start`}
      >
        <div className=" mx-auto flex flex-col gap-[2rem]">
          <div
            className={`text-center text-black text-[1rem] md:text-[1.2rem] font-normal leading-7 md:leading-7  capitalize`}
          >
            At <span className="text-[#5379FE]">Miyagi</span> we offer clients
            the option to digitally sign their documents. E-signs on{" "}
            <span className="text-[#5379FE]">Miyagi</span> are sold singularly.
          </div>
          <div
            className={`text-center text-black text-[1rem] md:text-[1.2rem] font-normal leading-7 md:leading-7  capitalize`}
          >
            This ensures that the client only purchases the number of e-signs
            required by him unlike annual subscriptions where in clients have to
            purchase unlimited e-signs at a hefty price in order to have access
            to the same.
          </div>
          <div className="text-center text-black text-[1rem] md:text-[1.2rem] font-normal leading-7 md:leading-7  capitalize">
            E-signs at <span className="text-[#5379FE]">Miyagi</span> at priced
            @Rs5
          </div>
        </div>
      </div>

      <div
        className={`${styles.paddingX} mt-[5rem] flex flex-wrap justify-center gap-6`}
      >
        <div className="w-[310px] h-[220px] md:h-[270px] bg-blue-500 rounded-3xl p-6 flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <h1 className="text-white text-[25px] md:text-[40px] lowercase">
              $7.81
              <span className="text-white text-2xl lowercase leading-[25px] md:leading-[34px]">
                /MO
              </span>
            </h1>

            <p className=" text-white text-[16px] md:text-[21px] capitalize leading-[25px] md:leading-[34px]">
              Individual Golf professional ({"<"}500 Clients)
            </p>
          </div>
          <div>
            <motion.button
              className=" min-w-[160px] min-h-[50px] font-poppins cursor-pointer text-[16px] rounded-xl  border-2 p-2 text-black bg-white "
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Choose Base
            </motion.button>
          </div>
        </div>
        <div className="w-[310px] h-[220px] md:h-[270px] bg-blue-500 rounded-3xl p-6 flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <h1 className="text-white text-[25px] md:text-[40px] lowercase">
              $7.81
              <span className="text-white text-2xl lowercase leading-[25px] md:leading-[34px]">
                /MO
              </span>
            </h1>

            <p className=" text-white text-[16px] md:text-[21px] capitalize leading-[25px] md:leading-[34px]">
              Individual Golf professional ({"<"}500 Clients)
            </p>
          </div>
          <div>
            <motion.button
              className=" min-w-[160px] min-h-[50px] font-poppins cursor-pointer text-[16px] rounded-xl  border-2 p-2 text-black bg-white "
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Choose Base
            </motion.button>
          </div>
        </div>
        <div className="w-[310px] h-[220px] md:h-[270px] bg-blue-500 rounded-3xl p-6 flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <h1 className="text-white text-[25px] md:text-[40px] lowercase">
              $14.71
              <span className="text-white text-2xl lowercase leading-[25px] md:leading-[34px]">
                /MO
              </span>
            </h1>

            <p className=" text-white text-[16px] md:text-[21px] capitalize leading-[25px] md:leading-[34px]">
              Individual Golf professional ({">"}500 Clients)
            </p>
          </div>
          <div>
            <motion.button
              className=" min-w-[160px] min-h-[50px] font-poppins cursor-pointer text-[16px] rounded-xl  border-2 p-2 text-black bg-white "
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Choose Base
            </motion.button>
          </div>
        </div>
        <div className="w-[310px] h-[220px] md:h-[270px] bg-blue-500 rounded-3xl p-6 flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <h1 className="text-white text-[25px] md:text-[40px] lowercase">
              $22.52
              <span className="text-white text-2xl lowercase leading-[25px] md:leading-[34px]">
                /MO
              </span>
            </h1>

            <p className=" text-white text-[16px] md:text-[21px] capitalize leading-[25px] md:leading-[34px]">
            Larger Academies (More Than 3 Professionals)
            </p>
          </div>
          <div>
            <motion.button
              className=" min-w-[160px] min-h-[50px] font-poppins cursor-pointer text-[16px] rounded-xl  border-2 p-2 text-black bg-white "
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Choose Base
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Esign;
