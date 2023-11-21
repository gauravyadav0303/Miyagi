import React, { useEffect } from "react";
import { styles } from "../styles";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Power1 } from "gsap";

gsap.registerPlugin(ScrollTrigger);

function GsapSlider() {
  useEffect(() => {
    gsap.to(".fleftelm", {
      scrollTrigger: {
        trigger: "#fimages",
        pin: true,
        start: "top top",
        end: "bottom bottom",
        endTrigger: ".last",
        markers: true,
        scrub: 1,
      },
      y: "-300%",
      ease: Power1,
    });

    
  }, []); 
  return (
  
<div id="featured">
            <div className="fheading">
                <h1>featured</h1>
                <h1>projects</h1>
            </div>
            <div id="fimages" className="transition-none">
                <div id="fleft">
                    <div className="fleftelm">
                        <h3>Riyadh</h3>
                        <h1>official website of riyadh, saudi arabia's capital.</h1>
                        <h4>design, development, product</h4>
                    </div>
                    <div className="fleftelm">
                        <h3>Riyadh</h3>
                        <h1>official website of riyadh, saudi arabia's capital.</h1>
                        <h4>design, development, product</h4>
                    </div>
                    <div className="fleftelm">
                        <h3>Riyadh</h3>
                        <h1>official website of riyadh, saudi arabia's capital.</h1>
                        <h4>design, development, product</h4>
                    </div>
                    <div className="fleftelm last">
                        <h3>Riyadh</h3>
                        <h1>official website of riyadh, saudi arabia's capital.</h1>
                        <h4>design, development, product</h4>
                    </div>
                </div>
                <div id="fright">
                    <div className="images">
                        <img src="https://images.unsplash.com/photo-1692343814412-cbe23ff32765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=767&q=80"
                            alt=""/>
                        <img src="https://images.unsplash.com/photo-1609428079875-ae186c562aff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=689&q=80"
                            alt=""/>
                        <img src="https://images.unsplash.com/photo-1614633833026-0820552978b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
                            alt=""/>
                        <img src="https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
                            alt=""/>
                    </div>
                </div>
            </div>
        </div>

        );
}

export default GsapSlider;
