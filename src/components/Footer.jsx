import { styles } from "../styles";

function Footer() {
  return (
    <section
      className={` w-full py-5 bg-[#5379FE]`}
    >
      <div className="flex flex-col text-center md:flex md:flex-row md:justify-between max-w-[80vw] mx-auto">
        <div className="text-white w-[100%] md:w-[60%] lg:w-[50%]">
          <span className="">@2023 All Rights Reserved</span>
        </div>
        <div className="text-white w-[100%] mt-4 md:mt-[0px] md:w-[45%] lg:w-[30%] xl:w-[17rem] flex flex-row justify-between">
          <a href="#" className="">Privacy Policy</a>
          <a href="#" className="">Terms of Service</a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
