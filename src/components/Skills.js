import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

const Skills = () => {
    return (
        <div className="skills-img" id="skills">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 100" className="svg-edu">
                <polygon points="0,0 200,100 1200,100 1400,0" style={{fill:'#fff'}}/>
            </svg>
            <Container>
                <Row className="justify-content-end">
                    <Col sm={12} md={4}>
                        <ListGroup className="list-item ml-5 mt-4 pb-5">
                            <ListGroup.Item className="w-80  skill-text">HTML5</ListGroup.Item>
                            <ListGroup.Item className="w-80  skill-text">CSS3</ListGroup.Item>
                            <ListGroup.Item className="w-80  skill-text">Bootstrap 4</ListGroup.Item>
                            <ListGroup.Item className="w-80  skill-text">SASS</ListGroup.Item>
                            <ListGroup.Item className="w-80  skill-text">JavaScript</ListGroup.Item>
                            <ListGroup.Item className="w-80  skill-text">JQuery</ListGroup.Item>
                            <ListGroup.Item className="w-80  skill-text">ReactJS</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col sm={12} md={ 4} className="mt-3">
                    <div>
                        <h2 className="text-light">Education</h2>
                        <h4 className="edu-text">Armenian National Polytechnic University</h4>
                        <p className="text-seconsary">Bachelor's degree, Enterprises economist and manager</p>
                        <p className="text-seconsary">2015-2019</p>
                    </div>
                    <div>
                        <h4 className="edu-text">American University of Armenia</h4>
                        <p className="text-seconsary">General English courses</p>
                        <p classname="text-seconsary">02.2019-09.2019</p>
                    </div>
                    </Col>
                </Row>
            </Container>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 100" className="svg-img">
                <polygon points="0,0 200,100 1200,100 1400,0 1400,100 0,100 0,0"/>
            </svg>
        </div>
    );
}
export default Skills;