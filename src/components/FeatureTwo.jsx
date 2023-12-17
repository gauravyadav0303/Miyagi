import { styles } from "../styles";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect,useState } from "react";
import { featurecardtwo } from "..";

gsap.registerPlugin(ScrollTrigger);

function FeatureCardTwo({
  Image,
  heading,
  content,
  index,
  activeBox,
  handleBoxClick,
}) {
  return (
    <div
      key={index}
      onClick={() => handleBoxClick(index)}
      className={`${activeBox === index ? "activeBox" : ""}`}
    >
     
        <div className="inneractiveBox flex flex-col w-[310px] h-[390px] md:h-[455px] rounded-3xl shadow border border-slate-200 p-6 gap-3 md:gap-4">
          <div className="featured-image w-[100px] h-[100px] bg-blue-500 rounded-[20px]">
            <img className="feature-image " src={Image} alt="" />
          </div>
          <div>
            <h1 className=" text-[20px] md:text-[25px] font-normal uppercase">
              {heading}
            </h1>
          </div>
          <div>
            <p className="w-full text-[0.9rem] md:text-[1rem] font-thin capitalize leading-6 md:leading-7">
             {content}
            </p>
          </div>
        </div>
      </div>
  );
}

function FeatureTwo() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [activeBox, setActiveBox] = useState(0);

  const handleBoxClick = (index) => {
    setActiveBox(index);
  };


  useEffect(() => {
  }, [activeBox]);

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
          {featurecardtwo.map((feature, index) => (
              <FeatureCardTwo
                key={index}
                index={index}
                activeBox={activeBox}
                handleBoxClick={handleBoxClick}
                {...feature}
              />
            ))}
          </div>
        </motion.div>
      )}
    </section>
  );
}

export default FeatureTwo;
