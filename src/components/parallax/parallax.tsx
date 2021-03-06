// src/components/main.tsx
import React from 'react';

import './parallax.scss';

interface ParallaxProps {
  title: string,
  image: string,
 }

export const Parallax: React.SFC<ParallaxProps> = (props) => {
  const image1 = props.image;

  return (
    <>
    <div className="component-parallax">
      <section className="component-parallax-section">
        <img
          src={ image1 }
          alt="test"
          className="component-parallax_img"
          style={{
            filter: `brightness(70%)`
          }}
          />
          <div className="component-parallax_text_section">
            <h1 className="component-parallax_text">{ props.title }</h1>
          </div>
      </section>
    </div>
    </>
 );
};