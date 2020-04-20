import React from 'react';
import './Homepage.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import missedData from './missed-articles.json';
import yourData from './your-articles.json';
import MissedArticles from '../MissedArticles/MissedArticles';
import YourArticles from '../YourArticles/YourArticles';

const HomePage = () => {

  return (
    <div>
      <Container>
        <h5>For You</h5>
        <Row md={2} className='homeRow'>
          <Col><YourArticles data={yourData[0]}/></Col>
          <Col><YourArticles data={yourData[1]}/></Col>
        </Row>
        <Row md={2}>
          <Col><YourArticles data={yourData[2]}/></Col>
          <Col><YourArticles data={yourData[3]}/></Col>
        </Row>

        <h5>In case you missed it</h5>
        <Row md={3}>
          <Col><MissedArticles data={missedData[0]}/></Col>
          <Col><MissedArticles data={missedData[1]}/></Col>
          <Col><MissedArticles data={missedData[2]}/></Col>
        </Row>
      </Container>
    </div>
  )

}


export default HomePage;
