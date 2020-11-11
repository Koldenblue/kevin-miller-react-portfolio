import React from 'react';
import { useSpring, animated } from 'react-spring';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";


export default function Contributions() {
  const numContributions = useSpring({ config: { precision: 1, friction: 75, tension: 100 }, number: 1650.0, from: { number: 0.0 } });
  const numProjects = useSpring({ config: { precision: 1, friction: 90, tension: 80 }, number: 26, from: { number: 0 } });

  return (<>
    <div className='col-lg-12 contributions'>
      <Row>
        <Col lg={6} className='cont-text text-center'>
          <p >GitHub Contributions: </p>
          <span className='spring-bg'><animated.span className='spring-numbers'>{numContributions.number.interpolate(x => x.toFixed(0))}</animated.span></span>
          <p>and counting!</p>

        </Col>
        <Col lg={6} className='cont-text text-center'>
          <p>Projects Worked On: </p>
          <span className='spring-bg'><animated.span className='spring-numbers'>{numProjects.number.interpolate(x => x.toFixed(0))}</animated.span></span>
          <p>and counting!</p>
        </Col>
      </Row>
    </div>
  </>)
}