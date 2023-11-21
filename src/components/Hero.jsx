import { motion } from "framer-motion";
// import { ComputersCanvas } from "./canvas";


import { styles } from "../styles";

const Hero = () => {
  return (
    <section className={` w-full min-h-[100vh] mx-auto border-2`}>
      <div
        className={`mt-[140px]  max-w-6xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div>
          <h1
            className={`${styles.heroHeadText}  text-white uppercase text-center`}
          >
            <span className="text-black">
              {"<"}With <span className="text-[#5379FE]">MIYAGI</span> your
              documents are safe{">"}
            </span>
          </h1>
        </div>
      </div>
    
   
   
      <div
        className={` mt-[50px]  max-w-6xl mx-auto ${styles.paddingX} flex flex-row items-start`}
      >
        <div className="mx-auto">
        <motion.button className=" min-w-[140px] font-poppins font-medium cursor-pointer text-[16px] rounded-3xl mr-6 border-2 p-2 text-white bg-[#5379FE] "
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}>
          Verify Now
        </motion.button>
        <motion.button className=" min-w-[160px] font-poppins font-medium cursor-pointer text-[16px] rounded-3xl border-2 p-2 text-black bg-white "
               whileHover={{ scale: 1.1 }}
               whileTap={{ scale: 0.9 }}
               transition={{ type: "spring", stiffness: 400, damping: 17 }}>
          Decentralize Now
        </motion.button>
        </div>
      </div>

      <div className=" mt-[500px] w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-black mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
