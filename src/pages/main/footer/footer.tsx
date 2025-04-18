import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './footer.scss';
import { contactInfo, storeLinks, otherLinks } from './foot-mock';

export const Footer = () => {
  const history = useHistory();
 return (
  <footer className="text-muted">
    <hr className="divider-horizontal-dotted"></hr>
    <Container fluid="lg" className="footer-container">
      <Row>
        <Col md={4}>
          <div className="footer-contact-section">
            <div className="footer-contact-text">
              <img  className="footer-contact-img"
                alt="StoreledNOIR-2-pagepng_edited.png"
                data-type="image"
                src="/assets/images/logo_white_glow.png"/>
              {
                contactInfo.map((item, ind) => (
                  <div key={`footer_contact_${ind}`}>
                    {item} <br/>
                  </div>
                ))
              }
            </div>

          </div>
        </Col>

        <Col md={4}>
          <div className="footer-link-section" >
            <div>
              {
                storeLinks.map((item, ind) =>(
                  <div key={`footer_link_${ind}`}>
                     <a href={item.path} className="footer-link" >{item.name}</a>
                  </div>
                ))
              }
            <Button variant="outline-light" size="lg" block style={{margin: '2em 0 0 0'}} onClick={e=>history.push('/quote-request')}>Quote request</Button>

            </div>
          </div>
        </Col>

        <Col md={4}>
          <div className="footer-social-section">
            <div>
              <label className="footer-contact-text">
                Find us everywhere:
              </label>
              <div className='footer-social-img-section'>
                
                <a href='https://www.instagram.com/smart.awnings/' style={{margin: '1em'}} target="_blank">
                  <img className="footer-outsite-img"
                  alt="Facebook Social Icône" data-type="image"
                  style={{width: '39px', height: '39px'}}
                  src="https://static.wixstatic.com/media/9f9c321c774844b793180620472aa4f1.png"/>
                </a>
              </div>
              {
                otherLinks.map((item, ind) => (
                  <div key={`footer_outside_${ind}`}>
                  <a href={item.path} className="footer-link" >{item.name}</a><br/>
                  </div>
                ))
              }
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    <hr className="divider-horizontal-dotted"></hr>
    <Container>
      <p className="footer-copyright-text">
        Smart Awnings &copy; 2025 - All rights reserved - Legal notice

      </p>
    </Container>
  </footer>
 );
};
