// src/components/main.tsx
import React from 'react';
import { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';

import './barparallax.scss';

export const BarParallax = () => {

  const barText = [
    'Allumé, votre lambrequin lumineux mettra en avant votre enseigne, votre logo, et votre établissement, qui n\'échappera pas à l\'oeil des passants',
    'Eteint, votre lambrequin lumineux restera original et attractif, etne dénaturera en aucun cas votre store, car parfaitement intégré à celui-ci'
  ]

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    function handleScroll() {
        if(window.pageYOffset > 500) setOffset(window.pageYOffset);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
    {barText.map((item, index) => (
          <Row className="home-barparallax__row" key={ index }>
          <Col md={9}>
              <div className="home-barparallax-bar" />            
          </Col>
          <Col md={3} className="home-barparallax__container">
              <p className="home-barparallax-text">
                { item }
              </p>
          </Col>
      </Row>
    ))}
    </>
 );
};