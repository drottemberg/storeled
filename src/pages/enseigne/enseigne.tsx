// src/components/main.tsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { enseignes } from './enseign-mock';
import './enseign.scss'

export const Enseigne = () => {
  return (
    <>
    <Container className="enseign__container">
  <h1 style={{ textAlign: 'center', fontSize: '3em', color: 'white', marginTop: '2em' }}>
    Signs
  </h1>
  <p className='enseigne__title'>
    Smart Awnings offers a wide selection of signs, both illuminated and traditional. We will assist you in choosing your communication elements, ensuring they align with your visual identity while providing high-quality equipment that complies with standards.
  </p>
</Container>
    <Container>
      <Row>
        { enseignes.map( (item, ind) => (
        <Col md={6} style={{ marginBottom:'3em', paddingLeft:'0.5em', paddingRight:'0.5em'}} key={`enseigne_item_${ind}`}>
          <a href={item.url}>
          <img src={item.src} className="img-thumbnail enseigne__item__img" alt=""/>
          </a>
          <p className='enseigne__item__title'>{item.title}</p>
        </Col>
        ))}
      </Row>
    </Container>
  </>
 );
};