import React from 'react';
import { useSpring, animated } from 'react-spring';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";


export default function Contributions() {
  const numContributions = useSpring({ config: {precision: 1, friction: 75, tension: 100}, number: 1650.0, from: { number: 0.0 } });
  const numProjects = useSpring({ config: {precision: 1, friction: 90, tension: 80}, number: 26, from: { number: 0 } });

  return(<>
  <div className='contributions'>
    <p>Contributions to GitHub: <animated.span>{numContributions.number.interpolate(x => x.toFixed(0))}</animated.span> and counting!</p>
    <p>Number of projects worked on: <animated.span>{numProjects.number.interpolate(x => x.toFixed(0))}</animated.span> and counting!</p>
  </div>
  </>)
}