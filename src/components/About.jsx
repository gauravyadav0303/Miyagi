import { styles } from "../styles";

function AboutTwo() {
    return ( 

<section className={`w-full min-h-[100vh] mx-auto border-2`}>
        <div
          className={`mt-[100px] max-w-7xl mx-auto ${styles.paddingX} items-start`}
        >
          <div>
            <h1
              className={`${styles.heroHeadText}  text-white uppercase text-center`}
            >
              <span className="text-black">
              Unlock The Power of Blockchain
              </span>
            </h1>
          </div>

          <div className="flex flex-col justify-between mt-4 md:mt-[7rem] lg:flex-row">
            <div className="w-full lg:w-[45%] h-[20rem] md:h-[35vh] lg:h-[60vh] border">

            </div>
            <div className="w-full lg:w-[45%] mt-4 md:mt-[7rem] p-6">
            <h1 
            className=" w-full text-[1.2rem] uppercase font-normal">Welcome to the era of Decentralistion</h1>
                <p
                className=" w-full text-[#807E87] text-[1.1rem] uppercase font-normal mt-4 leading-7 tracking-wide"
                >Witness the emergence of a new era, where trust flows freely, collaboration knows no bounds, and the infinite possibilities of human potential unfold in graceful union with the interconnected web of existence.</p>
            </div>
          </div>
        </div>
        
      </section>
        
     );
}

export default AboutTwo;