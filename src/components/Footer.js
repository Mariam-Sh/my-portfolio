import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return(
        <div className="footer-img" id="contact">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 100" className="svg-edu">
                <polygon points="0,0 200,100 1200,100 1400,0" style={{fill:'#fff'}}/>
            </svg>
            <div className="heart-icon">
            <i class="fas fa-heart fa-3x"></i>
            </div>
            <div className="thumb-icon">
            <i class="fas fa-thumbs-up fa-3x"></i>
            </div>
            <Container>
                <Row>
                    <Col md={4}>
                    <h2 className="text-light border-bottom mt-2 mb-2">Contact</h2>
                    <p className="text-light mt-3"><i className="fas fa-envelope-square fa-2x mr-3"></i>sharmazanyanmariam@gmail.com</p>
                    <div className="d-flex mt-4">
                        <a href="https://www.linkedin.com/in/mariam-sharmazanyan" target="_blank">
                            <p className="text-light"><i className="fab fa-linkedin fa-2x mr-3"></i></p>
                        </a>
                        <a href="https://www.facebook.com/sharmazanyanm" target="_blank">
                            <p className="text-light"><i className="fab fa-facebook-square fa-2x mr-3"></i></p>
                        </a>
                        <a href="https://github.com/Mariam-Sh/" target="_blank">
                            <p className="text-light"><i className="fab fa-github-square fa-2x mr-3"></i></p>
                        </a>
                    </div>
                    </Col>
                </Row>
            </Container>
        


        </div>
    );
}
export default Footer;