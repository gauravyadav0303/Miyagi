import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { logo } from "../assets";
import { Icon } from "@iconify/react";

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
            className={` hover:text-[#5379FE] text-[18px] font-medium cursor-pointer relative`}
          >
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
            {window.location.pathname === "/" && (
              <span className="dot absolute bottom-[-10px]"></span>
            )}
          </li>
          <li className="hover:text-[#5379FE] text-[18px] font-medium cursor-pointer relative products-dropdown">
            <NavLink to="/storage" className="flex flex-row justify-between">
              Products{" "}
              <span className="mx-auto">
                <Icon
                  icon="iconamoon:arrow-down-2-thin"
                  width="26"
                  className="flex"
                />
              </span>
            </NavLink>
            {window.location.pathname === "/storage" && (
              <span className="dot absolute bottom-[-10px]"></span>
            )}

            <ul className="dropdown-content absolute border-2 p-4 rounded-lg top-[4rem] left-0 flex flex-col gap-4">
              <li className="border-b-2 p-2 text-black">
                <a href="#">Storage</a>
              </li>
              <li className="border-b-2 p-2 text-black">
                <a href="#">Verification</a>
              </li>
              <li className="border-b-2 p-2 text-black">
                <a href="#">Esign</a>
              </li>
            </ul>
          </li>
          <li
            className={` hover:text-[#5379FE] text-[18px] font-medium cursor-pointer relative`}
          >
            <NavLink to="/philosophy">Philosophy</NavLink>
            {window.location.pathname === "/philosophy" && (
              <span className="dot absolute bottom-[-10px]"></span>
            )}
          </li>
          <li
            className={` hover:text-[#5379FE] text-[18px] font-medium cursor-pointer relative products-dropdown`}
          >
            <NavLink
              to="/subscription"
              className="flex flex-row justify-between"
            >
              Subscription{" "}
              <span className="mx-auto">
                <Icon
                  icon="iconamoon:arrow-down-2-thin"
                  width="26"
                  className="flex"
                />
              </span>
            </NavLink>
            {window.location.pathname === "/subscription" && (
              <span className="dot absolute bottom-[-10px]"></span>
            )}

            <ul className="dropdown-content absolute border-2 p-4 rounded-lg top-[4rem] left-0 flex flex-col gap-4">
              <li className="border-b-2 p-2 text-black">
                <a href="#">Storage</a>
              </li>
              <li className="border-b-2 p-2 text-black">
                <a href="#">Pricing</a>
              </li>
              <li className="border-b-2 p-2 text-black">
                <a href="#">Esign</a>
              </li>
            </ul>
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
                <NavLink to="/" exact activeClassName="active">
                  <li>Home</li>
                </NavLink>

                <NavLink to="/storage">
                  <li className="mobile-dropdown">
                    Storage
                    <Icon
                      icon="iconamoon:arrow-down-2-thin"
                      width="26"
                      className="inline-block"
                    />
                    <ul className="mobile-dropdown-content p-4 rounded-lg flex flex-col gap-4">
                      <li className="p-2 text-white">
                        <a href="#">Storage</a>
                      </li>
                      <li className="p-2 text-white">
                        <a href="#">Verification</a>
                      </li>
                      <li className="p-2 text-white">
                        <a href="#">Esign</a>
                      </li>
                    </ul>
                  </li>
                </NavLink>

                <NavLink to="/philosophy">
                  <li>Philosphy</li>
                </NavLink>

                <NavLink to="/subscription">
                  <li className="mobile-dropdown">
                    Subscription
                    <Icon
                      icon="iconamoon:arrow-down-2-thin"
                      width="26"
                      className="inline-block"
                    />
                    <ul className="mobile-dropdown-content p-4 rounded-lg flex flex-col gap-4">
                      <li className="p-2 text-white">
                        <a href="#">Storage</a>
                      </li>
                      <li className="p-2 text-white">
                        <a href="#">Pricing</a>
                      </li>
                      <li className="p-2 text-white">
                        <a href="#">Esign</a>
                      </li>
                    </ul>
                  </li>
                </NavLink>
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
