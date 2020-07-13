import React from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap';

const About = () => {
    return (
        <Container id="about">
            <Row className="justify-content-md-center">
                <Col md={10}>
                    <Card body className="mt-5 shadow p-3 mb-5 bg-white rounded"><p>I'm motivated, adaptable, responsible and Innovative Front End Developer with 1 year experience building responsive websites . Proficient in HTML, CSS, JavaScript,  plus modern libraries and frameworks.I'm always eager to learn fron anyone and everyone.</p></Card>
                </Col>
            </Row>
        </Container>
    );
}
export default About