import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBookmark} from '@fortawesome/free-solid-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Articles.css'
import Container from 'react-bootstrap/Container';
import PropTypes from "prop-types";

const AuthorInfo = props => {
  const {postedDate, author, minutesToRead} = {...props};
  const image = author.image;
  const name = author.name;
  const parts = postedDate.toString().split(' ')
  const month = parts[1];
  const day = parts[2];

  return (

    <Container>
      <Row>
        <Col>
            <img alt='author' src={image} height={50} width={50}/>
        </Col>
        <Col xs={6}>
          <p className='authorInfo'>{name}</p>
          <p className='authorInfo'>{month} {day} - {minutesToRead} min read</p>
        </Col>
        <Col>
          <FontAwesomeIcon icon={faBookmark} width='25' height='25'/>
        </Col>
      </Row>
    </Container>

  )
}

AuthorInfo.propTypes = {
  postedDate: PropTypes.string,
  image: PropTypes.any,
  name: PropTypes.string,
  isMediumMember: PropTypes.bool,
  minutesToRead: PropTypes.number
};

export default AuthorInfo;
