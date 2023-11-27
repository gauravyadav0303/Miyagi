import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { logo } from "../assets";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center shadow-sm rounded-3xl bg-white md:max-w-[80vw] mx-auto p-4 border-2">
        <Link
          to="/"
          className=""
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="max-w-[100px] md:max-w-[150px] object-contain"
          />
        </Link>

        <ul className="list-none hidden lg:flex flex-row gap-10">
          <li
            className={` hover:text-[#5379FE] text-[18px] font-medium cursor-pointer`}
          >
            <NavLink to="/" exact activeClassName="active">Home</NavLink>
          </li>
          <li
            className={` hover:text-[#5379FE] text-[18px] font-medium cursor-pointer`}
          >
            <NavLink to="/storage">Storage</NavLink>
          </li>
          <li
            className={` hover:text-[#5379FE] text-[18px] font-medium cursor-pointer`}
          >
            <NavLink to="/philosophy">Philosophy</NavLink>
          </li>
          <li
            className={` hover:text-[#5379FE] text-[18px] font-medium cursor-pointer`}
          >
            <NavLink to="/subscription">Subscription</NavLink>
          </li>
        </ul>

        <div className=" lg:hidden flex flex-1 justify-end items-center">
          <nav role="navigation">
            <div id="menuToggle">
              <input type="checkbox" />

              <span></span>
              <span></span>
              <span></span>

              <ul id="menu">
                <NavLink to="/" exact activeClassName="active"><li>Home</li></NavLink>
                
                <NavLink to="/storage"><li>Storage</li></NavLink>
                
                <NavLink to="/philosophy"><li>Philosphy</li></NavLink>
               
                <NavLink to="/subscription"><li>Subscription</li></NavLink>
              </ul>
            </div>
          </nav>
        </div>
        <motion.div
          className="text-black hidden  lg:inline-block"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <button className=" min-w-[140px] font-poppins font-medium cursor-pointer text-[16px] rounded-xl border-2 p-2 text-white bg-[#5379FE] hover:w-[120px] hover:scale-95">
            Login
          </button>
        </motion.div>
      </div>
    </nav>
  );
};

export default Header;
