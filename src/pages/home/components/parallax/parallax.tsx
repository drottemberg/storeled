// src/components/main.tsx
import React from 'react';
import { useEffect, useState } from 'react';
import {Col, Row,} from 'react-bootstrap';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

import './parallax.scss';



export const Parallax = () => {
  const image1 = "https://static.wixstatic.com/media/e49d9d_afa49dd49a924af5962574840e9f5f48~mv2.jpg/v1/fill/w_609,h_430,al_c,q_85,usm_0.66_1.00_0.01/e49d9d_d4fe0feb3b3f4c63a10598969ea5838e~mv2.webp";
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setOffset(window.pageYOffset);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  return (
    <>
    <div className="home-parallax">
      <section className="home-parallax-section">
        <img
          src={image1}
          alt="test"
          className="home-parallax_img"
          style={{
            transform: `translateY(${offset * 0.7}px)`,
            filter: `brightness(60%)`
          }}
          />
        <div  className="home-parallax-text-sections">
            <div className="home-parallax-text">
                <img
                  style={{
                    width:'15em',
                  
                    }}
                    alt="StoreledNOIR-2-pagepng_edited.png" data-type="image"
                    src="/assets/images/logo_white_glow.png"/>
          </div>
          <div className=''>
              <h2 className="home-font2">
                Luminous valance and awning specialist
              </h2>
          </div>
        </div>
      </section>
    </div>
    </>
 );
};
